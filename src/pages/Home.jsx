import WelcomeBanner from "../components/Home/WelcomeBanner";
import FeatureCard from "../components/Home/FeatureCard";
import { Link } from "react-router-dom";

/**
 * HomePage component renders the main page of the Smart Farm app.
 * It displays a banner with a welcome message and a list of feature cards.
 * Each feature card contains a title, description, icon, and a link to the
 * corresponding page, such as the fertilizer detection page or the pest
 * detection page.
 */
const HomePage = () => {
  const features = [
    {
      title: "تشخیص هوشمند کود",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/1.png",
      linkTo: "/fertilizer-detection",
    },
    {
      title: "تشخیص هوشمند گیاه",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/2.png",
      linkTo: "/plant-detection",
    },
    {
      title: "تشخیص هوشمند آب و دما",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/3.png",
      linkTo: "/water-detection",
    },
    {
      title: "تشخیص هوشمند آفات",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/4.png",
      linkTo: "/pest-detection",
    },
    {
      title: "پشتیبانی ۲۴ ساعته",
      description: "پاسخ سوالات خود را از ربات دریافت کنید",
      icon: "/public/assets/images/5.png",
      linkTo: "/support",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen text-gray-800 p-4">
      <Link to="/buy-subscription">
        <WelcomeBanner />
      </Link>

      <div className="w-full max-w-md space-y-5">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            backgroundColor={index % 2 === 0 ? "bg-feature-1" : "bg-feature-2"}
            reverse={index % 2 !== 1}
            position={index % 2 !== 1 ? "-left-14" : "-right-14"}
            linkTo={feature.linkTo}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
