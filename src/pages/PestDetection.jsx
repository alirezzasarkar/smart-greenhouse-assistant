import React, { useState } from "react";
import UploadButton from "../components/common/UploadButton";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Loader from "../components/common/Loader";
import toast from "react-hot-toast";
const questions = [
  {
    question:
      "آیا موردی از موارد زیر را در نزدیکی یا روی گیاه دیده‌اید؟ (می‌توانید چند گزینه را انتخاب کنید)",
    name: "visibleSignsNearPlant",
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
    name: "otherPlantsAffected",
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
    name: "environmentCondition",
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
    name: "recentUsages",
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
    name: "damagedPlantParts",
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
  const [formData, setFormData] = useState({});

  const handleUpload = (image) => {
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
      setError("لطفاً ابتدا یک تصویر آپلود کنید.");
      toast.error("لطفاً ابتدا یک تصویر آپلود کنید.");
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
      <Description text="تصویر خود را واضح و با کیفیت مناسب مانند تصویر زیر ارسال کنید" />
      <div className="flex justify-center my-4">
        <img
          src="/public/assets/images/pest-detection.png"
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

          {result && (
            <div className="mt-20 text-center">
              <h3 className="mb-5 text-color">نتایج تشخیص آفات گیاه شما</h3>
              <img
                src={uploadedImage}
                alt="Uploaded Plant"
                className="rounded-lg shadow-md w-full max-w-sm"
              />
              <p className="text-gray-700 mt-10 text-justify">{result}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PestDetection;
