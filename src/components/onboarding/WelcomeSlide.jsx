import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import OnboardingIndicator from "./OnboardingIndicator";

const WelcomeSlide = ({
  title,
  subtitle,
  imageSrc,
  buttonText,
  onButtonClick,
  onSkip,
  currentStep,
  totalSteps,
}) => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/signup-login");
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white pb-6">
      <img src={imageSrc} alt="تصویر" className="w-full rounded-lg" />
      <h3 className="text-xl font-bold text-black text-center mt-10">
        {title}
      </h3>
      <p
        className="text-sm text-gray-700 text-justify px-5 mb-6 leading-relaxed"
        style={{ textAlignLast: "center" }}
      >
        {subtitle}
      </p>
      <OnboardingIndicator currentStep={currentStep} totalSteps={totalSteps} />
      <hr className="w-full border-t my-3 border-gray-100" />
      <div className="flex justify-between mb-2 w-full max-w-md">
        <Button
          onClick={onButtonClick}
          className="bg-color text-white hover:bg-green-800 w-1/2 mx-2"
        >
          {buttonText}
        </Button>
        <Button
          onClick={handleSkip}
          className="bg-color-btn text-color hover:bg-gray-600 w-1/2 mx-2"
        >
          رد کردن
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSlide;
