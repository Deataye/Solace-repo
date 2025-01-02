import React from 'react';
import FurnitureBg from '../assets/Herobg.png';

const Hero = () => {
  return (
    <div
      className="relative h-[943px] bg-[#1B2631] bg-cover  bg-center py-28"
      style={{ backgroundImage: `url(${FurnitureBg})`,
      borderRadius:'0px 0px 20px 20px'}
    }
    >
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        <div className="pt-36 md:pt-44 ml-0 lg:pt-10 max-w-[836px] mx-auto text-left">
          <h2 
            className="text-white text-[50px] ml-5  font-gidugu"
            style={{ lineHeight: '92.7px' }}
          >
            Elevate your
          </h2>
          <h1 
            className="text-white text-[80px] ml-24 font-diplomata mt-1 mb-3"
            style={{
              lineHeight: '97.36px',
              letterSpacing: '0.02em',
              textShadow: '2px 2px 4px rgba(255, 255, 255, 0.2)',
            }}
          >
            COMFORT
          </h1>
          <p 
            className="text-white text-[50px] text-center ml-96 font-gidugu mt-0"
            style={{ lineHeight: '92.7px' }}
          >
            Explore Our Seating Collection
          </p>
          <div className="mt-20">
            <button
              className="text-white text-[50px] font-gidugu border-b-2 border-yellow-500 hover:text-yellow-500 transition-colors pb-2"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="absolute -bottom-20 left-1/2  transform -translate-x-1/2 w-[780px] h-[155px] ">
        <div className="bg-white rounded-[20px] shadow-xl py-4 px-6 lg:px-2">
          <div className="grid grid-cols-4 divide-x divide-gray-300 text-center">
            {[
              { number: '9', text: 'Years Experience' },
              { number: '11', text: 'Branches' },
              { number: '21K+', text: 'Furniture' },
              { number: '270K+', text: 'Varied Furniture' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h3 
                  className="text-[#1C4166] text-[60px] font-gidugu font-normal "
                  style={{ lineHeight: '111.79px' }}
                >
                  {item.number}
                </h3>
                <p 
                  className="text-[#1C4166] text-[20px] w-[127px] font-inter font-light"
                  style={{ lineHeight: '24.26px' }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
