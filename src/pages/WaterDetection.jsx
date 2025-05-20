import { useState } from "react";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Dropdown from "../components/common/Dropdown";
import Loader from "../components/common/Loader";

const questions = [
  {
    question: "گیاه در چه مرحله ای از رشد قرار دارد؟",
    name: "growthStage",
    options: [
      { label: "مرحله‌برداشت (رسیده)", value: "harvest" },
      { label: "در حال رشد (برگ‌دهی و ساقه)", value: "growing" },
      { label: "نهال ابتدایی (تازه کاشته‌شده)", value: "seedling" },
      { label: "قلمه‌زنی (تکثیر یافته)", value: "propagated" },
      { label: "اصلاً رشد نکرده (ایستا)", value: "no_growth" },
    ],
  },
  {
    question: "محیط نگهداری گیاه کجاست؟",
    name: "plantLocation",
    options: [
      { label: "آپارتمان", value: "apartment" },
      { label: "بالکن و تراس", value: "balcony_terrace" },
      { label: "باغ", value: "garden" },
      { label: "گلخانه", value: "greenhouse" },
    ],
  },
  {
    question: "وضعیت نور محیط نگهداری گل چگونه بود؟",
    name: "lightType",
    options: [
      { label: "نور مستقیم خورشید", value: "direct_sunlight" },
      { label: "نور مصنوعی", value: "artificial_light" },
      { label: "نور غیرمستقیم", value: "indirect_light" },
      { label: "کم نور یا بدون نور", value: "low_light" },
    ],
  },
  {
    question: "دمای محیطی که گیاه نگهداری می‌شود معمولاً چقدر است؟",
    name: "temperature",
    options: [
      { label: "زیر ۱۵ درجه", value: "below_15" },
      { label: "بین ۱۵ تا ۲۵ درجه", value: "15_to_25" },
      { label: "بالای ۲۵ درجه", value: "above_25" },
      { label: "متغیر بوده و مشخص نیست", value: "unknown" },
    ],
  },
  {
    question: "خاک گیاه شما چه ویژگی دارد؟",
    name: "soilType",
    options: [
      { label: "خاک شنی", value: "sandy" },
      { label: "خاک رسی", value: "clay" },
      { label: "خاک آهکی", value: "alkaline" },
      { label: "نمیدانم", value: "unknown" },
    ],
  },
  {
    question: "شرایط آب و هوایی محیط نگهداری گیاه چگونه است؟",
    name: "climate",
    options: [
      { label: "گرم و خشک", value: "hot_dry" },
      { label: "گرم و مرطوب", value: "hot_humid" },
      { label: "معتدل و مرطوب", value: "mild_humid" },
      { label: "سرد و خشک", value: "cold_dry" },
      { label: "سرد و مرطوب", value: "cold_humid" },
      { label: "معتدل و خشک", value: "mild_dry" },
    ],
  },
  {
    question: "آخرین بار چه زمانی به گیاه کود داده‌اید؟",
    name: "lastFertilization",
    options: [
      { label: "کمتر از ۱ ماه گذشته", value: "under_1_month" },
      { label: "بین ۱ تا ۳ ماه گذشته", value: "between_1_and_3_months" },
      { label: "بیشتر از ۳ ماه گذشته", value: "over_3_months" },
      { label: "تا حالا کود نداده‌ام", value: "never" },
    ],
  },
  {
    question: "آیا گیاه دچار آفت یا بیماری بوده است؟",
    name: "diseaseHistory",
    options: [
      { label: "بله، اخیراً مشاهده شده", value: "yes" },
      { label: "خیر، گیاه سالم است", value: "no" },
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
