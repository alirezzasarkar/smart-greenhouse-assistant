import React from "react";

const PageDescription = ({ title, description }) => {
  return (
    <>
      <h2 className="text-base font-semibold mb-3 text-right">{title}</h2>
      <p className="text-sm text-gray-500 leading-relaxed text-justify">
        {description}
      </p>
    </>
  );
};

export default PageDescription;
