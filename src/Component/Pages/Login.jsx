import React, { useState } from 'react';
import axios from 'axios';
import {
  Heading,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
//import {useDispatch, useSelector} from 'react-redux';

const Login = () => {

  const navigate = useNavigate();
  const[loginStatus,setLoginStatus] = useState("");
  //const loginInfo = useSelector((store) => store.isLogin)
  //const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://tacker-server.onrender.com/users');
      const users = response.data;

      // Check if the user's entered email/username and password match any user in the database
      const user = users.find((u) => u.email === userInfo.email && u.password === userInfo.password);

      if (user) {
        console.log('Login successful');
        setLoginStatus("Login successfull")
        navigate('/')
      } else {
        console.log('Invalid login credentials');
        setLoginStatus("Invalid login credentials")
      }
    } catch (error) {
      console.error('An error occurred', error);
      setLoginStatus("Something went wrong")
    }
  }
  return (
    <Box>
      <Heading mt={10}>Login</Heading>
      <form onSubmit={(e) => handleLogin(e) }>
      <FormControl pl={'30vw'} pr={'30vw'}>
        <FormLabel>Email</FormLabel>
        <Input type='email' name='email' placeholder='Enter your email' value={userInfo.email} onChange={(e) => handleInputChange(e)} />

        <FormLabel>Password</FormLabel>
        <Input type='text' name='password' placeholder='Enter Password' value={userInfo.password} onChange={(e) => handleInputChange(e)} />
        </FormControl>
        <Button colorScheme='pink' width={'15vw'} mt={10} type='submit'>Login</Button>
        </form>
        <Text mt={10} fontSize='lg'>{loginStatus}</Text>
    </Box>
  )
}

export default Login


