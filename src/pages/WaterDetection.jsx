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

const WaterDetection = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-5 text-center">
        تشخیص آب و دمای مناسب گیاه
      </h1>
      <Description text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت" />
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
      <ResultButton />
    </div>
  );
};

export default WaterDetection;
