import React, { useState } from 'react'
import {
    Box,
    Button,
    Heading,
    Flex
} from '@chakra-ui/react';
import { Route, Link as RouterLink } from 'react-router-dom';
import Tracker from './Tracker';
import Analytics from './Analytics';
import History from './History';

const Dashboard = () => {
    
    const[page,setPage] = useState(1);

    const handlePage = (val) => {
        setPage(val)
    }

    return (
        <Box mt={10}>
            <Heading>Welcome to Dashboard </Heading>
            <Flex justifyContent={'center'} mt={10} spacing={4} direction='row' align='center'>

                <Button width={'10rem'} colorScheme='pink' size='lg' onClick={() => handlePage(1)}>
                    Tracker
                </Button> 
                <Button ml={5} width={'10rem'} colorScheme='pink' size='lg' onClick={() => handlePage(2)}>
                    Analytics
                </Button> 
                <Button ml={5} width={'10rem'} colorScheme='pink' size='lg' onClick={() => handlePage(3)}>
                    History
                </Button> 
            </Flex>

            <Box mt={10}>
            {page === 1 ? <Tracker /> : page === 2 ? <Analytics /> : <History/>}
            </Box>
        </Box>
    )
}

export default Dashboard
