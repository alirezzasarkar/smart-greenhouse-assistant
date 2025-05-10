import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-6 py-3 rounded-4xl font-bold cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
