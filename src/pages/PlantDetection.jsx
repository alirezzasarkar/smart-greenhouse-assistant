import React, { useState } from "react";
import UploadButton from "../components/common/UploadButton";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Loader from "../components/common/Loader";

/**
 * PlantDetection component provides an interface for users to upload an image
 * of a plant and receive identification results. The component includes an
 * upload button for image selection, displays a loading indicator while
 * processing, and shows the results of the detection. It handles error states
 * if no image is uploaded and provides detailed information about the plant
 * based on the uploaded image. Users can learn about the plant's family,
 * light, and watering needs, as well as receive care recommendations.
 */

const PlantDetection = () => {
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
    <div className="flex flex-col items-center  text-gray-800 p-4">
      <p className="text-sm text-gray-600 mt-2">
        تصویر خود را واضح و با کیفیت مناسب مانند تصویر زیر ارسال کنید
      </p>

      <div className="my-4">
        <img
          src="/public/assets/images/plant-detection.png"
          alt="Plant Example"
          className="rounded-lg shadow-md w-full max-w-sm"
        />
      </div>

      <UploadButton onUpload={handleUpload} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <Description
        text="با گرفتن یا آپلود یک عکس واضح از گیاه خود، می‌توانید به‌صورت خودکار نوع، خانواده و ویژگی‌های اصلی گیاه را شناسایی کنید. این قابلیت برای شناسایی گیاهان ناشناخته در خانه، باغ یا طبیعت بسیار مفید است.
        تصویر باید با فرمت JPG یا PNG باشد
        حداکثر حجم فایل: ۱۰ مگابایت
        عکس باید واضح و شامل برگ یا گل گیاه باشد"
      />

      {loading ? (
        <Loader />
      ) : (
        <>
          <ResultButton onClick={handleResultClick} />

          {result && (
            <div className="mt-20 text-center">
              <h3 className="mb-5 text-color">نتایج تشخیص گیاه شما</h3>
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

export default PlantDetection;
