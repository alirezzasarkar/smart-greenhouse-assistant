import React from "react";
import AnalysisHistoryCard from "./AnalysisHistoryCard";

const history = [
  {
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
    image: "/public/assets/images/plant-detection.png",
  },
  {
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
    image: "/public/assets/images/plant-detection.png",
  },
  {
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
    image: "/public/assets/images/plant-detection.png",
  },
  {
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
    image: "/public/assets/images/plant-detection.png",
  },
  {
    title: "تاریخچه تحلیل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
    date: "۱۴۰۴/۰۲/۱۴",
    image: "/public/assets/images/plant-detection.png",
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
