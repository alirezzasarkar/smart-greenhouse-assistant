import React, { useState } from "react";

const Dropdown = ({
  options,
  placeholder,
  onChange,
  searchPlaceholder = "جستجو گیاه",
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="relative w-full mt-5 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-4xl px-5 py-3 text-right focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-between flex-row-reverse text-gray-500"
      >
        <span className="text-color">
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1.5L8 8.5L1 1.5"
              stroke="#888888"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        {selectedOption || placeholder}
      </button>
      {isOpen && (
        <>
          <div className="p-2 relative">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="relative top-3 z-100 w-full px-3 py-3 border bg-menu border-none rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
            />
          </div>
          <ul className="absolute top-14 pt-15 text-sm z-10 w-full bg-white border border-gray-300 rounded-3xl shadow-lg mt-1 max-h-60 overflow-auto p-2">
            {options
              .filter((option) => option.includes(searchTerm))
              .map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="p-2 px-3 hover:bg-green-100 rounded-3xl cursor-pointer text-gray-800"
                >
                  {option}
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dropdown;
