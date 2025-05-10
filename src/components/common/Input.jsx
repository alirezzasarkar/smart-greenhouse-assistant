import React from "react";

const Input = ({ type, name, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-3 mb-4 border border-gray-300 rounded-full text-right text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
    />
  );
};

export default Input;
