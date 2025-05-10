import React from "react";

const OnboardingIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center mt-4" dir="ltr">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
            index === currentStep ? "bg-color w-8" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default OnboardingIndicator;
