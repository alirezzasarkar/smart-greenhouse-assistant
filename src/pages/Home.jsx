import WelcomeBanner from "../components/Home/WelcomeBanner";
import FeatureCard from "../components/Home/FeatureCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Loading from "../components/common/PlantLoader";

/**
 * HomePage component renders the main page of the Smart Farm app.
 * It displays a banner with a welcome message and a list of feature cards.
 * Each feature card contains a title, description, icon, and a link to the
 * corresponding page, such as the fertilizer detection page or the pest
 * detection page.
 */
const HomePage = () => {
  const [loading, setLoading] = useState(false);

  const features = [
    {
      title: "تشخیص هوشمند کود",
      description: "کود مناسب برای رشد بهتر گیاهتان را به‌سرعت شناسایی کنید.",
      icon: "/assets/images/1.png",
      linkTo: "/fertilizer-detection",
    },
    {
      title: "تشخیص هوشمند گیاه",
      description: "با گرفتن یک عکس، نام و مشخصات دقیق گیاه خود را ببینید.",
      icon: "/assets/images/2.png",
      linkTo: "/plant-detection",
    },
    {
      title: "تشخیص هوشمند آب و دما",
      description:
        "میزان آبیاری و دمای مناسب گیاه را دقیق و هوشمندانه دریافت کنید.",
      icon: "/assets/images/3.png",
      linkTo: "/water-detection",
    },
    {
      title: "تشخیص هوشمند آفات",
      description:
        "علائم بیماری یا آفت را بررسی و راه‌حل مناسب را دریافت کنید.",
      icon: "/assets/images/4.png",
      linkTo: "/pest-detection",
    },
    {
      title: "پشتیبانی ۲۴ ساعته",
      description:
        "در هر زمان، پاسخگوی سوالات و دغدغه‌های شما درباره گیاهانتان هستیم.",
      icon: "/assets/images/5.png",
      linkTo: "/support",
    },
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <motion.div
      className="flex flex-col items-center min-h-screen text-gray-800 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/buy-subscription">
          <WelcomeBanner />
        </Link>
      </motion.div>

      <motion.div
        className="w-full max-w-md space-y-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              backgroundColor={
                index % 2 === 0 ? "bg-feature-1" : "bg-feature-2"
              }
              reverse={index % 2 !== 1}
              position={index % 2 !== 1 ? "-left-14" : "-right-14"}
              linkTo={feature.linkTo}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
