import React, { useState } from "react";
import UploadButton from "../components/common/UploadButton";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Question from "../components/common/Question";
import Loader from "../components/common/Loader";

const questions = [
  {
    question: "بیماری چند روز پیش ایجاد شده؟",
    name: "diseaseDuration",
    options: [
      { label: "سه روز", value: "3days" },
      { label: "یک ماه", value: "1month" },
      { label: "دو هفته", value: "2weeks" },
      { label: "امروز", value: "today" },
    ],
  },
  {
    question: "آخرین باری که گیاهتو آبیاری کردی کی بود؟",
    name: "lastWatering",
    options: [
      { label: "سه روز", value: "3days" },
      { label: "یک ماه", value: "1month" },
      { label: "دو هفته", value: "2weeks" },
      { label: "امروز", value: "today" },
    ],
  },
  {
    question: "نور محیط گیاهت به چه صورت بود؟",
    name: "lightCondition",
    options: [
      { label: "کم", value: "low" },
      { label: "متوسط", value: "medium" },
      { label: "زیاد", value: "high" },
    ],
  },
];

const handleQuestionChange = (e) => {
  console.log(e.target.name, e.target.value);
};

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
        text="پس از بارگذاری تصویر موردنظر، لطفاً سوالات زیر را پاسخ دهید. در صورت واضح و باکیفیت بودن عکس، سامانه قادر خواهد بود نوع آفت را با دقت بیشتری شناسایی کند. 
        تصویر باید با فرمت JPG یا PNG باشد
        حداکثر حجم فایل: ۱۰ مگابایت
        عکس باید واضح و شامل برگ یا گل گیاه باشد"
      />
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
