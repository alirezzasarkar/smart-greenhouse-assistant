import React, { useState } from "react";
import UploadButton from "../components/common/UploadButton";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";
import Loader from "../components/common/Loader";
import toast from "react-hot-toast";
import { detectPlant } from "../api/plantsApi";

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
  const [imageUploadStatus, setImageUploadStatus] = useState(null);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleUpload = (image) => {
    setUploadedImage(image);
    setImageUploadStatus("success");
    setError("");
  };

  const handleResultClick = () => {
    if (!uploadedImage) {
      setError("لطفاً ابتدا یک تصویر آپلود کنید.");
      return;
    }
    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("image", uploadedImage);
    const imageUrl = URL.createObjectURL(uploadedImage);
    setPreviewUrl(imageUrl);

    toast.promise(detectPlant(formData), {
      loading: "درحال پردازش تصویر . . .",
      success: (res) => {
        console.log(res.data);
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

      <UploadButton onUpload={handleUpload} uploadStatus={imageUploadStatus} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <Description
        text={
          <>
            برای شناسایی گیاه خود به صورت خودکار، مراحل زیر را دنبال کنید:
            <br />
            <span className="font-semibold">
              ۱. یک عکس واضح از گیاه خود بگیرید یا آن را آپلود کنید.
            </span>
            <br />
            <span className="font-semibold">
              ۲. حجم فایل عکس نباید بیشتر از ۱۰ مگابایت باشد.
            </span>
            <br />
            <span className="font-semibold">
              ۳. عکس باید واضح بوده و برگ یا گل گیاه در آن مشخص باشد.
            </span>
            <br />
            این قابلیت به شما کمک می‌کند تا گیاهان ناشناخته در خانه، باغ یا
            طبیعت را به راحتی شناسایی کنید.
          </>
        }
      />

      {loading ? (
        <Loader />
      ) : (
        <>
          <ResultButton onClick={handleResultClick} />

          {result && (
            <div className="mt-20 text-right space-y-4 max-w-2xl mx-auto">
              <h3 className="mb-5 text-color">نتایج تشخیص گیاه شما</h3>
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

export default PlantDetection;
