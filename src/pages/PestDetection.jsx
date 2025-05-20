import React, { useState } from "react";
import UploadButton from "../components/common/UploadButton";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Loader from "../components/common/Loader";
const questions = [
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
      { label: "کم نور یا بدون نور", value: "low_or_no_light" },
    ],
  },
  {
    question: "دمای محیطی که گیاه نگهداری می‌شود معمولاً چقدر است؟",
    name: "temperature",
    options: [
      { label: "زیر ۱۵ درجه", value: "below_15c" },
      { label: "بین ۱۵ تا ۲۵ درجه", value: "15_to_25c" },
      { label: "بالای ۲۵ درجه", value: "above_25c" },
      { label: "متغیر بوده و مشخص نیست", value: "variable_unknown" },
    ],
  },
  {
    question: "آیا در خاک یا اطراف گیاه، حشرات یا لارو دیده‌اید؟",
    name: "insectsPresent",
    options: [
      { label: "بله", value: "yes" },
      { label: "خیر", value: "no" },
    ],
  },
  {
    question: "زه‌کشی گلدان چگونه است؟",
    name: "drainage",
    options: [
      { label: "خوب است، آب اضافی خارج می‌شود", value: "good_drainage" },
      { label: "متوسط است", value: "average_drainage" },
      { label: "ضعیف یا بدون خروج آب", value: "poor_drainage" },
    ],
  },
  {
    question: "آیا اخیراً گیاه را جابه‌جا کرده‌اید یا گلدانش را عوض کرده‌اید؟",
    name: "recentTransplant",
    options: [
      { label: "بله", value: "yes" },
      { label: "خیر", value: "no" },
    ],
  },
  {
    question: "آیا اخیراً به عنوان تقویتی از آفت‌کش استفاده کرده‌اید؟",
    name: "pesticideUsage",
    options: [
      { label: "در یک ماه گذشته", value: "within_1_month" },
      { label: "بین ۱ تا ۳ ماه گذشته", value: "between_1_and_3_months" },
      { label: "بیشتر از ۳ ماه گذشته", value: "more_than_3_months" },
      { label: "اصلاً استفاده نکرده‌ام", value: "never_used" },
    ],
  },
];

const handleQuestionChange = (e) => {
  console.log(e.target.name, e.target.value);
};

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
  const [error, setError] = useState("");

  const handleUpload = (image) => {
    setUploadedImage(image);
    setError("");
  };

  const handleResultClick = () => {
    if (!uploadedImage) {
      setError("لطفاً ابتدا یک تصویر آپلود کنید.");
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
      <UploadButton onUpload={handleUpload} />
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
            key={index}
            question={q.question}
            options={q.options}
            name={q.name}
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
