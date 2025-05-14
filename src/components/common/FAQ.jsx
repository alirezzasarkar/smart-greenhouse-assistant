import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-menu rounded-2xl">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-right px-4 py-4 text-sm text-gray-800 font-medium flex justify-between items-center"
          >
            {faq.question}
            <span>
              {openIndex === index ? (
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8L8.5 2L2 8"
                    stroke="#05A86B"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L8.5 8L15 2"
                    stroke="#05A86B"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </span>
          </button>
          {openIndex === index && (
            <p className="px-4 py-4 text-sm text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
