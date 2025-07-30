import { useLocation } from "react-router-dom";
import Loading from "../components/common/PlantLoader";
import { useState } from "react";

// تبدیل تاریخ ISO به تاریخ شمسی
const formatDate = (isoDateStr) => {
  if (!isoDateStr) return "نامشخص";
  const date = new Date(isoDateStr);
  return date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const AnalysisDetail = () => {
  const location = useLocation();
  const { plant_name, created_at, result, answers } = location.state || {};

  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  const labelMap = {
    goal: "هدف",
    preferred_type: "نوع کود ترجیحی",
    prior_fertilizer: "استفاده قبلی از کود",
    growth_stage: "مرحله رشد",
    location: "محل نگهداری",
    irrigation: "روش آبیاری",
    symptoms: "علائم ظاهری",
    weather: "وضعیت آب و هوا",
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4 text-right text-green-700">
        جزئیات تحلیل
      </h2>

      <p className="text-sm text-gray-500 mb-2">
        تاریخ: {formatDate(created_at)}
      </p>

      {plant_name && (
        <p className="text-sm text-gray-600 mb-4">
          <strong>نام گیاه:</strong> {plant_name}
        </p>
      )}

      {answers && (
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm mb-6 border">
          <h3 className="font-semibold text-gray-700 mb-3 text-sm">
            پاسخ‌های وارد شده:
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {Object.entries(answers).map(([key, value]) => (
              <li key={key}>
                <strong>{labelMap[key] || key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        {result && (
          <div className="mt-20 text-right space-y-4 max-w-2xl mx-auto">
            <h3 className="mb-5 text-lg font-bold text-green-700">
              نتیجه تحلیل:
            </h3>

            {result.split("\n\n").map((section, index) => {
              const [title, ...rest] = section.split(":");
              const content = rest.join(":").trim(); // در صورتی که مقدار هم ":" داشته باشه
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
                >
                  <strong className="text-green-800">{title.trim()}:</strong>
                  <p className="text-gray-700 mt-2 leading-relaxed whitespace-pre-line">
                    {content}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisDetail;
