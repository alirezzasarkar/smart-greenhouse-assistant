import { useState } from "react";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Dropdown from "../components/common/Dropdown";
import Loader from "../components/common/Loader";

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

/**
 * WaterDetection component provides an interface for users to select a plant
 * and receive care instructions. The component includes a dropdown for plant
 * selection, questions to refine plant care recommendations, and displays
 * results based on user input. It handles loading states and displays errors
 * if no plant is selected. Once a plant is selected, users can obtain information
 * about optimal light, watering, and temperature conditions for the plant.
 */

const WaterDetection = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [error, setError] = useState("");

  const handleResultClick = () => {
    if (!selectedPlant) {
      setError("لطفاً یک گیاه انتخاب کنید.");
      return;
    }

    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult(
        "شناسایی گیاه با موفقیت انجام شد. گیاه شما از خانواده گیاهان آپارتمانی است و نیاز به نور متوسط و آبیاری منظم دارد. این گیاه در شرایط دمایی بین ۱۸ تا ۲۵ درجه سانتی‌گراد بهترین رشد را دارد. همچنین، توصیه می‌شود هر دو هفته یک‌بار از کود مخصوص گیاهان آپارتمانی استفاده کنید. در صورت مشاهده زردی برگ‌ها، ممکن است گیاه شما دچار کمبود مواد مغذی باشد. لطفاً تصویر گیاه خود را بررسی کنید و در صورت نیاز به اطلاعات بیشتر، با کارشناسان ما تماس بگیرید."
      );
    }, 5000);
  };

  return (
    <div className="p-4">
      <Description text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت" />
      <div className="flex justify-center my-4">
        <Dropdown
          options={plantOptions}
          placeholder="نام گیاه"
          onChange={(selectedOption) => setSelectedPlant(selectedOption)}
        />
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
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

      {loading ? <Loader /> : <ResultButton onClick={handleResultClick} />}
      {result && (
        <div className="mt-20 text-center">
          <h3 className="mb-5 text-color">
            نتایج تشخیص آب و دمای مناسب گیاه شما
          </h3>

          <p className="text-gray-700 mt-10 text-justify">{result}</p>
        </div>
      )}
    </div>
  );
};

export default WaterDetection;
