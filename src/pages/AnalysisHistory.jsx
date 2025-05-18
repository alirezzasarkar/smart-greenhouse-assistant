import { useState } from "react";
import AnalysisFilterTabs from "../components/common/AnalysisFilterTabs";
import AnalysisHistoryList from "../components/common/AnalysisHistoryList";
import Loading from "../components/common/PlantLoader";

/**
 * AnalysisHistory component renders a page for user to view their analysis history.
 *
 * The page consists of two main components: AnalysisFilterTabs and AnalysisHistoryList.
 * AnalysisFilterTabs allows user to filter analysis based on different criteria.
 * AnalysisHistoryList renders a list of all analysis with their details.
 *
 * @returns {JSX.Element} The JSX element representing the AnalysisHistory component.
 */
const AnalysisHistory = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="p-4">
      <AnalysisFilterTabs />
      <AnalysisHistoryList />
    </div>
  );
};

export default AnalysisHistory;
