import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Books from '../Components/Books';
import SingleBook from '../Components/SingleBook';
import Signup from '../Pages/Signup';
import About from '../Pages/About';
import { PrivateRoute } from './PrivateRoute';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path="/books" element={
            <PrivateRoute>
                  <Books />
            </PrivateRoute>
      } />
      <Route path="/books/:id" element={
            <PrivateRoute>
                <SingleBook />
            </PrivateRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
