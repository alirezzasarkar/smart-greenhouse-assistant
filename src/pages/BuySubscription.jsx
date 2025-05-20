import SubscriptionPlanCard from "../components/common/SubscriptionPlanCard";

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
    button: "خرید اشتراک",
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
    button: "خرید اشتراک",
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
    button: "خرید اشتراک",
  },
];

/**
 * BuySubscription component renders a page for user to select a subscription plan.
 *
 * The page consists of a description and a list of plans with their features and prices.
 * A SubscriptionPlanCard component is used to render each plan.
 *
 * @returns {JSX.Element} The JSX element representing the BuySubscription component.
 */
const BuySubscription = () => {
  return (
    <div className="p-4">
      <p className="text-justify  text-gray-500 text-medium mb-10 leading-relaxed">
        با تهیه هر یک از پلن‌های اشتراک، به تمامی قابلیت‌های هوشمند اپلیکیشن
        بدون محدودیت دسترسی خواهید داشت. توجه داشته باشید که تفاوت پلن‌ها تنها
        در مدت‌زمان اعتبار آن‌هاست، و همه امکانات در هر پلن فعال هستند.
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
