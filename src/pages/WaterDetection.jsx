import { useState } from "react";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Dropdown from "../components/common/Dropdown";
import Loader from "../components/common/Loader";
import toast from "react-hot-toast";

const questions = [
  {
    question: "گیاه در حال حاضر کجا نگهداری می‌شود؟",
    name: "currentLocation",
    options: [
      { label: "داخل خانه", value: "indoor" },
      { label: "فضای باز", value: "outdoor" },
      { label: "گلخانه", value: "greenhouse" },
    ],
  },
  {
    question: "چه نوع آب و هوایی در محل نگهداری غالب است؟",
    name: "dominantClimate",
    options: [
      { label: "گرم و خشک", value: "hot_dry" },
      { label: "گرم و مرطوب", value: "hot_humid" },
      { label: "سرد و خشک", value: "cold_dry" },
      { label: "معتدل", value: "mild" },
    ],
  },
  {
    question: "مرحله فعلی رشد گیاه چیست؟",
    name: "currentStage",
    options: [
      { label: "نهال یا تازه کاشته شده", value: "seedling" },
      { label: "در حال رشد", value: "growing" },
      { label: "بالغ و ثابت", value: "mature" },
      { label: "گلدهی یا میوه‌دهی", value: "flowering_or_fruiting" },
    ],
  },
  {
    question: "چند وقت یک‌بار معمولاً آبیاری انجام می‌دهید؟",
    name: "wateringFrequency",
    options: [
      { label: "هر روز", value: "daily" },
      { label: "هر ۲-۳ روز", value: "every_2_3_days" },
      { label: "هفته‌ای یک‌بار یا کمتر", value: "weekly_or_less" },
      { label: "هنوز نمی‌دانم", value: "not_sure" },
    ],
  },
  {
    question: "آیا علائمی مثل زرد شدن برگ، پژمردگی یا پوسیدگی دیده‌اید؟",
    name: "symptoms",
    options: [
      { label: "بله", value: "yes" },
      { label: "خیر", value: "no" },
    ],
  },
];

const plantOptions = ["آلوئه‌ورا", "زامیفولیا", "آگلونما", "گل محمدی"];

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
  const [formData, setFormData] = useState({});

  const handleQuestionChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResultClick = () => {
    if (!selectedPlant) {
      setError("لطفاً یک گیاه انتخاب کنید.");
      toast.error("لطفاً یک گیاه انتخاب کنید.");
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
      <Description
        text={
          <>
            برای دریافت اطلاعات مربوط به نیاز آبی و دمایی گیاه خود، مراحل زیر را
            طی کنید:
            <br />
            <span className="font-semibold">
              ۱. از لیست ارائه‌شده، گیاه مورد نظر خود را انتخاب کنید.
            </span>
            <br />
            <span className="font-semibold">
              ۲. پس از انتخاب، اطلاعات دقیق مربوط به میزان آبیاری، دفعات لازم و
              محدوده دمایی مناسب نمایش داده خواهد شد.
            </span>
            <br />
            <span className="font-semibold">
              ۳. می‌توانید این اطلاعات را برای برنامه‌ریزی بهتر نگهداری از
              گیاهان خود استفاده کنید.
            </span>
            <br />
            <span>
              این قابلیت به شما کمک می‌کند تا با آگاهی بیشتر، شرایط محیطی
              بهینه‌ای برای رشد و سلامت گیاه خود فراهم کنید.
            </span>
          </>
        }
      />
      <div className="flex justify-center my-4">
        <Dropdown
          options={plantOptions}
          placeholder="نام گیاه"
          onChange={(selectedOption) => setSelectedPlant(selectedOption)}
        />
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <Description text="برای دقت بیشتر در پاسخ دریافتی، لطفاً به سوالات زیر پاسخ دهید. (پاسخ‌گویی اختیاری است)" />

      <div className="mt-6">
        {questions.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            options={q.options}
            name={q.name}
            value={formData[q.name]}
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
