import React from "react";

const Question = ({ question, options, name, onChange }) => {
  return (
    <div className="my-8">
      <p
        className="text-sm font-medium text-gray-700 mb-2"
        style={{ fontFamily: "IRANSans" }}
      >
        {question}
      </p>
      {options.map((option, index) => (
        <label key={index} className="flex items-center mb-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={onChange}
            className="form-radio text-green-500 focus:ring-green-400"
          />
          <span className="mr-2 text-gray-500 text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Question;
