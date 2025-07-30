import { useEffect, useState } from "react";
import AnalysisFilterTabs from "../components/common/AnalysisFilterTabs";
import AnalysisHistoryList from "../components/common/AnalysisHistoryList";
import Loading from "../components/common/PlantLoader";
import { getWaterlightHistory } from "../api/waterlightApi";
import { getPestHistory } from "../api/pestsApi";
import { getFertilizerHistory } from "../api/fertilizerApi";
import { getPlantHistory } from "../api/plantsApi";

const AnalysisHistory = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("water_and_temperature");
  const [history, setHistory] = useState([]);

  const tabs = [
    { label: "آب و دما", value: "water_and_temperature" },
    { label: "آفات", value: "pests" },
    { label: "کود", value: "fertilizer" },
    { label: "نوع گیاه", value: "kind" },
  ];

  const fetchMap = {
    water_and_temperature: getWaterlightHistory,
    pests: getPestHistory,
    fertilizer: getFertilizerHistory,
    kind: getPlantHistory,
  };

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const response = await fetchMap[activeTab]();
      console.log(response.data);
      setHistory(response.data); // فرض بر اینکه داده‌ها در response.data هستن
    } catch (err) {
      console.error("Error fetching history:", err);
      setHistory([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [activeTab]);

  return (
    <div className="p-4">
      <AnalysisFilterTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
      {loading ? <Loading /> : <AnalysisHistoryList history={history} />}
    </div>
  );
};

export default AnalysisHistory;
