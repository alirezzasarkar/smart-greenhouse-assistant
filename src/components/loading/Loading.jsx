import React from "react";
import Loader from "../../components/common/Loader";

const Loading = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-color px-4">
      <img
        src="/assets/icons/logo.svg"
        alt="لوگو"
        className="w-40 h-40 mb-3 sm:w-40 sm:h-40"
      />
      <h1 className="text-lg font-bold text-white mt-4 mb-28 text-center sm:text-lg">
        لطفاً کمی صبر کن...
        <br />
        در حال بارگذاری دستیار سبز شما 🌱
      </h1>
      <Loader />
    </div>
  );
};

export default Loading;
