import React from "react";
import { Link } from "react-router-dom";

/**
 * The NotFound component is a page that displays a 404 error
 * message and a graphic.
 *
 * @returns {JSX.Element} The JSX element representing the NotFound component.
 */
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-30 overflow-hidden">
      <div className="flex flex-col items-center justify-center flex-grow overflow-auto">
        <img
          src="/assets/icons/notfound.svg"
          alt="404 Page Not Found Graphic"
          className="max-w-full h-auto"
        />
        <p
          className="text-sm text-gray-800 text-justify px-5 mt-15 mb-6 leading-relaxed"
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
