import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { useState } from 'react';
import React from 'react'
import Home from './components/Home';
import Login from "./Pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Pages/About"
import 'leaflet/dist/leaflet.css';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
           <Route path="/about" element={<About />} />
          </Routes>
          </Router>
    </div>
  )
}

export default App