import React, { useState } from "react";
import UploadButton from "../components/common/UploadButton";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Loader from "../components/common/Loader";
import toast from "react-hot-toast";
import base64ToFile from "../utils/base64ToFile";
import { detectPest } from "../api/pestsApi";
const questions = [
  {
    question: "چه مدت است این علائم را روی گیاه مشاهده می‌کنید؟",
    name: "symptom_duration",
    options: [
      { label: "کمتر از ۳ روز", value: "less_than_3_days" },
      { label: "حدود یک هفته", value: "around_one_week" },
      { label: "بین ۱ تا ۲ هفته", value: "between_1_and_2_weeks" },
      { label: "بیشتر از دو هفته", value: "more_than_2_weeks" },
      { label: "نمی‌دانم", value: "not_sure" },
    ],
  },
  {
    question:
      "کدام‌یک از علائم زیر را روی گیاه مشاهده می‌کنید؟ (می‌توانید چند گزینه را انتخاب کنید)",
    name: "visible_symptoms",
    kind: "multi",
    options: [
      { label: "تغییر رنگ برگ‌ها", value: "leaf_discoloration" },
      { label: "پیچ‌خوردگی برگ‌ها", value: "leaf_curling" },
      { label: "ریزش برگ", value: "leaf_drop" },
      { label: "ایجاد لکه روی برگ یا ساقه", value: "spots_on_leaf_or_stem" },
      { label: "رشد ناقص یا توقف رشد", value: "stunted_growth" },
      { label: "علائمی مشاهده نمی‌شود", value: "no_symptoms" },
    ],
  },
  {
    question:
      "آیا موردی از موارد زیر را در نزدیکی یا روی گیاه دیده‌اید؟ (می‌توانید چند گزینه را انتخاب کنید)",
    name: "environmental_signs",
    kind: "multi",
    options: [
      { label: "حشرات کوچک قابل مشاهده", value: "visible_small_insects" },
      {
        label: "تار عنکبوت یا بافت نازک سفید",
        value: "web_or_thin_white_layer",
      },
      {
        label: "ذرات سفید یا سیاه روی برگ‌ها",
        value: "white_or_black_particles",
      },
      { label: "تخم یا نقاط ریز روی سطح برگ", value: "eggs_or_spots_on_leaf" },
      { label: "هیچ‌کدام از موارد بالا", value: "none_of_the_above" },
    ],
  },
  {
    question: "آیا گیاهان دیگر نیز دچار این مشکل شده‌اند؟",
    name: "other_plants_affected",
    options: [
      {
        label: "بله، چند گیاه دیگر هم آسیب دیده‌اند",
        value: "multiple_plants_affected",
      },
      {
        label: "فقط همین گیاه آسیب دیده است",
        value: "only_this_plant_affected",
      },
      { label: "مطمئن نیستم", value: "not_sure" },
    ],
  },
  {
    question: "گیاه در چه شرایط محیطی نگهداری می‌شود؟",
    name: "environment_conditions",
    options: [
      {
        label: "در فضای باز با نور مستقیم خورشید",
        value: "outdoor_full_sunlight",
      },
      {
        label: "در فضای باز اما در سایه یا نیم‌سایه",
        value: "outdoor_partial_shade",
      },
      { label: "در گلخانه", value: "in_greenhouse" },
      { label: "در فضای بسته (مثلاً داخل خانه)", value: "indoor_environment" },
      { label: "سایر شرایط", value: "other_conditions" },
    ],
  },
  {
    question:
      "آیا اخیراً از یکی از موارد زیر استفاده کرده‌اید؟ (می‌توانید چند گزینه را انتخاب کنید)",
    name: "recent_interventions",
    kind: "multi",
    options: [
      { label: "کود شیمیایی", value: "chemical_fertilizer" },
      {
        label: "کود طبیعی یا ورمی‌کمپوست",
        value: "natural_fertilizer_or_vermicompost",
      },
      { label: "سم یا آفت‌کش", value: "pesticide_or_insecticide" },
      {
        label: "آب با تغییرات خاص (مثلاً آب شور، کلردار، باران)",
        value: "water_with_special_conditions",
      },
      { label: "خیر، هیچ‌کدام", value: "none" },
    ],
  },
  {
    question:
      "کدام قسمت‌های گیاه بیشتر آسیب‌دیده‌اند؟ (می‌توانید چند گزینه را انتخاب کنید)",
    name: "damaged_parts",
    kind: "multi",
    options: [
      { label: "برگ‌ها", value: "leaves" },
      { label: "ساقه‌ها", value: "stems" },
      { label: "گل‌ها", value: "flowers" },
      { label: "ریشه (در صورت مشاهده)", value: "roots" },
      { label: "نمی‌توان تشخیص داد", value: "cannot_determine" },
    ],
  },
];

