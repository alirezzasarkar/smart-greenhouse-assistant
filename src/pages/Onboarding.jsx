import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeSlide from "../components/onboarding/WelcomeSlide";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "دنیای سبز اطرافت را بشناس",
      subtitle:
        "با شناسایی گیاهان اطرافت، ارتباط تازه‌ای با طبیعت برقرار کن. با کمک ابزارهای هوشمند، می‌توانی گونه‌های مختلف گیاهان را تشخیص بدهی و درباره آن‌ها بیشتر یاد بگیری. هر برگ و گل، داستان خودش را دارد!",
      imageSrc: "/public/assets/images/robot-smartphone.png",
      buttonText: "ادامه",
    },
    {
      title: "دنیای سبز اطرافت را بشناس",
      subtitle:
        "با شناسایی گیاهان اطرافت، ارتباط تازه‌ای با طبیعت برقرار کن. با کمک ابزارهای هوشمند، می‌توانی گونه‌های مختلف گیاهان را تشخیص بدهی و درباره آن‌ها بیشتر یاد بگیری. هر برگ و گل، داستان خودش را دارد!",
      imageSrc: "/public/assets/images/robolt-planting.png",
      buttonText: "ادامه",
    },
    {
      title: "گیاهان من دفترچه سبز تو",
      subtitle:
        "با شناسایی گیاهان اطرافت، ارتباط تازه‌ای با طبیعت برقرار کن. با کمک ابزارهای هوشمند، می‌توانی گونه‌های مختلف گیاهان را تشخیص بدهی و درباره آن‌ها بیشتر یاد بگیری. هر برگ و گل، داستان خودش را دارد!",
      imageSrc: "/public/assets/images/robot-book.png",
      buttonText: "شروع کن",
    },
  ];

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/signup-login");
    }
  };

  return (
    <div className="relative h-screen">
      <WelcomeSlide
        title={slides[step].title}
        subtitle={slides[step].subtitle}
        imageSrc={slides[step].imageSrc}
        buttonText={slides[step].buttonText}
        onButtonClick={handleNext}
        currentStep={step}
        totalSteps={slides.length}
      />
    </div>
  );
};

export default Onboarding;
