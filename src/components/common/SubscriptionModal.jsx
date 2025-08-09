import React, { useState } from "react";

const SubscriptionModal = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/icons/logo-green.svg"
            alt="Logo"
            className="w-10 h-10"
          />
        </div>
        <p className="text-sm text-gray-700 mb-6">
          شما میتوانید یکبار به صورت رایگان از سرویس‌های گیاه شناسی و تشخیص
          بیماری استفاده کنید.
        </p>
        <div className="flex w-full justify-between space-x-4">
          <button
            onClick={handleAccept}
            className="w-full px-4 py-2 bg-color text-white rounded-lg text-sm"
          >
            خرید اشتراک
          </button>
          <button
            onClick={handleDecline}
            className="w-full px-4 py-2 bg-gray-200 text-color rounded-lg text-sm"
          >
            رد کردن
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
