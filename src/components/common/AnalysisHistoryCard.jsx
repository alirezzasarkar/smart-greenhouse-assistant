// import React from "react";
// import { Link } from "react-router-dom";

// const AnalysisHistoryCard = ({ id, title, desc, date, image }) => {
//   return (
//     <div className="flex bg-white rounded-2xl shadow-gray-100 shadow-md p-3 py-5 gap-3">
//       <img
//         src="/public/assets/icons/plant.svg"
//         alt={title}
//         className="w-6 h-6 object-cover"
//       />
//       <div className="flex-1 text-right">
//         <h3 className="font-bold text-base mb-1">{title}</h3>
//         <p className="text-xs text-gray-500 mb-2 line-clamp-2">{desc}</p>
//         <div className="flex items-center justify-between gap-2 text-xs text-gray-400 mb-2">
//           <span>{date}</span>
//           <Link
//             to={`/profile/analysis-history/analysis-detail/${id}`}
//             state={{ title, desc, date }}
//           >
//             <button className="cursor-pointer mt-2 px-4 py-1 bg-green-100 text-green-700 rounded-xl text-xs hover:bg-green-200 transition-colors">
//               مشاهده جزئیات
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalysisHistoryCard;

import React from "react";
import { Link } from "react-router-dom";

const formatDate = (isoDateStr) => {
  if (!isoDateStr) return "نامشخص";
  const date = new Date(isoDateStr);
  return date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const AnalysisHistoryCard = ({
  id,
  title,
  desc,
  created_at,
  image,
  plant_name,
  answers,
  result,
}) => {
  const hasAnswers = !!answers && !!result;

  // اطلاعات خلاصه شده برای آب و دما یا تحلیل‌های مشابه
  const renderSummary = () => {
    const summaryItems = [];

    // نمایش نام گیاه (از خارج answers)
    if (plant_name) {
      summaryItems.push({ label: "نام گیاه", value: plant_name });
    }

    // اگر answers وجود داشت، موارد خاص هر تب رو نمایش بده
    if (answers) {
      const keysToShow = [
        "goal",
        "preferred_type",
        "growth_stage",
        "location",
        "weather",
        "symptoms",
      ];
      const labels = {
        goal: "هدف",
        preferred_type: "نوع کود ترجیحی",
        growth_stage: "مرحله رشد",
        location: "محل نگهداری",
        weather: "وضعیت آب و هوا",
        symptoms: "علائم ظاهری",
      };

      keysToShow.forEach((key) => {
        if (answers[key]) {
          summaryItems.push({ label: labels[key], value: answers[key] });
        }
      });
    }

    return (
      <div className="text-xs text-gray-500 mb-2 space-y-1">
        {summaryItems.slice(0, 3).map((item, idx) => (
          <div key={idx}>
            <strong className="text-gray-600">{item.label}:</strong>{" "}
            {item.value}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex bg-white rounded-2xl shadow-gray-100 shadow-md p-3 py-5 gap-3">
      <img
        src="/public/assets/icons/plant.svg"
        alt={plant_name}
        className="w-6 h-6 object-cover"
      />
      <div className="flex-1 text-right">
        <h3 className="font-bold text-base mb-1">
          {plant_name || "بدون عنوان"}
        </h3>

        {hasAnswers ? (
          <div className="grid text-xs text-gray-600 gap-1 mb-2">
            {/* {summaryFields.map((field, idx) => (
              <div key={idx}>
                <strong>{field.label}:</strong> {field.value}
              </div>
            ))} */}
            <p className="text-xs text-gray-500 mb-2 line-clamp-2">
              {renderSummary()}
            </p>
          </div>
        ) : (
          <p className="text-xs text-gray-500 mb-2 line-clamp-2">
            {desc || "توضیحی وارد نشده است."}
          </p>
        )}

        <div className="flex items-center justify-between gap-2 text-xs text-gray-400 mt-2">
          <span>{formatDate(created_at)}</span>
          <Link
            to={`/profile/analysis-history/analysis-detail/${id}`}
            state={{ title, desc, created_at, answers, result }}
          >
            <button className="cursor-pointer px-4 py-1 bg-green-100 text-green-700 rounded-xl text-xs hover:bg-green-200 transition-colors">
              مشاهده جزئیات
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalysisHistoryCard;
