import React, { useState } from "react";
import SmartConsultantChat from "../components/common/SmartConsultantChat";
import SmartConsultantInput from "../components/common/SmartConsultantInput";
import Loading from "../components/common/PlantLoader";

/**
 * The SmartConsultant component renders a chat-like interface for users to interact
 * with a smart consultant bot. The component displays a chat log of messages, and
 * also renders an input field at the bottom of the screen where users can type
 * messages to send to the bot. The component is meant to be used for a mobile app
 * and is styled as such.
 *
 * The component takes no props and returns a JSX element representing the entire
 * chat interface.
 *
 * @returns {JSX.Element} the rendered chat interface
 */
const SmartConsultant = () => {
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `سلام!👋 اینجا می‌تونی هر سوالی درباره گیاهت بپرسی\nمثلاً بپرسی:\nچرا برگای گیاه من زرد شده؟\nچند وقت یکبار باید آبیاری کنم؟\nچه کودی برای کاکتوس خوبه؟\nسوالاتی تایپ کن یا با میکروفون بفرست، ما اینجاییم تا کمکت کنیم!`,
    },
  ]);

  const handleSend = (msg) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: msg },
      {
        from: "bot",
        text: "درحال حاضر امکان پاسخگویی از سمت ربات امکان پذیر نمیباشد",
      },
    ]);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative flex w-full flex-col h-full px-4 pb-25">
      <SmartConsultantChat messages={messages} />
      <div
        class=" fixed bottom-15 left-1/2 -translate-x-1/2 px-4 z-10 w-full"
        style={{ maxWidth: "430px" }}
      >
        <SmartConsultantInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default SmartConsultant;
