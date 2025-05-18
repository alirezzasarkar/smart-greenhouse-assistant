import { useLocation } from "react-router-dom";
import Loading from "../components/common/PlantLoader";
import { useState } from "react";

const AnalysisDetail = () => {
  const location = useLocation();
  const { title, date, desc } = location.state || {};
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="p-4">
      <div className="mt-4">
        <p className="text-sm text-gray-500 mb-6">تاریخ: {date || "نامشخص"}</p>
        <p className="text-base text-gray-700 leading-relaxed text-justify">
          {desc || "متن تحلیل در دسترس نیست."}
        </p>
      </div>
    </div>
  );
};

export default AnalysisDetail;
