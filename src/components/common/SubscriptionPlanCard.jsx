const SubscriptionPlanCard = ({ plan }) => {
  return (
    <div
      key={plan.title}
      className={`bg-white rounded-3xl p-5 bg-menu text-center ${
        plan.highlight ? "border-2 border-green-500" : ""
      }`}
    >
      <h2 className="text-color text-2xl font-bold mb-5">{plan.title}</h2>
      <div className="text-gray-800 text-2xl font-bold mb-5 ">{plan.price}</div>
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
  );
};

export default SubscriptionPlanCard;
