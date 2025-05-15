import React, { useState } from "react";
import UploadButton from "../components/common/UploadButton";

const EditAccountInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "علیرضا",
    lastName: "سرکار",
    phone: "09123456789",
    email: "example@email.com",
    usageType: "گیاهان خانگی",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic here
    console.log("Updated info:", formData);
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold text-center mb-10">
        ویرایش حساب کاربری
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-right text-sm font-medium text-gray-700">
          اطلاعات خود را تکمیل کنید
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="نام"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="lastName"
          placeholder="نام خانوادگی"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="phone"
          placeholder="شماره تماس"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل (اختیاری)"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="mt-6">
          <label className="block text-right text-sm font-medium text-gray-700 mb-4">
            نوع استفاده شما از پلتفرم چیست؟
          </label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center text-sm mb-2">
              <input
                type="radio"
                name="usageType"
                value="باغ داری"
                checked={formData.usageType === "باغ داری"}
                onChange={handleChange}
                className="form-radio text-green-500 ml-2"
              />
              باغ داری
            </label>
            <label className="flex items-center text-sm mb-2">
              <input
                type="radio"
                name="usageType"
                value="گلخانه داری"
                checked={formData.usageType === "گلخانه داری"}
                onChange={handleChange}
                className="form-radio text-green-500 ml-2"
              />
              گلخانه داری
            </label>
            <label className="flex items-center text-sm mb-2">
              <input
                type="radio"
                name="usageType"
                value="گیاهان خانگی"
                checked={formData.usageType === "گیاهان خانگی"}
                onChange={handleChange}
                className="form-radio text-green-500 ml-2"
              />
              گیاهان خانگی
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <UploadButton />
          <button
            type="submit"
            className="w-full md:w-auto flex-1 bg-color cursor-pointer text-white py-3 rounded-4xl text-sm hover:bg-green-600 transition-colors"
          >
            تکمیل اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAccountInfo;
