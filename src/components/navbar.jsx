import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quote Hub</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-800 hover:text-purple-600">Home</Link>
          <Link to="/quotes" className="text-gray-800 hover:text-purple-600">Quotes</Link>
          <Link to="/about" className="text-gray-800 hover:text-purple-600">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
