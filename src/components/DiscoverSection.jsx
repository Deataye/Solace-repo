import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import Discoverbg from "../assets/Discoverbg.png";

const DiscoverSection = () => {
  const categories = [
    { name: "Bedroom Chair", logo: logo1 },
    { name: "Dining", logo: logo2 },
    { name: "Wardrobe", logo: logo3 },
    { name: "Center Table", logo: logo4 },
    { name: "Sofa Set", logo: logo5 },
    { name: "Dressing", logo: logo6 },
    { name: "Bed", logo: logo7 },
    { name: "L Shape Sofa", logo: logo8 },
  ];

  return (
    <div
      className="relative bg-cover bg-center lg:h-screen "
      style={{ backgroundImage: `url(${Discoverbg})` }}
    >
      {/* Hero Content */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="container lg:h-screen mx-auto px-4 relative z-10 text-white py-16">
        <h1 className="lg:text-[96px] text-[40px] font-gidugu font-normal">
          Discover Timeless Comfort
        </h1>
        <p className="lg:text-[24px]  font-inter font-normal mb-20 lg:mb-36">
          Your Ultimate Furniture Destination
        </p>
        <button className="text-white lg:text-[50px] lg:mb-32 text-4xl font-gidugu border-b-2 border-yellow-500 hover:text-yellow-500 transition-colors">
          Shop Now
        </button>
      </div>

      {/* Categories */}
      <div className="bg-[#1C4166] hidden lg:relative lg:block py-2">
        <div className="container mx-auto  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              {/* Logo */}
              <img
                src={category.logo}
                alt={category.name}
                className="w-5 h-5   mt-2 object-contain"
              />
              {/* Name */}
              <p className="text-[32px] text-white font-gidugu font-normal ">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
