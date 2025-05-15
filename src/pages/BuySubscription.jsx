import SubscriptionPlanCard from "../components/common/SubscriptionPlanCard";

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
];

const BuySubscription = () => {
  return (
    <div className="p-4">
      <p className="text-justify text-gray-500 text-sm mb-6 leading-relaxed">
        با انتخاب یکی از پلن‌های اشتراک، به تمامی بخش‌های فعال به راحتی دسترسی
        خواهید داشت و امکانات سریع گزارش و تحلیل دقیق سلامت و وضعیت گیاهان برای
        تشخیص بهتر و هوشمند شما فعال است.
      </p>
      <div className="flex flex-col gap-6">
        {plans.map((plan) => (
          <SubscriptionPlanCard key={plan.title} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default BuySubscription;
