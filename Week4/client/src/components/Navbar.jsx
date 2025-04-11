import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">MyStore</div>
      <div className="space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="#products" className="hover:text-gray-400">Products</a>
      </div>
    </nav>
  );
};

export default Navbar;
