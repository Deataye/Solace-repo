import React, { useState } from 'react';
import ContactSectionbg from '../assets/ContactSectionbg.png';

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="relative h-screen rounded-[20px] max-h-[300px] lg:max-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src={ContactSectionbg}
          alt="Modern navy sofa with wooden frame"
          className="w-full h-full object-center object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/10"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col items-center  py-4  mx-auto text-center">
          <h2 className="text-white lg:text-[80px] text-3xl font-normal lg:leading-[148.33px] font-gidugu ">
            Connect with us for an unforgettable conversation
          </h2>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="lg:w-[307px] max-w-md">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full px-6 py-3 rounded-[20px] bg-[#FFFFFF5E] backdrop-blur-sm 
                          text-gray-800 placeholder-gray-500
                          focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2
                         p-2 rounded-full text-gray-600 hover:text-blue-500
                         transition-colors duration-200"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
