import { useState } from "react";
import SubscriptionPlanCard from "../components/common/SubscriptionPlanCard";
import Loading from "../components/common/PlantLoader";

const plans = [
  {
    title: "اشتراک یک‌ماهه",
    price: "۵۰٬۰۰۰ تومان",
    features: [
      "شناسایی نوع و خانواده گیاه",
      "شناسایی آفات گیاه و روش‌های درمان",
      "شناسایی کود مناسب و زمان کوددهی",
      "تعیین میزان آب و دمای مناسب گیاه",
      "پشتیبانی ۲۴ ساعته",
    ],
    button: "تمدید اشتراک",
  },
  {
    title: "اشتراک سه‌ماهه",
    price: "۱۲۰٬۰۰۰ تومان",
    features: [
      "شناسایی نوع و خانواده گیاه",
      "شناسایی آفات گیاه و روش‌های درمان",
      "شناسایی کود مناسب و زمان کوددهی",
      "تعیین میزان آب و دمای مناسب گیاه",
      "پشتیبانی ۲۴ ساعته",
    ],
    button: "تمدید اشتراک",
    highlight: true,
  },
  {
    title: "اشتراک شش‌ماهه",
    price: "۲۰۰٬۰۰۰ تومان",
    features: [
      "شناسایی نوع و خانواده گیاه",
      "شناسایی آفات گیاه و روش‌های درمان",
      "شناسایی کود مناسب و زمان کوددهی",
      "تعیین میزان آب و دمای مناسب گیاه",
      "پشتیبانی ۲۴ ساعته",
    ],
    button: "تمدید اشتراک",
  },
];

const SubscriptionRenewal = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState("تمام شد");
  const [remainingDays, setRemainingDays] = useState(0);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <p className="text-justify text-gray-500 text-sm mb-6 leading-relaxed">
        با تمدید اشتراک خود، همچنان به همه قابلیت‌های پیشرفته و مشاوره‌های تخصصی
        ما دسترسی خواهید داشت. این فرصت را از دست ندهید و به رشد سالم و شاداب
        گیاهانتان ادامه دهید.
      </p>

      <div className="mb-6">
        <p className="text-sm text-gray-700 mb-5">
          نوع پلن فعلی: <span className="block mt-2 font-bold">یک ماهه</span>
        </p>
        <p className="text-sm text-gray-700 mb-5">
          تاریخ شروع اشتراک:
          <span className="block mt-2 font-bold text-green-600">۱۴۰۴/۷/۱</span>
        </p>
        <p className="text-sm text-gray-700 mb-5">
          تاریخ پایان اشتراک:
          <span className="block mt-2 font-bold text-red-600">۱۴۰۴/۷/۱</span>
        </p>
        <p className="text-sm text-gray-700 mb-5">
          میزان باقی مانده از اشتراک:
          <span className="block mt-2 font-bold">{subscriptionStatus}</span>
        </p>
        <p className="mt-10 font-semibold text-gray-700">
          اشتراک خود را تمدید کنید:
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {plans.map((plan) => (
          <SubscriptionPlanCard key={plan.title} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionRenewal;