/**
 * The PestDetection component provides an interface for users to upload a
 * plant image and receive pest detection results. The component includes a
 * file upload input, a series of questions to refine pest detection
 * recommendations, and displays results based on user input. It handles
 * loading states and displays errors if no image is uploaded.
 *
 * @returns {JSX.Element} A React component containing the pest detection
 * interface and results.
 */
const PestDetection = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUploadStatus, setImageUploadStatus] = useState(null);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    symptom_duration: "",
    visible_symptoms: "",
    environmental_signs: "",
    other_plants_affected: "",
    environment_conditions: "",
    recent_interventions: "",
    damaged_parts: "",
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleUpload = (image) => {
    if (!(image instanceof File)) {
      toast.error("فایل نامعتبر است");
      return;
    }
    console.log(image);
    setUploadedImage(image);
    setImageUploadStatus("success");
    setError("");
  };

  const handleQuestionChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResultClick = () => {
    if (!uploadedImage) {
      toast.error("لطفاً ابتدا یک تصویر آپلود کنید.");
      return;
    }

    const emptyFields = Object.entries(formData).filter(([key, value]) => {
      if (Array.isArray(value)) return value.length === 0;
      return !value || value.trim() === "";
    });

    if (emptyFields.length > 0) {
      toast.error(
        "لطفاً تمام گزینه‌ها را تکمیل کنید. پر کردن همه‌ی فیلدها الزامی است."
      );
      return;
    }

    setLoading(true);
    setResult("");

    const formDataToSend = new FormData();

    formDataToSend.append("image", uploadedImage);

    const answers = { ...formData };
    formDataToSend.append("answers", JSON.stringify(answers));

    const imageUrl = URL.createObjectURL(uploadedImage);
    setPreviewUrl(imageUrl);

    const startTime = performance.now();

    toast.promise(detectPest(formDataToSend), {
      loading: "درحال پردازش تصویر و اطلاعات . . .",
      success: (res) => {
        const endTime = performance.now();
        const duration = endTime - startTime;

        console.log(`⏱️ زمان پاسخ سرور: ${duration.toFixed(2)} میلی‌ثانیه`);
        setResult(res.data.result);
        setLoading(false);
      },
      error: (err) => {
        console.log(err);
        setLoading(false);
        return "خطایی در سرور پیش آمده";
      },
    });
  };

  return (
    <div className="p-4">
      <Description text="تصویر خود را واضح و با کیفیت مناسب مانند تصویر زیر ارسال کنید" />
      <div className="flex justify-center my-4">
        <img
          src="/assets/images/pest-detection.png"
          alt="نمونه تصویر آفات"
          className="rounded-lg shadow-md"
        />
      </div>
      <UploadButton onUpload={handleUpload} uploadStatus={imageUploadStatus} />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <Description
        text={
          <>
            برای شناسایی آفات گیاه خود به صورت خودکار، مراحل زیر را دنبال کنید:
            <br />
            <span className="font-semibold">
              ۱. یک عکس واضح از قسمت‌های آسیب‌دیده یا مشکوک گیاه خود بگیرید یا
              آن را آپلود کنید.
            </span>
            <br />
            <span className="font-semibold">
              ۲. حجم فایل عکس نباید بیشتر از ۱۰ مگابایت باشد.
            </span>
            <br />
            <span className="font-semibold">
              ۳. عکس باید واضح بوده و بخش‌هایی مانند برگ‌ها، ساقه‌ها یا گل‌ها که
              علائم آفت در آنها دیده می‌شود، مشخص باشد.
            </span>
            <br />
            <span>
              این قابلیت به شما کمک می‌کند تا انواع آفات و بیماری‌های گیاهی را
              به سرعت شناسایی کرده و راهکارهای درمانی مناسب را دریافت کنید تا
              سلامت گیاهان‌تان حفظ شود.
            </span>
          </>
        }
      />

      <Description text="برای دقت بیشتر در پاسخ دریافتی، لطفاً به سوالات زیر پاسخ دهید. (پاسخ‌گویی اختیاری است)" />

      <div className="mt-10">
        {questions.map((q, index) => (
          <Question
            kind={q.kind}
            key={index}
            question={q.question}
            options={q.options}
            name={q.name}
            value={formData[q.name]}
            onChange={handleQuestionChange}
          />
        ))}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ResultButton onClick={handleResultClick} />

          {/* {result && (
            <div className="mt-20 text-center">
              <h3 className="mb-5 text-color">نتایج تشخیص آفات گیاه شما</h3>
              <img
                src={uploadedImage}
                alt="Uploaded Plant"
                className="rounded-lg shadow-md w-full max-w-sm"
              />
              <p className="text-gray-700 mt-10 text-justify">{result}</p>
            </div>
          )} */}
          {result && (
            <div className="mt-20 text-right space-y-4 max-w-2xl mx-auto">
              <h3 className="mb-5 text-color">نتایج تشخیص آفات گیاه شما</h3>
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Uploaded Plant"
                  className="rounded-lg shadow-md w-full max-w-sm"
                />
              )}

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
        </>
      )}
    </div>
  );
};

export default PestDetection;
