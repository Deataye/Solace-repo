import React from 'react';
import InspirationSection1 from '../assets/InspirationSection1.png';
import InspirationSection2 from '../assets/InspirationSection2.png';

const InspirationSection = () => {
  return (
    <div className="bg-[rgba(216,224,233,1)] pt-32  lg:pt-40 pb-0  ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col gap-12">
          {/* First Section */}
          <div className="flex flex-col lg:flex-row items-center  lg:items-start  lg:gap-6">
            {/* Image */}
            <div className="relative lg:w-[520px] lg:h-[411.02px]   ">
              <img
                src={InspirationSection1}
                alt="Vintage style chair"
                className="w-full  object-center object-cover"
              />
            </div>
            {/* Content */}
            <div className="bg-transparent border border-custom-gray p-6 rounded-[25px] -mt-28 lg:-mt-0 lg:w-[579px]">
              <h2 
                className="text-[#1C4166] font-gidugu font-normal text-3xl lg:text-[70px] lg:eading-[129.79px] lg:w-[498px] mb-4"
              >
                Dive into inspired living
              </h2>
              <p 
                className="text-gray-600 font-inter font-thin lg:text-[25px] lg:w-[494px] lg:leading-[30.26px]"
              >
                Start your home transformation today and discover the endless possibilities for 
                creating a space that reflects your unique style and personality.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {/* Content */}
            <div className="bg-transparent border border-custom-gray p-6 rounded-[25px]   lg:w-[793px]">
              <h2 
                className="text-[#1C4166] font-gidugu font-normal text-3xl  lg:text-[70px] lg:leading-[129.79px] lg:w-[755px] mb-4"
              >
                Embark on a Stylish Living Experience
              </h2>
              <p 
                className="text-gray-600 font-inter font-thin lg:text-[25px] lg:w-[626px] lg:leading-[30.26px]"
              >
                Embark on a journey of reinvention as you step into our world of exquisite furniture and decor. 
                Transform your living space from ordinary to extraordinary with our curated collection of timeless pieces.
              </p>
            </div>
            {/* Image */}
            <div className="relative lg:w-[520.69px]  ">
              <img
                src={InspirationSection2}
                alt="Modern blue armchair"
                className=" w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationSection;
