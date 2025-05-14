import React, { useState } from "react";

const UploadButton = () => {
  const [uploadStatus, setUploadStatus] = useState(null); // null, 'success', or 'error'

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === "image/jpeg" || file.type === "image/png") {
        setUploadStatus("success");
      } else {
        setUploadStatus("error");
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="mt-4 px-6 py-2 border-2 border-dotted border-green-500 text-green-500 rounded-4xl flex items-center cursor-pointer">
        <input
          type="file"
          accept="image/jpeg, image/png"
          className="hidden"
          onChange={handleFileUpload}
        />
        آپلود عکس
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-4m0 0V8m0 4h4m-4 0H8m12 4v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0l-4-4m4 4l-4 4"
          />
        </svg>
      </label>

      {uploadStatus === "success" && (
        <p className="mt-2 text-green-500">آپلود موفقیت‌آمیز بود.</p>
      )}
      {uploadStatus === "error" && (
        <p className="mt-2 text-red-500">فایل باید با فرمت JPG یا PNG باشد.</p>
      )}
    </div>
  );
};

export default UploadButton;
