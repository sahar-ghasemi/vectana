"use client";
const plans = [
  {
    name: "Basic",
    price: 9.99,
    discountPrice: 4.99,
    features: ["10 Downloads", "Standard Support", "No Custom Requests"],
  },
  {
    name: "Pro",
    price: 19.99,
    discountPrice: 9.99,
    features: ["50 Downloads", "Priority Support", "Custom Requests"],
    highlight: true, // پلن پیشنهادی
  },
  {
    name: "Premium",
    price: 39.99,
    discountPrice: 19.99,
    features: ["Unlimited Downloads", "24/7 Support", "Custom Requests"],
  },
];

export default function SubscriptionPlans() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-8 min-h-screen">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative bg-white shadow-xl rounded-2xl p-6 w-72 text-center border transition-all duration-300
          ${
            plan.highlight
              ? "scale-105 border-purple-300 border-2 shadow-2xl"
              : "border-gray-200"
          }
          hover:scale-110 hover:shadow-2xl`}
        >
          {plan.highlight && (
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-theme-purple-default text-white text-xs font-bold px-3 py-1 rounded-full">
              پیشنهادی
            </span>
          )}
          <h2 className="text-2xl font-bold text-gray-800">{plan.name}</h2>
          <p className="text-gray-500 line-through text-lg">${plan.price}</p>
          <p className="text-theme-purple-default text-3xl font-bold">
            ${plan.discountPrice}
          </p>
          <ul className="flex flex-col mt-4 space-y-2 text-center">
            {plan.features.map((feature, i) => (
              <li key={i} className=" items-center gap-2 text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 mt-6 
                    rounded-lg hover:cursor-pointer   hover:bg-gradient-to-l"
          >
            خرید
          </button>
        </div>
      ))}
    </div>
  );
}
