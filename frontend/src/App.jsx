import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/contact" element={<Contact />} />


          </Routes>
          </Router>
    </div>
  )
}

export default App