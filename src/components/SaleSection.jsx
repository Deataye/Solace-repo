import React from "react";
import sale1 from "../assets/sale1.png";
import sale2 from "../assets/sale2.png";
import sale3 from "../assets/sale3.png";
import sale4 from "../assets/sale4.png";
import chair1 from "../assets/chair1.jpeg";
import chair2 from "../assets/chair2.jpeg";
import chair3 from "../assets/chair3.jpeg";
import chair4 from "../assets/chair4.jpeg";
import saleicon from "../assets/saleicon.png";

const SaleSection = () => {
  const saleItems = [
    { id: 1, name: "Duyvis Rattan Dining Chair", price: "Rs.42,100", originalPrice: "Rs.65,500", image: chair1, discount: saleicon },
    { id: 2, name: "Duyvis Rattan Dining Chair", price: "Rs.42,100", originalPrice: "Rs.65,500", image: chair2, discount: saleicon },
    { id: 3, name: "Duyvis Rattan Dining Chair", price: "Rs.42,100", originalPrice: "Rs.65,500", image: chair3, discount: saleicon },
    { id: 4, name: "Duyvis Rattan Dining Chair", price: "Rs.42,100", originalPrice: "Rs.65,500", image: chair4, discount: saleicon },
    { id: 5, name: "Duyvis Rattan Dining Chair", price: "Rs.42,100", originalPrice: "Rs.65,500", image: chair1, discount: saleicon },
    { id: 6, name: "Duyvis Rattan Dining Chair", price: "Rs.42,100", originalPrice: "Rs.65,500", image: chair2, discount: saleicon },
    { id: 7, name: "Duyvis Rattan Dining Chair", price: "Rs.42,100", originalPrice: "Rs.65,500", image: chair3, discount: saleicon },
    { id: 8, name: "Duyvis Rattan Dining Chair", price: "Rs.42,100", originalPrice: "Rs.65,500", image: chair4, discount: saleicon },
  ];

  const featuredLogos = [
    { id: 1, logo: sale3 },
    { id: 2, logo: sale2 },
    { id: 3, logo: sale1 },
    { id: 4, logo: sale4 },
  ];

  return (
    <div className="bg-[#D8E0E9] py-6 md:py-10">
      {/* Sale Section */}
      <div className="container max-w-[1442px] mx-auto px-4">
        <h2 className="text-[#1C4166] text-3xl md:text-[55px] font-gidugu font-normal mb-4 md:mb-8">Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-6">
          {saleItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#D8E0E9] border border-gray-300 h-auto md:h-[307px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] md:h-[150px] object-cover"
                />
                <img
                  src={item.discount}
                  alt="Sale Icon"
                  className="absolute top-0 right-0 w-[45px] h-[50px] md:w-[55px] md:h-[60px]"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-[#1C4166] text-sm font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="text-[#1C4166] text-sm font-semibold">
                  {item.price}{" "}
                  <span className="line-through text-gray-400">
                    {item.originalPrice}
                  </span>
                </p>
                <button className="mt-3 md:mt-4 bg-[#D8E0E9] text-[#1C4166] border border-[#1C4166] text-xs py-2 px-4 rounded-full hover:text-white hover:bg-[#142b4a] w-full md:w-auto">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured In Section */}
      <div className="bg-[#1C4166] rounded-xl md:rounded-3xl py-6 md:py-10 mt-6 md:mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-xs md:w-[250px] mx-auto">
            <h3 className="text-[#1C4166] bg-[#D8E0E9] rounded-full px-4 md:px-0 font-gidugu font-normal text-3xl md:text-[50px] leading-normal md:leading-[50px] mb-4 md:mb-6 text-center">
              Featured in
            </h3>
          </div>
          <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-40 max-w-4xl mx-auto">
            {featuredLogos.map((logo) => (
              <img
                key={logo.id}
                src={logo.logo}
                alt="Logo"
                className="h-[30px] md:h-[49px] w-full md:w-[185px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;