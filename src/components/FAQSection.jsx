import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What kind of furniture does Woodwoon offer?",
      answer:
        "Woodwoon offers a wide range of furniture, including sofas, dining tables, wardrobes, beds, and dressing tables.",
    },
    {
      question: "What materials does Woodwoon use to make their furniture?",
      answer:
        "Woodwoon uses high-quality wood, metal, and fabric materials to craft durable and stylish furniture pieces.",
    },
    {
      question: "Can I customize my furniture order?",
      answer:
        "Yes, Woodwoon provides customization options for select furniture items to meet your specific preferences.",
    },
    {
      question: "What is the price range for Woodwoon’s furniture products?",
      answer:
        "The price range varies from $200 to $5000 depending on the furniture type and customization options.",
    },
    {
      question: "What are the latest bed designs at Woodwoon?",
      answer:
        "Woodwoon offers modern bed designs, including platform beds, storage beds, and upholstered beds.",
    },
    {
      question: "What are the modern designs of Woodwoon’s dressing tables?",
      answer:
        "Woodwoon features sleek dressing tables with built-in mirrors, storage drawers, and minimalist aesthetics.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#D8E0E9] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-[#1C4166] text-[55px] font-gidugu font-normal mb-6">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[#1C4166] text-xl font-bold">›</span>
                <p className="text-[#1C4166] text-lg font-inter font-medium">
                  {faq.question}
                </p>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 text-md mt-2 font-inter font-light">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
