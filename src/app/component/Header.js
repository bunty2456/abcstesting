import React from 'react';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
  
          <div className="flex-shrink-0 text-white text-2xl font-bold tracking-wide">
            MyBrand
          </div>

          <nav className="space-x-6 hidden md:flex">
            <Link href="/" className="text-white font-medium hover:text-yellow-300 transition duration-300">Home</Link>
            <Link href="/about" className="text-white font-medium hover:text-yellow-300 transition duration-300 ">About</Link>
            <Link href="/services" className="text-white font-medium hover:text-yellow-300 transition duration-300">Services</Link>
            <Link href="/contact" className="text-white font-medium hover:text-yellow-300 transition duration-300">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300">
              Sign In
            </button>
          </div>

          <div className="md:hidden text-white">
            ☰
          </div>
        </div>
      </div>
    </header>

    
  );
};

export default Header;
