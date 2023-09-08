import React,{useState} from 'react'
import {
  Select,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'

const Tracker = () => {
  const[trackerInfo,setTrackerInfo] = useState({
    type: "",
    category: "",
    price: "",
    date: "",
    price: "",
  })

  const handleInputChange = (e) => {
    setTrackerInfo({...trackerInfo, [e.target.name]:e.target.value})
  }

  return (
    <Box>
    <Heading mt={10}>Add Product</Heading>
    <form action="">
    <FormControl>
        <FormLabel>Type</FormLabel>
        <Select name='type' placeholder='Select Type' onChange={(e) => handleInputChange(e)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </Select>

        <FormLabel>Category</FormLabel>
        
            {trackerInfo.type==="Income" ? (
                <Select name='category' placeholder='Select Category' onChange={(e) => handleInputChange(e)}>
                <option value="Salary">Salary</option>
                <option value="Gifts">Gifts</option>
                <option value="Refunds">Refunds</option>
                <option value="Other">Other</option>
                </Select>
            ) : (
                
                <Select name='category' placeholder='Select Category' onChange={(e) => handleInputChange(e)}>
                <option value="Food & Drinks">Food & Drinks</option>
                <option value="Shopping">Shopping</option>
                <option value="Housing">Housing</option>
                <option value="Bills">Bills</option>
                <option value="Vehicle & Transport">Vehicle & Transport</option>
                <option value="LifeStyle">LifeStyle</option>
                </Select>
            )}
            
        

      <FormLabel>Price</FormLabel>
      <Input type='text' name='price' placeholder='Enter Price' value={trackerInfo.price} onChange={(e) => handleInputChange(e)} />

      <FormLabel>Date</FormLabel>
      <Input type="datetime-local" name='date' placeholder='Select Date' value={trackerInfo.price} onChange={(e) => handleInputChange(e)} />
    </FormControl>

    <Button mt={10} width={'10rem'} colorScheme='pink' type='submit'>Create</Button>
    </form>
    </Box>
  )
}

export default Tracker
