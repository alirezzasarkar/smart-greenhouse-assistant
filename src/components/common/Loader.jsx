const Loader = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 my-10">
      <div className="bg-color h-2.5 rounded-full animate-loading"></div>
      <p className="text-center mt-5 text-color text-sm font-bold">
        در حال بارگذاری
      </p>
    </div>
  );
};

export default Loader;
