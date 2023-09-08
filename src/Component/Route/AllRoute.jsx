import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';


const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
  )
}

export default AllRoute
