import React from "react";

const SmartConsultantChat = ({ messages }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
            msg.from === "bot"
              ? "self-end bg-color text-white rounded-br-none"
              : "self-start bg-gray-100 text-gray-800 rounded-bl-none"
          }`}
        >
          {msg.text.split("\n").map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SmartConsultantChat;
