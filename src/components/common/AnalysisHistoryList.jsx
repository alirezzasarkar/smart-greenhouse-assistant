import React from "react";
import AnalysisHistoryCard from "./AnalysisHistoryCard";

const AnalysisHistoryList = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500 text-sm">
        هیچ موردی برای نمایش وجود ندارد.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {history.map((item, idx) => (
        <AnalysisHistoryCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default AnalysisHistoryList;
