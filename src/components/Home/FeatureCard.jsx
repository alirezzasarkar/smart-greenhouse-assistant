import React from "react";

const FeatureCard = ({
  title,
  description,
  icon,
  backgroundColor,
  reverse,
  position,
}) => {
  return (
    <div
      className={`py-6 rounded-lg relative text-center shadow-md flex items-center ${backgroundColor} ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <img
        src={icon}
        alt={`${title} Icon`}
        className={`w-26 h-28 mr-4 ml-4 absolute ${position}`}
      />
      <div className="w-full">
        <h2 className="text-sm mb-2 font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
