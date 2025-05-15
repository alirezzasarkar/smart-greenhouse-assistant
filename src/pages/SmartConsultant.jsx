import React, { useState } from "react";
import SmartConsultantChat from "../components/common/SmartConsultantChat";
import SmartConsultantInput from "../components/common/SmartConsultantInput";

const SmartConsultant = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `سلام!👋 اینجا می‌تونی هر سوالی درباره گیاهت بپرسی\nمثلاً بپرسی:\nچرا برگای گیاه من زرد شده؟\nچند وقت یکبار باید آبیاری کنم؟\nچه کودی برای کاکتوس خوبه؟\nسوالاتی تایپ کن یا با میکروفون بفرست، ما اینجاییم تا کمکت کنیم!`,
    },
    { from: "user", text: "سلام !!" },
  ]);

  const handleSend = (msg) => {
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
  };

  return (
    <div className="flex flex-col h-full p-4">
      <SmartConsultantChat messages={messages} />
      <div
        className="fixed bottom-20 left-0 w-full px-4"
        style={{ maxWidth: 430, margin: "0 auto" }}
      >
        <SmartConsultantInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default SmartConsultant;
