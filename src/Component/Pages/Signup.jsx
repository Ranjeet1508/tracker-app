import React, { useEffect, useState } from 'react';
import {
    Heading,
    Box,
    Input,
    Button,
    FormControl,
    FormLabel
} from '@chakra-ui/react';
import axios from 'axios';

const Signup = () => {

    const [id, setId] = useState(null);

    const getDataFromAPI = () => {
        axios.get('https://tacker-server.onrender.com/users')
            .then(function (response) {
                // handle success
                let arr = response.data;
                console.log(arr.length)
                setId(arr.length+1)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    useEffect(() => {
        getDataFromAPI();
    }, [])

    const [userInfo, setUserInfo] = useState({
        id: id,
        name: "",
        email: "",
        password: "",
    })

    const handleInputChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://tacker-server.onrender.com/users', userInfo)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        setUserInfo({ ...userInfo, name: "", email: "", password: "" })
        console.log(userInfo)
    }
    return (
        <Box>
            <Heading mt={10}>Signup</Heading>
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormControl pl={'30vw'} pr={'30vw'}>

                    <FormLabel>Full Name</FormLabel>
                    <Input type='text' name='name' placeholder='Enter your name' value={userInfo.name} onChange={(e) => handleInputChange(e)} />

                    <FormLabel>Email</FormLabel>
                    <Input type='email' name='email' placeholder='Enter your email' value={userInfo.email} onChange={(e) => handleInputChange(e)} />

                    <FormLabel>Password</FormLabel>
                    <Input type='text' name='password' placeholder='Enter Password' value={userInfo.password} onChange={(e) => handleInputChange(e)} />

                </FormControl>
                <Button colorScheme='pink' width={'15vw'} mt={10} type='submit'>Signup</Button>
            </form>

        </Box>
    )
}

export default Signup
