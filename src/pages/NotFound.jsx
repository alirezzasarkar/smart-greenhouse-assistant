import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-700 p-6 min-h-full overflow-hidden">
      <div className="flex flex-col items-center justify-center flex-grow overflow-auto">
        <img
          src="/public/assets/icons/404.svg"
          alt="404 Page Not Found Graphic"
          className="max-w-full h-auto"
        />
        <p
          className="text-sm text-gray-100 text-justify px-5 mb-6 leading-relaxed"
          style={{ textAlignLast: "center" }}
        >
          صفحه‌ای که دنبالش می‌گردی، مثل یه گیاه خشک شده ناپدید شده! نگران نباش،
          برگرد به صفحه اصلی و دوباره رشد کن.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
