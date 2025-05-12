import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="w-full max-w-md mb-10 bg-amber-100 rounded-xl text-center">
      <img
        src="/public/assets/images/main-banner.png"
        alt="بنر اصلی"
        className="w-full h-full mx-auto"
      />
    </div>
  );
};

export default WelcomeBanner;
