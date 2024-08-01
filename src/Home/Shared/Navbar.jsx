// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50 italic">
      <div className="container mx-auto flex items-center p-4 space-x-10">
      <div className="flex items-center">
          <Link to="/">
            <img
              src= {logo} // Replace with your logo URL
              alt="Brand Logo"
              className="h-10" // Adjust height as needed
            />
          </Link>
        </div>
    <div className="pl-64">
        <ul className="flex space-x-6">
        <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
            <Link to="/about" className="hover:text-gray-400">About Us </Link>
        </li>
        <li>
            <Link to="/categories" className="hover:text-gray-400">Categories</Link>
        </li>
        <li>
            <Link to="/shop" className="hover:text-gray-400">Shops</Link>
        </li>
        <li>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </li>
        </ul>
    </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
