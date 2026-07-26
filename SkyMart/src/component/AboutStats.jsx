import React from "react";

const stats = [
  { label: "Products", value: "10,000+" },
  { label: "Customers", value: "5,000+" },
  { label: "Orders Delivered", value: "20,000+" },
  { label: "Categories", value: "50+" },
];

const AboutStats = () => {
  return (
     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "20K+", label: "Products", icon: "📦" },
          { value: "50K+", label: "Happy Customers", icon: "👥" },
          { value: "4.9", label: "Avg. Rating", icon: "⭐" },
          { value: "99%", label: "On-time Delivery", icon: "🚚" },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-2xl p-6 text-center hover:border-lime-400 transition"
          >
            <div className="text-lime-400 text-xl mb-2">{item.icon}</div>
            <h2 className="text-2xl font-semibold">{item.value}</h2>
            <p className="text-gray-400 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
  );
};

export default AboutStats;