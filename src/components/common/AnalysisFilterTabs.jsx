import React from "react";

const AnalysisFilterTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex gap-2 mb-6 flex-wrap justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`px-2 py-2 rounded-4xl text-sm cursor-pointer font-medium border transition-colors duration-200 ${
            activeTab === tab.value
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
