import React from "react";
import AnalysisHistoryCard from "./AnalysisHistoryCard";

const history = [
  {
    id: 1,
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
  },
  {
    id: 2,
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
  },
  {
    id: 3,
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
  },
  {
    id: 4,
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
  },
  {
    id: 5,
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
  },
];

const AnalysisHistoryList = () => {
  return (
    <div className="flex flex-col gap-4">
      {history.map((item, idx) => (
        <AnalysisHistoryCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default AnalysisHistoryList;
