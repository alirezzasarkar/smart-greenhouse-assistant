import React from "react";
import { Link } from "react-router-dom";

const AnalysisHistoryCard = ({ title, desc, date, image }) => {
  return (
    <div className="flex bg-white rounded-2xl shadow-gray-100 shadow-md p-3 py-5 items-center gap-3">
      <img
        src={image}
        alt={title}
        className="w-22 h-22 object-cover rounded-xl"
      />
      <div className="flex-1 text-right">
        <h3 className="font-bold text-base mb-1">{title}</h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">{desc}</p>
        <div className="flex items-center justify-between gap-2 text-xs text-gray-400 mb-2">
          <span>{date}</span>
          <Link to="/analysis-detail">
            <button className="mt-2  px-4 py-1 bg-green-100 text-green-700 rounded-xl text-xs hover:bg-green-200 transition-colors">
              مشاهده جزئیات
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalysisHistoryCard;
