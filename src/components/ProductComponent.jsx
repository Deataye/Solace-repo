import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productImage1 from "../assets/Product1.png";
import productImage2 from "../assets/Product2.png";
import productImage3 from "../assets/Product3.png";
import hearticon from '../assets/hearticon.png'
import changeicon from '../assets/changeicon.png'

const ProductComponent = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-[#D8E0E9] py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="rounded-3xl overflow-hidden mb-6">
            <img
              src={productImage1}
              alt="Main Product"
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img
              src={productImage1}
              alt="Product Thumbnail"
              className="w-full h-[120px] object-cover rounded-lg"
            />
            <img
              src={productImage2}
              alt="Product Thumbnail"
              className="w-full h-[120px] object-cover rounded-lg"
            />
            <img
              src={productImage3}
              alt="Product Thumbnail"
              className="w-full h-[120px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="">
          <h1 className="text-[#1C4166] text-[28px] md:text-[40px] font-gidugu font-normal mb-4">
            Saturn End Table
          </h1>
          <div className="mb-6 flex flex-row font-inter font-light">
            <p className="text-red-500 text-[20px] md:text-[24px] line-through">
              Rs.995,000
            </p>
            <p className="text-[#1C4166] text-[20px] md:text-[24px] ml-2 ">
              Rs.845,750{" "}
              <span className="bg-[#1C4166] text-yellow-500 text-sm px-2 py-1 rounded-lg ml-2">
                SAVE 15%
              </span>
            </p>
            
          </div>
          <p className="text-[#1C4166] text-[14px] md:text-[16px] mb-4">
              You saved 15.00%
            </p>

          {/* Product Size */}
          <div className="mb-6">
            <p className="text-[#1C4166] text-[14px] md:text-[16px] font-semibold mb-2">
              SIZE:W240CM x H79CM x D106CM
            </p>
            <button className="bg-[#1C4166] font-inter  text-white py-1 px-4 rounded-md">
              W240CM x H79CM x D106CM
            </button>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-4 py-2 bg-[#1C4166] text-white rounded-md text-xl"
              >
                -
              </button>
              <span className="px-4 py-2 text-[#1C4166] text-lg font-medium">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-4 py-2 bg-[#1C4166] text-white rounded-md text-xl"
              >
                +
              </button>
            </div>
            <button className="bg-[#1C4166] text-white py-2 px-6 rounded-lg hover:bg-[#142b4a] transition-colors">
              Add to cart
            </button>
            <button className=" text-[#1C4166] ">
            <img src={hearticon} alt="Heart Icon" className="w-8 h-7" />
            </button>
            <button className=" text-[#1C4166] ">
            <img src={changeicon} alt="Heart Icon" className="w-7 h-7" />
            </button>
          </div>

          {/* Additional Information */}
          <div className=" grid grid-cols-2 font-inter">
            <p className="text-[#1C4166] text-[14px] md:text-[16px] font-semibold">
              Type:
            </p>
            <p className="text-[#1C4166] text-[14px] md:text-[16px] ">
              Sofas
            </p>
            <p className="text-[#1C4166] text-[14px] md:text-[16px] font-semibold">
              SKU:
            </p>
            <p className="text-[#1C4166] text-[14px] md:text-[16px] ">
              EHT-M004157
            </p>
            <p className="text-[#1C4166] text-[14px] md:text-[16px] font-semibold">
              Availability:
            </p>
            <p className="text-[#1C4166] text-[14px] md:text-[16px] ">
              In Stock
            </p>
          </div>

          {/* Notes */}
          <div className="mt-6 font-inter ">
            <p className="text-[#1C4166] text-[14px] md:text-[16px] font-semibold mb-2">
              Note:
            </p>
            <ul className="list-disc list-inside text-[#1C4166] text-[12px] md:text-[14px]">
              <li>
                Free delivery for online orders only in Lahore, Islamabad, and
                Rawalpindi.
              </li>
              <li>
                Delivery to other cities is subject to additional charges.
              </li>
              <li>
                Delivered in 5 to 6 working days for ready-to-order items.
              </li>
              <li>
                Our Delivery officer shall call you to communicate the exact
                delivery timelines.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
