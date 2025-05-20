import React, { useState } from "react";

const tabs = [
  { label: "آب و دما" },
  { label: "آفات" },
  { label: "کود" },
  { label: "نوع گیاه" },
];

const AnalysisFilterTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex gap-2 mb-6 flex-wrap justify-center">
      {tabs.map((tab, idx) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(idx)}
          className={`px-2 py-2 rounded-4xl text-sm cursor-pointer font-medium border transition-colors duration-200 ${
            activeTab === idx
              ? "bg-green-100 text-green-700 border-green-500"
              : "bg-menu text-gray-600 border-transparent"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default AnalysisFilterTabs;
