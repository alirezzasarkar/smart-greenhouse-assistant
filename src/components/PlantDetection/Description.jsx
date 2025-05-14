import React from "react";

const Description = ({ text }) => {
  return (
    <div className="mt-6 text-sm text-gray-600 text-center leading-loose font-thin">
      <p>{text}</p>
    </div>
  );
};

export default Description;
