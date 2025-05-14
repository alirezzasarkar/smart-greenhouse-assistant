import React from "react";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Dropdown from "../components/common/Dropdown";

const questions = [
  {
    question: "محیط نگهداری شما چیست؟",
    name: "environment",
    options: [
      { label: "فضای باز", value: "outdoor" },
      { label: "گلخانه", value: "greenhouse" },
      { label: "خانه", value: "home" },
      { label: "لابراتوار", value: "lab" },
    ],
  },
  {
    question: "رشد گیاه شما در چه مرحله ای است؟",
    name: "growthStage",
    options: [
      { label: "گل دهی", value: "flowering" },
      { label: "میوه دهی", value: "fruiting" },
      { label: "رشد فعال", value: "active" },
      { label: "باغ", value: "garden" },
    ],
  },
];

const plantOptions = ["آلوئه‌ورا", "زامیفولیا", "آگلونما", "گل محمدی"];

const handleQuestionChange = (e) => {
  console.log(e.target.name, e.target.value);
};

const FertilizerDetection = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-5 text-center">تشخیص کود</h1>
      <Description text="استفاده‌ی نادرست از کود می‌تواند به گیاه آسیب بزند. با انتخاب صحیح مرحله رشد گیاه و محیط نگهداری، از توصیه‌های دقیق و علمی بهره‌مند شوید." />
      <div className="flex justify-center my-4">
        <Dropdown
          options={plantOptions}
          placeholder="نام گیاه"
          onChange={(selectedOption) =>
            console.log("Selected plant:", selectedOption)
          }
        />
      </div>
      <div className="mt-6">
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
      <Description text="با توجه به مرحله رشد گیاه و محیط نگهداری انتخاب‌شده، سیستم هوش مصنوعی ما با بررسی ویژگی‌های تغذیه‌ای این گیاه، بهترین نوع کود را برای رشد سالم و بهینه پیشنهاد می‌دهد. این توصیه بر اساس منابع علمی، تجربیات کشاورزی و تحلیل دقیق داده‌های گیاهی طراحی شده است. به نتیجه اعتماد کنید گیاه شما در مسیر رشد بهتر قرار دارد." />
      <ResultButton />
    </div>
  );
};

export default FertilizerDetection;
