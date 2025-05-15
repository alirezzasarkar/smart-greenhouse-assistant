import React from "react";
import AnalysisFilterTabs from "../components/common/AnalysisFilterTabs";
import AnalysisHistoryList from "../components/common/AnalysisHistoryList";
import PageTitle from "../components/common/PageTitle";

const AnalysisHistory = () => {
  return (
    <div className="p-4">
      <AnalysisFilterTabs />
      <AnalysisHistoryList />
    </div>
  );
};

export default AnalysisHistory;
