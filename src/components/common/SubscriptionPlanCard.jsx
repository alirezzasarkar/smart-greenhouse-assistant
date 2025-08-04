import formatNumberWithCommas from "../../utils/formatNumberWithCommas";

const SubscriptionPlanCard = ({ plan }) => {
  const features = plan.description
    .split("\r\n")
    .map((item) => item.replace(/^✔/, "").trim());
  return (
    <div
      key={plan.name}
      className={`bg-white rounded-3xl p-5 bg-menu text-center ${
        plan.id === 2 ? "border-2 border-green-500" : ""
      }`}
    >
      <h2 className="text-color text-2xl font-bold mb-5">{plan.name}</h2>
      <div className="text-gray-800 text-2xl font-bold mb-5 ">
        {formatNumberWithCommas(plan.price.split(".")[0])} تومان
      </div>
      <button className="w-full bg-color text-white py-3 rounded-4xl mb-8 hover:bg-green-600 transition-colors">
        {/* {plan.button} */}
        خرید اشتراک
      </button>
      <ul className="text-right text-sm text-gray-700 space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionPlanCard;
