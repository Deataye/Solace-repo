import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link
            to="/"
            className="font-gidugu text-white text-2xl xl:text-4xl border-b-2 border-yellow-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="font-gidugu text-white text-2xl xl:text-4xl hover:text-yellow-500 transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="font-gidugu text-white text-2xl xl:text-4xl hover:text-yellow-500 transition-colors duration-300"
          >
            Contact us
          </Link>
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
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-gray-900 px-4 py-6 space-y-4">
          <Link
            to="/"
            className="block text-white text-lg border-b-2 border-yellow-500 py-2 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block text-white text-lg hover:text-yellow-500 py-2 transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-white text-lg hover:text-yellow-500 py-2 transition-colors duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
