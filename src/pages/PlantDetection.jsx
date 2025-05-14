import React from "react";
import UploadButton from "../components/common/UploadButton";
import ResultButton from "../components/common/ResultButton";
import Description from "../components/common/Description";

const PlantDetection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen  text-gray-800 p-4">
      <h1 className="text-lg font-bold mb-5">تشخیص گیاه</h1>
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

      <UploadButton />

      <Description
        text="با گرفتن یا آپلود یک عکس واضح از گیاه خود، می‌توانید به‌صورت خودکار نوع، خانواده و ویژگی‌های اصلی گیاه را شناسایی کنید. این قابلیت برای شناسایی گیاهان ناشناخته در خانه، باغ یا طبیعت بسیار مفید است.
        تصویر باید با فرمت JPG یا PNG باشد
        حداکثر حجم فایل: ۱۰ مگابایت
        عکس باید واضح و شامل برگ یا گل گیاه باشد"
      />

      <ResultButton />
    </div>
  );
};

export default PlantDetection;
