import React from "react";
import TopCategories1 from "../assets/TopCategories1.png";
import TopCategories2 from "../assets/TopCategories2.png";
import TopCategories3 from "../assets/TopCategories3.png";
import TopCategories4 from "../assets/TopCategories4.png";
import TopCategories5 from "../assets/TopCategories5.png";

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Urban Chic Collection",
      description:
        "This collection embodies the essence of coastal charm, offering furniture pieces that are designed to evoke feelings of tranquility and ease.",
      image: TopCategories1,
    },
    {
      id: 2,
      title: "Eclectic Oasis Collection",
      description:
        "This collection embodies the essence of coastal charm, offering furniture pieces that are designed to evoke feelings of tranquility and ease.",
      image: TopCategories2,
    },
    {
      id: 3,
      title: "Vintage Elegance Collection",
      description:
        "This collection embodies the essence of coastal charm, offering furniture pieces that are designed to evoke feelings of tranquility.",
      image: TopCategories3,
    },
    {
      id: 4,
      title: "Modern Luxe Collection",
      description:
        "This collection embodies the essence of coastal charm, offering furniture pieces that are designed to evoke feelings of tranquility.",
      image: TopCategories4,
    },
    {
      id: 5,
      title: "Minimalist Marvel Collection",
      description:
        "This collection embodies the essence of coastal charm, offering furniture pieces that are designed to evoke feelings of tranquility.",
      image: TopCategories5,
    },
  ];

  return (
    <div className="bg-[#D8E0E9] py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-[#1C4166] text-3xl md:text-[55px] font-gidugu font-normal mb-6 md:mb-10 text-start">
          Top Categories
        </h2>

        {/* Categories Grid (First Two Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {categories.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl md:rounded-3xl w-full h-[200px] md:h-[270px] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Left Content Overlay */}
              <div className="absolute left-0 top-0 h-full w-[150px] md:w-[200px] bg-[#D9D9D973] flex flex-col justify-between p-4 md:p-8">
                <div className="w-full md:w-[130px]">
                  <h3 className="text-base md:text-[18px] font-gidugu font-normal leading-tight md:leading-[33.37px] text-white mb-2 md:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[8px] md:text-[10px] font-inter font-thin leading-tight md:leading-[12px] text-gray-700">
                    {item.description}
                  </p>
                </div>
                <button className="self-start px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[8px] md:text-[10px] bg-[#1C4166] text-yellow-500 hover:opacity-90 transition-opacity">
                  Shop now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-8">
          {categories.slice(2).map((category) => (
            <div
              key={category.id}
              className="relative bg-white rounded-xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Background Image */}
              <div
                className="h-[250px] md:h-[413px] bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#D9D9D973] p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center text-white">
                  <div>
                    <h3 className="text-base md:text-[18px] font-gidugu font-normal mb-1 md:mb-2">
                      {category.title}
                    </h3>
                    <p className="text-[10px] md:text-[12px] font-inter font-light leading-tight md:leading-[18px] mb-2 md:mb-4">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex justify-start md:justify-center">
                    <button className="bg-[#1C4166] text-yellow-500 text-[10px] md:text-[12px] py-1.5 md:py-2 px-3 md:px-4 rounded hover:bg-[#142b4a]">
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-6 md:mt-8 text-center">
          <button className="text-[#1C4166] text-base md:text-lg underline hover:text-[#142b4a]">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;