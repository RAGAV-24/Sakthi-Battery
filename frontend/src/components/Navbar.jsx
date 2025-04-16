import React from 'react';
import logo from "../assets/img.jpg";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between bg-blue-900 px-4">

      <div className="flex items-center space-x-6">
        <img src={logo} className="rounded-2xl w-20 h-13 p-1" alt="logo" />

        <div className="flex items-center space-x-2 text-white hover:text-yellow-300 hover:underline cursor-pointer">
          <FaHome />
          <p>Home</p>
        </div>

        <p className="text-white hover:text-yellow-300 hover:underline cursor-pointer">Automotive Batteries</p>
        <p className="text-white hover:text-yellow-300 hover:underline cursor-pointer">Warranty Registration</p>
        <p className="text-white hover:text-yellow-300 hover:underline cursor-pointer">Power Backup</p>
        <p className="text-white hover:text-yellow-300 hover:underline cursor-pointer">Help & Support</p>
        <p className="text-white hover:text-yellow-300 hover:underline cursor-pointer">More</p>
      </div>

      <div className="text-black font-medium">
        <button className="bg-green-200 px-4 py-2 rounded hover:bg-yellow-300 transition-all duration-300">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
