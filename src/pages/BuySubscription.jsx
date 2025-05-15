import React from "react";

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
      <h1 className="text-lg font-bold text-center mb-10">اشتراک ها</h1>
      <p className="text-right text-gray-900 font-bold text-sm my-4">
        اشتراک خود را انتخاب کنید
      </p>
      <p className="text-justify text-gray-500 text-xs mb-6 leading-relaxed">
        با انتخاب یکی از پلن‌های اشتراک، به تمامی بخش‌های فعال به راحتی دسترسی
        خواهید داشت و امکانات سریع گزارش و تحلیل دقیق سلامت و وضعیت گیاهان برای
        تشخیص بهتر و هوشمند شما فعال است.
      </p>
      <div className="flex flex-col gap-6">
        {plans.map((plan, idx) => (
          <div
            key={plan.title}
            className={`bg-white rounded-3xl p-5 bg-menu text-center ${
              plan.highlight ? "border-2 border-green-500" : ""
            }`}
          >
            <h2 className="text-color text-2xl font-bold mb-5">{plan.title}</h2>
            <div className="text-gray-800 text-2xl font-bold mb-5 ">
              {plan.price}
            </div>
            <button className="w-full bg-color text-white py-3 rounded-4xl mb-8 hover:bg-green-600 transition-colors">
              {plan.button}
            </button>
            <ul className="text-right text-sm text-gray-700 space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySubscription;
