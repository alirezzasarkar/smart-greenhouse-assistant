import React from "react";

const Description = ({ text }) => {
  return (
    <div
      className="mt-6 text-sm text-gray-600 text-justify leading-loose font-thin"
      // style={{ textAlignLast: "center" }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Description;
