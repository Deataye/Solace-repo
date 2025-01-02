import React, { useState } from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-0 py-4">
        {/* Logo */}
        <div className='w-[233px] h-[57px] top-[25px]  p-[10px] '>
          <p className=' font-diplomata text-white font-normal text-[30px] leading-[36.51px]'>
          SOLACE
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center text-[40px] leading-[74.16px] items-center gap-[94px] flex-1">
          <a
            href="#"
            className="font-gidugu text-white border-b-2 border-yellow-500"
          >
            Home
          </a>
          <a
            href="#"
            className="font-gidugu text-white hover:text-yellow-500"
          >
            Blog
          </a>
          <a
            href="#"
            className="font-gidugu text-white hover:text-yellow-500"
          >
            Contact us
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex">
          <div className="relative w-[175px]">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent font-inter border-b border-yellow-500 px-2 py-4 w-[175px] text-yellow-500 placeholder-yellow-500 focus:outline-none text-[15px] leading-[18.15px]"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-16 6h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden  mt-2 space-y-3 px-6 bg-gray-900 py-4">
          <a
            href="#"
            className="block text-white border-b-2 border-yellow-500 py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white hover:text-yellow-500 py-2"
          >
            Blog
          </a>
          <a
            href="#"
            className="block text-white hover:text-yellow-500 py-2"
          >
            Contact us
          </a>
          <div className="relative py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent border-b border-yellow-500 px-2 py-1 text-white placeholder-gray-400 focus:outline-none text-sm"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;