import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <p className="font-diplomata text-white text-xl sm:text-2xl md:text-3xl">
            SOLACE
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center items-center gap-8 xl:gap-16 flex-1">
          <a
            href="#"
            className="font-gidugu text-white text-2xl xl:text-4xl border-b-2 border-yellow-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="font-gidugu text-white text-2xl xl:text-4xl hover:text-yellow-500 transition-colors duration-300"
          >
            Blog
          </a>
          <a
            href="#"
            className="font-gidugu text-white text-2xl xl:text-4xl hover:text-yellow-500 transition-colors duration-300"
          >
            Contact us
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-shrink-0">
          <div className="relative w-36 xl:w-44">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent font-inter border-b border-yellow-500 px-2 py-2 w-full text-yellow-500 placeholder-yellow-500 focus:outline-none text-sm"
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
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
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
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-gray-900 px-4 py-6 space-y-4">
          <a
            href="#"
            className="block text-white text-lg border-b-2 border-yellow-500 py-2 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white text-lg hover:text-yellow-500 py-2 transition-colors duration-300"
          >
            Blog
          </a>
          <a
            href="#"
            className="block text-white text-lg hover:text-yellow-500 py-2 transition-colors duration-300"
          >
            Contact us
          </a>
          <div className="relative py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent border-b border-yellow-500 px-2 py-2 text-white placeholder-yellow-500 focus:outline-none text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
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
      </div>
    </nav>
  );
};

export default Navbar;