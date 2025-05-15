import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Dropdown from "../components/common/Dropdown";
import Loader from "../components/common/Loader";
import { useState } from "react";

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
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [error, setError] = useState("");

  const handleDropdownChange = (selectedOption) => {
    setSelectedPlant(selectedOption);
    setError("");
  };

  const handleResultClick = () => {
    if (!selectedPlant) {
      setError("لطفاً ابتدا یک گیاه انتخاب کنید.");
      return;
    }
    setLoading(true);
    setResult("");
    setTimeout(() => {
      setLoading(false);
      setResult(
        "شناسایی گیاه با موفقیت انجام شد. گیاه شما از خانواده گیاهان آپارتمانی است و نیاز به نور متوسط و آبیاری منظم دارد. این گیاه در شرایط دمایی بین ۱۸ تا ۲۵ درجه سانتی‌گراد بهترین رشد را دارد. همچنین، توصیه می‌شود هر دو هفته یک‌بار از کود مخصوص گیاهان آپارتمانی استفاده کنید. در صورت مشاهده زردی برگ‌ها، ممکن است گیاه شما دچار کمبود مواد مغذی باشد. لطفاً تصویر گیاه خود را بررسی کنید و در صورت نیاز به اطلاعات بیشتر، با کارشناسان ما تماس بگیرید."
      );
    }, 5000);
  };

  return (
    <div className="p-4">
      <Description text="استفاده‌ی نادرست از کود می‌تواند به گیاه آسیب بزند. با انتخاب صحیح مرحله رشد گیاه و محیط نگهداری، از توصیه‌های دقیق و علمی بهره‌مند شوید." />
      <div className="flex justify-center my-4">
        <Dropdown
          options={plantOptions}
          placeholder="نام گیاه"
          onChange={handleDropdownChange}
        />
      </div>

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

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
      {loading ? <Loader /> : <ResultButton onClick={handleResultClick} />}
      {result && (
        <div className="mt-20 text-center">
          <h3 className="mb-5 text-color">نتایج تشخیص کود مناسب گیاه شما</h3>

          <p className="text-gray-700 mt-10 text-justify">{result}</p>
        </div>
      )}
    </div>
  );
};

export default FertilizerDetection;
