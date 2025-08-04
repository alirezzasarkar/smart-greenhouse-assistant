import { useState } from "react";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Dropdown from "../components/common/Dropdown";
import Loader from "../components/common/Loader";
import toast from "react-hot-toast";
import { createWaterlightDetection } from "../api/waterlightApi";

const questions = [
  {
    question: "گیاه در حال حاضر کجا نگهداری می‌شود؟",
    name: "location",
    options: [
      { label: "داخل خانه", value: "indoor" },
      { label: "فضای باز", value: "outdoor" },
      { label: "گلخانه", value: "greenhouse" },
    ],
  },
  {
    question: "چه نوع آب و هوایی در محل نگهداری غالب است؟",
    name: "weather",
    options: [
      { label: "گرم و خشک", value: "hot_dry" },
      { label: "گرم و مرطوب", value: "hot_humid" },
      { label: "سرد و خشک", value: "cold_dry" },
      { label: "معتدل", value: "mild" },
    ],
  },
  {
    question: "مرحله فعلی رشد گیاه چیست؟",
    name: "growth_stage",
    options: [
      { label: "نهال یا تازه کاشته شده", value: "seedling" },
      { label: "در حال رشد", value: "growing" },
      { label: "بالغ و ثابت", value: "mature" },
      { label: "گلدهی یا میوه‌دهی", value: "flowering_or_fruiting" },
    ],
  },
  {
    question: "چند وقت یک‌بار معمولاً آبیاری انجام می‌دهید؟",
    name: "irrigation",
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
  const [formData, setFormData] = useState({
    location: "",
    weather: "",
    growth_stage: "",
    irrigation: "",
    symptoms: "",
  });

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

    const emptyFields = Object.entries(formData).filter(
      ([key, value]) => !value || value.trim() === ""
    );

    if (emptyFields.length > 0) {
      toast.error(
        "لطفاً تمام گزینه‌ها را تکمیل کنید. پر کردن همه‌ی فیلدها الزامی است."
      );
      return;
    }

    setError("");
    setLoading(true);

    toast.promise(
      createWaterlightDetection({
        plant_name: selectedPlant,
        answers: formData,
      }),
      {
        loading: "درحال تحلیل اطلاعات . . .",
        success: (res) => {
          setResult(res.data.result);
          setLoading(false);
        },
        error: (err) => {
          console.log(err);
          setLoading(false);
          setError("خطایی در سرور پیش آمده");
          return "خطایی در سرور رخ داده";
        },
      }
    );
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
      <Description text="برای دقت بیشتر در پاسخ دریافتی، لطفاً به سوالات زیر پاسخ دهید." />

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
        <div className="mt-20 text-right space-y-4 max-w-2xl mx-auto">
          <h3 className="mb-5 text-lg font-bold text-green-700">
            نتایج تشخیص آب و دمای مناسب گیاه شما
          </h3>

          {result.split("\n\n").map((section, index) => {
            const [title, ...rest] = section.split(":");
            const content = rest.join(":").trim();
            return (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
              >
                <strong className="text-green-800">{title.trim()}:</strong>
                <p className="text-gray-700 mt-2 leading-relaxed whitespace-pre-line">
                  {content}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WaterDetection;
