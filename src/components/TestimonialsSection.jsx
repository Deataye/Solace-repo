import React, { useState, useEffect } from 'react';
import TestimonialsSectionbg1 from '../assets/TestimonialsSectionbg1.png';
import TestimonialsSectionbg2 from '../assets/TestimonialsSectionbg2.png';
import TestimonialsSectionbg3 from '../assets/TestimonialsSectionbg3.png';
import Profile1 from '../assets/Profile1.png';
import Profile2 from '../assets/Profile2.png';
import Profile3 from '../assets/Profile3.png';


const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ronald Joes',
      image: Profile1,
      testimonial:
        'The selection was fantastic, offering everything from modern to classic styles. What really impressed me was the quality of the furniture.',
      backgroundImage: TestimonialsSectionbg1,
    },
    {
      id: 2,
      name: 'Yashima Gill',
      image: Profile2,
      testimonial:
        'I found the perfect sofa that exceeded my expectations in both comfort and style.',
      backgroundImage: TestimonialsSectionbg2,
    },
    {
      id: 3,
      name: 'Zara Hadid',
      image: Profile3,
      testimonial:
        'The staff were incredibly helpful, patiently guiding me through options and offering valuable advice without any pressure to buy.',
      backgroundImage: TestimonialsSectionbg3,
    },
  ];

  const products = [
    'Rocking chair ',
    'Recliner chair ⭐',
    'Clubchair ⭐',
    'Chaise lounge ⭐',
    'Rocking chair ⭐',
    'Recliner chair ⭐',
    'Clubchair ⭐',
    'Chaise lounge ⭐',
  ];

  const [currentProducts, setCurrentProducts] = useState(products);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => prev - 300); // Smooth scrolling

      setTimeout(() => {
        setCurrentProducts((prevProducts) => {
          const updatedProducts = [...prevProducts];
          const firstProduct = updatedProducts.shift();
          updatedProducts.push(firstProduct);
          return updatedProducts;
        });
        setTranslateX(0); // Reset position
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[rgba(216,224,233,1)] pb-[64px]">
      <div className="container mx-auto px-4">
        {/* Testimonials Header */}
        <div className="mb-20 flex justify-center">
          <div className="bg-[#1C4166] text-[rgba(217,217,217,1)] py-3 px-8 rounded-[20px] inline-block">
            <h2 className="text-[65px] leading-relaxed font-gidugu  font-normal">What our customers say about us</h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 justify-items-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-transparent border border-custom-gray w-[354px] h-[460px] rounded-3xl overflow-hidden shadow-sm flex flex-col items-center"
            >
              {/* Background Image */}
              <div className="h-[168px] w-[352px] relative rounded-[20px] overflow-hidden ">
                <img
                  src={testimonial.backgroundImage}
                  alt="Interior"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Image */}
              <div className="relative -top-10 ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[107px] h-[107px] rounded-full "
                />
              </div>

              {/* Testimonial Content */}
              <div className="px-8   ">
                <h3
                  className="text-white  px-6  place-self-center -mt-6 mb-5  bg-[#84A3BB] rounded-full "
                  style={{
                    fontFamily: 'Gidugu, sans-serif',
                    fontWeight: 400,
                    fontSize: '30px',
                    lineHeight: '55.62px',
                  }}
                >
                  {testimonial.name}
                </h3>
                <p
                  className="text-gray-600 text-left"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 200,
                    fontSize: '18px',
                    lineHeight: '21.78px',
                  }}
                >
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Products Banner */}
        <div className="bg-[#1C4166]  h-[140px] overflow-hidden relative">
          <div
            className="flex whitespace-nowrap transition-transform duration-500"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {currentProducts.map((product, index) => (
              <span key={index}  className="text-white  "
              style={{
                fontFamily: 'Gidugu, sans-serif',
                fontWeight: 400,
                fontSize: '80px',
                lineHeight: '148.62px',
              }}>
                {product}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

