import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Loading = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/assets/animations/loading.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return <></>;

  return (
    <div className="loading-main flex justify-center items-center h-screen">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Loading;
