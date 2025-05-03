import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/img.jpg";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);
  const handlelogin=()=>{
    navigate("/login")
  }
  const han=()=>{
    navigate("/");
  }
  const handleMore=()=>{

    navigate("/about")
  }
  return (
    <div className="w-full bg-black rounded-2xl">
      <div className="max-w-7xl mx-auto p-2 flex items-center justify-between h-16">

        <div className="flex items-center space-x-6">
          <img src={logo} className="rounded-2xl w-30 h-14 p-1" alt="logo" />
          <div className="hidden md:flex items-center space-x-4 text-white">
            <div className="flex items-center mb-3 hover:text-yellow-300 hover:underline cursor-pointer" onClick={han}>
              <FaHome className="mr-1" /> Home
            </div>
            <p className="hover:text-yellow-300 hover:underline cursor-pointer">Automotive Batteries</p>
            <p className="hover:text-yellow-300 hover:underline cursor-pointer">Warranty Registration</p>
            <p className="hover:text-yellow-300 hover:underline cursor-pointer">Power Backup</p>
            <p className="hover:text-yellow-300 hover:underline cursor-pointer">Help & Support</p>
            <p className="hover:text-yellow-300 hover:underline cursor-pointer" onClick={handleMore}>More</p>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="bg-green-200 px-4 py-2 rounded hover:bg-yellow-300 transition-all duration-300"  onClick={handlelogin}>
            Login
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-2 space-y-2">
          <div className="hover:text-yellow-300 hover:underline cursor-pointer"><FaHome className="inline mr-1" /> Home</div>
          <div className="hover:text-yellow-300 hover:underline cursor-pointer">Automotive Batteries</div>
          <div className="hover:text-yellow-300 hover:underline cursor-pointer">Warranty Registration</div>
          <div className="hover:text-yellow-300 hover:underline cursor-pointer">Power Backup</div>
          <div className="hover:text-yellow-300 hover:underline cursor-pointer">Help & Support</div>
          <div className="hover:text-yellow-300 hover:underline cursor-pointer">More</div>
          <button className="w-full bg-green-200 text-black px-4 py-2 rounded hover:bg-yellow-300 transition-all duration-300" onClick={handlelogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
