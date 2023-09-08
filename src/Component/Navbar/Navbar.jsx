import React from 'react';
import {
    Box,
    Heading,
    Flex,
    Spacer,
    Text,
    Center
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box width={'100%'} bg='pink.200' height={'50px'} p={1}>
            <Flex justifyContent={'space-between'} alignItems='center'>
                <Box>
                <RouterLink to='/'> <Text fontSize='2xl'>Expense Tracker App</Text> </RouterLink>
                </Box>

                <Box width={'40%'}>
                    <Flex  spacing='24px' justifyContent={'space-evenly'} alignItems='center'>
                        <RouterLink to='/'><Text fontSize='xl'>Dashboard</Text> </RouterLink>

                        <RouterLink to='/login'><Text fontSize='xl'>Login</Text> </RouterLink>

                        <RouterLink to='/signup'><Text fontSize='xl'>Signup</Text> </RouterLink>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar
