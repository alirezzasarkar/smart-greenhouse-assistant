import React from "react";

const Question = ({
  question,
  options,
  name,
  kind = "single",
  onChange,
  value,
}) => {
  const isMulti = kind === "multi";

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    // console.log(e.target);
    const checked = e.target.checked;

    if (isMulti) {
      let newValue;
      if (checked) {
        newValue = [...(value || []), selectedValue];
      } else {
        newValue = (value || []).filter((v) => v !== selectedValue);
      }
      onChange(name, newValue);
    } else {
      onChange(name, selectedValue);
    }
  };

  return (
    <div className="my-8">
      <p
        className="text-sm font-medium text-gray-700 mb-2"
        style={{ fontFamily: "IRANSans" }}
      >
        {question}
      </p>
      {options.map((option, index) => {
        const checked = isMulti
          ? (value || []).includes(option.label)
          : value === option.label;

        return (
          <label key={index} className="flex items-center mb-2 cursor-pointer">
            <input
              type={isMulti ? "checkbox" : "radio"}
              name={name}
              value={option.label}
              checked={checked}
              onChange={handleChange}
              className={
                isMulti
                  ? "form-checkbox text-green-500 focus:ring-green-400"
                  : "form-radio text-green-500 focus:ring-green-400"
              }
            />
            <span className="mr-2 text-gray-500 text-sm">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default Question;
