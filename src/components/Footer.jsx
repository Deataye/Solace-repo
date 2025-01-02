import React from "react";
import ChairImg from '../assets/Footer1.png'; // Replace with the actual path to your chair image

const Footer = () => {
  return (
    <footer className="bg-[#1C4166] text-white py-16  relative" style={{borderRadius:'20px 0px 0px 0px'}}>
      <div className="container mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo Section */}
        <div className="col-span-1 border-r-2   flex items-center">
          <h1 className="text-[30px] leading-[36.51px] font-normal   font-diplomata">SOLACE</h1>
        </div>
        {/* <div className="col-span-1 flex items-center p divide-x divide-white ">
          
        </div> */}

        {/* Catalog Section */}
        <div className="col-span-1  relative ml-[25%]">
          <h2 className="text-[40px] font-gidugu font-normal  mb-4">Catalog</h2>
          <ul className="space-y-2 font-inter font-normal hover:text-yellow-500 text-[18px] leading-[21.78px] text-[#FFFFFF96]">
            <li>Sofas & Armchair</li>
            <li>Wingback Chair</li>
            <li>Lawson Sofa</li>
            <li>Modular Sofa</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="col-span-1">
          <h2 className="text-[40px] font-gidugu font-normal mb-4">Contacts</h2>
          <ul className="space-y-2 font-inter font-normal text-[18px] hover:text-yellow-500 leading-[21.78px] text-[#FFFFFF96] ">
            <li>873-091</li>
            <li>solace@gmail.com</li>
            <li>924 Elm Street, Cityville, USA</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="col-span-1">
          <h2 className="text-[40px] font-gidugu font-normal mb-4">Follow Us</h2>
          <ul className="space-y-2 font-inter font-normal text-[18px] hover:text-yellow-500 leading-[21.78px] text-[#FFFFFF96]">
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Twitter</li>
            <li>Telegram</li>
          </ul>
        </div>
      </div>

      
    {/* Chair Image */}
<div className="absolute -top-[50%] -right-20 w-[150px] md:w-[200px] lg:w-[258px]">
  <img src={ChairImg} alt="Chair" className="object-cover object-center" />
</div>

    </footer>
  );
};

export default Footer;
