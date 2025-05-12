import React from "react";
import { Link } from "react-router-dom";
import WelcomeBanner from "../components/Home/WelcomeBanner";
import FeatureCard from "../components/Home/FeatureCard";

const HomePage = () => {
  const features = [
    {
      title: "تشخیص هوشمند کود",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/1.png",
    },
    {
      title: "تشخیص هوشمند گیاه",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/2.png",
    },
    {
      title: "تشخیص هوشمند آب و دما",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/3.png",
    },
    {
      title: "تشخیص هوشمند آفات",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/4.png",
    },
    {
      title: "پشتیبانی ۲۴ ساعته",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/5.png",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <WelcomeBanner />

      <div className="w-full max-w-md space-y-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            backgroundColor={index % 2 === 0 ? "bg-feature-1" : "bg-feature-2"}
            reverse={index % 2 !== 1}
            position={index % 2 !== 1 ? "-left-8" : "-right-8"}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
