import React from "react";

const ResultButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-10 px-6 py-3 cursor-pointer bg-color text-white rounded-4xl shadow-md"
    >
      مشاهده نتایج
    </button>
  );
};

export default ResultButton;
