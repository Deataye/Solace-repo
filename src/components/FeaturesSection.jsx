import React from 'react';
import FeaturesSection1 from '../assets/FeaturesSection1.png';
import FeaturesSection2 from '../assets/FeaturesSection2.png';
import FeaturesSection3 from '../assets/FeaturesSection3.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const FeaturesSection = () => {
  const services = [
    {
      icon: icon1,
      title: "Tailored to Order",
      description: "Each item is uniquely tailored to the customer's taste",
    },
    {
      icon: icon2,
      title: "Free Delivery",
      description: "We offer free delivery services for all our products.",
    },
    {
      icon: icon3,
      title: "Free Exchange",
      description: "Exchange items hassle-free within the return period.",
    },
  ];

  return (
    <div className="bg-[rgba(216,224,233,1)] max-w-[1440px] mx-auto py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Services Column */}
          <div className="col-span-12 md:col-span-4 w-[299px] space-y-6">
            {services.map((service, index) => (
              <div key={index} className="bg-transparent border border-black rounded-3xl ">
                <div className="flex flex-col bg-[#F9F9F9D6] my-4 py-4 border border-[#0000004D] rounded-[31px] items-center text-center">
                  <div className="w-[35px] h-[30px]">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#000000] font-inter text-[26px] font-semibold mb-2">{service.title}</h3>
                  <p className="text-[#000000] font-inter font-extralight text-[12px] text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Images Grid */}
          <div className="col-span-12  w-[110%] overflow-hidden md:col-span-8">
            <div className="grid grid-cols-2 h-full">
              {/* Center Image */}
              <div className="rounded-[40px] border border-[#1C4166] my-32 mx-10 overflow-hidden w-[281px] h-[408px]">
                <img
                  src={FeaturesSection1}
                  alt="Blue dining chair"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column Images */}
              <div className="space-y-6">
                <div className="rounded-[40px] border border-[#1C4166] relative right-24 overflow-hidden w-[350px] h-[369px]">
                  <img
                    src={FeaturesSection2}
                    alt="Orange accent chair"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[40px] border border-[#1C4166]  overflow-hidden w-full relative right-6 h-[182px]">
                  <img
                    src={FeaturesSection3}
                    alt="Gray sofa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;