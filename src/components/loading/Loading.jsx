import React from "react";
import Loader from "../../components/common/Loader";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-color px-4">
      <img
        src="/public/assets/icons/logo.svg"
        alt="لوگو"
        className="w-40 h-40 mb-3 sm:w-40 sm:h-40"
      />
      <h1 className="text-lg font-bold text-white mt-4 mb-28 text-center sm:text-lg">
        سازمان نظام مهندسی کشاورزی و منابع طبیعی استان مازندران
      </h1>
      <Loader />
    </div>
  );
};

export default Loading;
