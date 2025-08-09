import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeSlide from "../components/onboarding/WelcomeSlide";
import AuthContext from "../context/AuthContext";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { handleSetFirstVisit, firstCustomerVisit } = useContext(AuthContext);

  useEffect(() => {
    if (!firstCustomerVisit) {
      navigate("/");
    }
  }, [firstCustomerVisit, navigate]);

  const slides = [
    {
      title: " به دنیای سبز و هوشمند ما خوش آمدید🌿",
      subtitle:
        " در اینجا با بهره‌گیری از هوش مصنوعی، مراقبت از گیاهان ساده‌تر، دقیق‌تر و لذت‌بخش‌تر خواهد شد.",
      imageSrc: "/assets/images/robot-smartphone.png",
      buttonText: "ادامه",
    },
    {
      title: "کافیست از گیاه خود عکس بگیرید،",
      subtitle:
        "ما با تحلیل تصویر، وضعیت سلامت آن را بررسی کرده و در صورت وجود مشکل، راه‌حل مناسب را پیشنهاد می‌دهیم.",
      imageSrc: "/assets/images/robolt-planting.png",
      buttonText: "ادامه",
    },
    {
      title: "پس بیایید آغاز کنیم 🌱",
      subtitle:
        "با ثبت نام در پلتفرم، یک همراه هوشمند و همیشه در دسترس برای مراقبت از گیاهانتان خواهید داشت.",
      imageSrc: "/assets/images/robot-book.png",
      buttonText: "شروع کن",
    },
  ];

  /**
   * Advances the onboarding step to the next slide.
   * If the current step is not the last slide, increments the step by one.
   * Otherwise, navigates to the sign-up/login page.
   */

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      handleSetFirstVisit();
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
