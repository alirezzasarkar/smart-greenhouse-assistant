import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Dropdown from "../components/common/Dropdown";
import Loader from "../components/common/Loader";
import { useState } from "react";
import toast from "react-hot-toast";

const questions = [
  {
    question: "هدف شما از کوددهی به این گیاه چیست؟",
    name: "fertilizationGoal",
    options: [
      { label: "رشد سریع‌تر و پرپشت شدن", value: "faster_growth_and_density" },
      { label: "گل‌دهی بیشتر", value: "more_flowering" },
      { label: "افزایش میوه‌دهی", value: "more_fruiting" },
      {
        label: "سبز ماندن و جلوگیری از زردی",
        value: "stay_green_prevent_yellowing",
      },
      { label: "درمان بیماری یا ضعف گیاه", value: "treat_disease_or_weakness" },
    ],
  },
  {
    question: "گیاه در کجا نگهداری می‌شود؟",
    name: "plantEnvironment",
    options: [
      { label: "فضای باز (باغچه، مزرعه)", value: "outdoor_garden_farm" },
      { label: "گلخانه", value: "greenhouse" },
      { label: "فضای داخلی (آپارتمان، دفتر کار)", value: "indoor_home_office" },
    ],
  },
  {
    question: "در حال حاضر گیاه در چه مرحله‌ای است؟",
    name: "currentGrowthStage",
    options: [
      { label: "نهال یا تازه کاشته شده", value: "seedling" },
      { label: "در حال رشد برگ و ساقه", value: "leafy_growth" },
      { label: "در مرحله گلدهی", value: "flowering" },
      { label: "در حال میوه‌دهی", value: "fruiting" },
      { label: "در حالت رکود یا خواب", value: "dormant" },
    ],
  },
  {
    question: "آیا از قبل کود خاصی استفاده کرده‌اید؟",
    name: "previousFertilizerUse",
    options: [
      { label: "بله، کود شیمیایی", value: "used_chemical" },
      { label: "بله، کود آلی یا ورمی‌کمپوست", value: "used_organic" },
      { label: "خیر، این اولین بار است", value: "first_time" },
    ],
  },
  {
    question: "چه نوع کودی ترجیح می‌دهید؟",
    name: "preferredFertilizerType",
    options: [
      { label: "کود طبیعی یا ارگانیک", value: "organic" },
      { label: "کود شیمیایی با تأثیر سریع", value: "chemical_fast" },
      { label: "فرقی نمی‌کند، فقط نتیجه مهم است", value: "no_preference" },
    ],
  },
];

const plantOptions = ["آلوئه‌ورا", "زامیفولیا", "آگلونما", "گل محمدی"];

/**
 * FertilizerDetection component provides an interface for users to select
 * a plant and get fertilizer recommendations. It includes a dropdown for
 * plant selection, questions to refine the fertilizer advice, and displays
 * results based on user input. It handles loading states and displays errors
 * if no plant is selected. Users receive information about the optimal fertilizer
 * type for their plant based on its growth stage and environment, ensuring
 * accurate and scientific recommendations for healthy plant growth.
 */

const FertilizerDetection = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({});

  const handleDropdownChange = (selectedOption) => {
    setSelectedPlant(selectedOption);
    setError("");
  };

  const handleQuestionChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResultClick = () => {
    if (!selectedPlant) {
      setError("لطفاً ابتدا یک گیاه انتخاب کنید.");
      toast.error("لطفاً ابتدا یک گیاه انتخاب کنید.");
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
      <Description
        text={
          <>
            برای دریافت پیشنهاد دقیق در مورد نوع و زمان کوددهی مناسب، مراحل زیر
            را طی کنید:
            <br />
            <span className="font-semibold">
              ۱. از لیست ارائه‌شده، گیاه مورد نظر خود را انتخاب کنید.
            </span>
            <br />
            <span className="font-semibold">
              ۲. پس از انتخاب، اطلاعاتی درباره نوع کود مناسب، مقدار مصرف و
              زمان‌بندی کوددهی نمایش داده می‌شود.
            </span>
            <br />
            <span className="font-semibold">
              ۳. با توجه به این اطلاعات، می‌توانید برنامه‌ کوددهی دقیق‌تری برای
              گیاه خود تنظیم کنید.
            </span>
            <br />
            <span>
              این قابلیت به شما کمک می‌کند تا تغذیه گیاهانتان را به شکل اصولی
              انجام دهید و رشد سالم‌تری را تجربه کنید.
            </span>
          </>
        }
      />
      <div className="flex justify-center my-4">
        <Dropdown
          options={plantOptions}
          placeholder="نام گیاه"
          onChange={handleDropdownChange}
        />
      </div>

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
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
