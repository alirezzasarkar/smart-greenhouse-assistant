import React, { useState, useEffect } from "react";

const VerifyCodeInput = ({ value, onChange }) => {
  const [code, setCode] = useState(value.split(""));

  useEffect(() => {
    onChange(code.join(""));
  }, [code, onChange]);

  const handleChange = (index, e) => {
    const newCode = [...code];
    newCode[index] = e.target.value.slice(-1);
    setCode(newCode);
    if (e.target.value && index < 4) {
      document.getElementsByName(`code-${index + 1}`)[0].focus();
    }
  };

  return (
    <div className="flex justify-between mb-4">
      {Array(5)
        .fill()
        .map((_, index) => (
          <input
            key={index}
            type="text"
            name={`code-${index}`}
            value={code[index] || ""}
            onChange={(e) => handleChange(index, e)}
            maxLength="1"
            className="w-15 h-15 border border-gray-200 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ))}
    </div>
  );
};

export default VerifyCodeInput;
