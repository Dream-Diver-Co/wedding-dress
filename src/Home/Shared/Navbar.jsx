// src/Navbar.js
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-around items-center">
        <div className="">
           <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-4 italic">
          <Link to="/" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">Home</Link>
          <Link to="/about" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">About Us</Link>
          <Link to="/categories" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">Categories</Link>
          <Link to="/shops" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">Shops</Link>
          <Link to="/contact" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">Contact</Link>
        </div>
        <div className="md:hidden">
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
