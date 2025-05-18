import { useState } from "react";
import SubscriptionPlanCard from "../components/common/SubscriptionPlanCard";
import Loading from "../components/common/PlantLoader";

const plans = [
  {
    title: "یک ماهه",
    price: "۵۰۰۰۰ تومان",
    features: [
      "ارزیابی تخصصی و گزارش گیری اسمارت فارم",
      "پشتیبانی ۲۴ ساعته",
      "دسترسی به تحلیل‌های پایه",
      "پیشنهادات هوشمند برای گیاهان",
      "دریافت اعلان‌های مهم",
    ],
    button: "خرید اشتراک",
  },
  {
    title: "سه ماهه",
    price: "۱۲۰۰۰۰ تومان",
    features: [
      "ارزیابی تخصصی و گزارش گیری اسمارت فارم",
      "پشتیبانی ۲۴ ساعته",
      "دسترسی به تحلیل‌های پیشرفته",
      "پیشنهادات هوشمند برای گیاهان",
      "دریافت اعلان‌های مهم",
    ],
    button: "خرید اشتراک",
    highlight: true,
  },
  {
    title: "شش ماهه",
    price: "۱۲۰۰۰۰ تومان",
    features: [
      "ارزیابی تخصصی و گزارش گیری اسمارت فارم",
      "پشتیبانی ۲۴ ساعته",
      "دسترسی به تحلیل‌های پیشرفته",
      "پیشنهادات هوشمند برای گیاهان",
      "دریافت اعلان‌های مهم",
    ],
    button: "خرید اشتراک",
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
        مدت زمان اشتراک شما رو به پایان است! با تمدید اشتراک خود، دسترسی به
        تمامی امکانات هوشمند، مشاوره‌های تخصصی و پیشنهادات پیشرفته برای گیاهان
        را حفظ کنید. از نگهداری تا رشد سالم‌تر گیاهانتان لذت ببرید.
      </p>
      <div className="mb-6">
        <p className="text-sm text-gray-700 mb-5">
          نوع پلن فعلی: <span className="block mt-2 font-bold">پایه</span>
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
