import React from 'react';
import FurnitureBg from '../assets/Herobg.png';

const Hero = () => {
  return (
    <div
      className="relative h-[340px] lg:h-[943px] bg-[#1B2631] bg-cover  bg-center lg:py-28"
      style={{ backgroundImage: `url(${FurnitureBg})`,
      borderRadius:'0px 0px 20px 20px'}
    }
    >
      {/* Hero Content */}
      <div className="container mx-auto  px-4 md:px-6 lg:px-20">
        <div className="pt-24 md:pt-44 ml-0 lg:pt-10 lg:max-w-[836px] mx-auto text-left">
          <h2 
            className="text-white lg:text-[50px] text-2xl ml-5  font-gidugu"
            style={{ lineHeight: 'lg:92.7px' }}
          >
            Elevate your
          </h2>
          <h1 
            className="text-white lg:text-[80px]  text-[30px] lg:ml-24 font-diplomata mt-1 mb-3"
            style={{
              lineHeight: 'lg:97.36px',
              letterSpacing: '0.02em',
              textShadow: '2px 2px 4px rgba(255, 255, 255, 0.2)',
            }}
          >
            COMFORT
          </h1>
          <p 
            className="text-white lg:text-[50px] text-2xl w-full text-center  lg:ml-[250px] font-gidugu mt-0"
            style={{ lineHeight: 'lg:92.7px' }}
          >
            Explore Our Seating Collection
          </p>
          <div className="lg:py-48  ">
            <button
              className="text-white lg:text-[50px] text-3xl font-gidugu border-b-2 border-yellow-500 hover:text-yellow-500 transition-colors  lg:pb-2"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="absolute -bottom-14 lg:-bottom-20 left-1/2  transform -translate-x-1/2 w-full lg:w-[780px]  lg:h-[155px] ">
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
                  className="text-[#1C4166] lg:text-[60px] text-4xl font-gidugu font-normal "
                  style={{ lineHeight: 'lg:111.79px' }}
                >
                  {item.number}
                </h3>
                <p 
                  className="text-[#1C4166] lg:text-[20px] lg:w-[127px] font-inter font-light"
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
