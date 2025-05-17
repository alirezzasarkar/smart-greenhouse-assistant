import React, { useState } from "react";

const SmartConsultantInput = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (value.trim()) {
      onSend(value);
      setValue("");
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-4xl px-4 py-4 bg-white mb-10 shadow-md">
      <input
        type="text"
        className="flex-1 border-none outline-none  text-sm"
        placeholder="سوال خود را بپرسید"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button className="text-green-500 mr-2" onClick={handleSend}>
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M3 12l18-9-9 18-2-7-7-2z" fill="#16A34A" />
        </svg>
      </button>
    </div>
  );
};

export default SmartConsultantInput;
