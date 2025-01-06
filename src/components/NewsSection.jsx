import React from 'react';
import NewsSection1 from '../assets/NewsSection1.png';
import NewsSection2 from '../assets/NewsSection2.png';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "StylishSettees Sentinel",
      description:
        "Get ready to give your car the full custom upgrade! With our mobile app and convenient booking system, scheduling your car service has never been easier!",
      theme: "dark",
      image: NewsSection1
    },
    {
      id: 2,
      title: "DesignDispatch",
      description:
        "Get ready to give your car the full custom upgrade! With our mobile app and convenient booking system, scheduling your car service has never been easier!",
      theme: "light",
      image: NewsSection2
    },
  ];

  return (
    <div className="bg-[#D8E0E9] py-16">
      <div className="container mx-auto px-24">
        {/* Section Title */}
        <h2 className="lg:text-[80px] text-4xl font-normal font-gidugu text-[#1C4166] text-center mb-12">
          News and Updates
        </h2>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="rounded-3xl lg:w-[500px] w-[400px] h-[270px] lg:h-[270px] overflow-hidden relative"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover "
              />
              
              {/* Left Container */}
              <div
                className={`absolute left-0 top-0 h-full w-[146px] ${
                  item.theme === "dark" ? "bg-white" : "bg-white"
                }`}
              >
                {/* Content */}
                <div className="p-8 h-full flex flex-col justify-between">
                  <div className="w-[102px]">
                    <h3
                      className={`text-[18px] font-normal leading-[33.37px] font-gidugu mb-4 ${
                        item.theme === "dark" ? "text-[#1C4166]" : "text-[#1C4166]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-[8px] font-inter font-thin leading-[9.68px] ${
                        item.theme === "dark"
                          ? "text-gray-700"
                          : "text-gray-700"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <button
                    className={`self-start px-4 py-2 rounded-full text-[8px] ${
                      item.theme === "dark"
                        ? "bg-[#1C4166] text-white"
                        : "bg-[#1C4166] text-white"
                    } hover:opacity-90 transition-opacity`}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;