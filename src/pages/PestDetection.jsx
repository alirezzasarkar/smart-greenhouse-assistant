import React from "react";
import UploadButton from "../components/common/UploadButton";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";

const questions = [
  {
    question: "بیماری چند روز پیش ایجاد شده؟",
    name: "diseaseDuration",
    options: [
      { label: "سه روز", value: "3days" },
      { label: "یک ماه", value: "1month" },
      { label: "دو هفته", value: "2weeks" },
      { label: "امروز", value: "today" },
    ],
  },
  {
    question: "آخرین باری که گیاهتو آبیاری کردی کی بود؟",
    name: "lastWatering",
    options: [
      { label: "سه روز", value: "3days" },
      { label: "یک ماه", value: "1month" },
      { label: "دو هفته", value: "2weeks" },
      { label: "امروز", value: "today" },
    ],
  },
  {
    question: "نور محیط گیاهت به چه صورت بود؟",
    name: "lightCondition",
    options: [
      { label: "کم", value: "low" },
      { label: "متوسط", value: "medium" },
      { label: "زیاد", value: "high" },
    ],
  },
];

const handleQuestionChange = (e) => {
  console.log(e.target.name, e.target.value);
};

const PestDetection = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">تشخیص انواع آفات</h1>
      <Description text="تصویر خود را واضح و با کیفیت مناسب مانند تصویر زیر ارسال کنید" />
      <div className="flex justify-center my-4">
        <img
          src="/public/assets/images/pest-detection.png"
          alt="نمونه تصویر آفات"
          className="rounded-lg shadow-md"
        />
      </div>
      <UploadButton />
      <Description
        text="پس از بارگذاری تصویر موردنظر، لطفاً سوالات زیر را پاسخ دهید. در صورت واضح و باکیفیت بودن عکس، سامانه قادر خواهد بود نوع آفت را با دقت بیشتری شناسایی کند. 
        تصویر باید با فرمت JPG یا PNG باشد
        حداکثر حجم فایل: ۱۰ مگابایت
        عکس باید واضح و شامل برگ یا گل گیاه باشد"
      />
      <div className="mt-10">
        {questions.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            options={q.options}
            name={q.name}
            onChange={handleQuestionChange}
          />
        ))}
      </div>
      <ResultButton />
    </div>
  );
};

export default PestDetection;
