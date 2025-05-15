import AnalysisFilterTabs from "../components/common/AnalysisFilterTabs";
import AnalysisHistoryList from "../components/common/AnalysisHistoryList";

const AnalysisHistory = () => {
  return (
    <div className="p-4">
      <AnalysisFilterTabs />
      <AnalysisHistoryList />
    </div>
  );
};

export default AnalysisHistory;
