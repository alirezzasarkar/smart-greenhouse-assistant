import React from "react";
import AnalysisFilterTabs from "../components/common/AnalysisFilterTabs";
import AnalysisHistoryList from "../components/common/AnalysisHistoryList";

const AnalysisHistory = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold text-center mb-10">تاریخچه تحلیل ها</h1>
      <AnalysisFilterTabs />
      <AnalysisHistoryList />
    </div>
  );
};

export default AnalysisHistory;
