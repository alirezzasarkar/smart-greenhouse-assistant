import React, { useState } from "react";

const AccountInfoForm = () => {
  const [formData, setFormData] = useState({
    name: "نام و نام خانوادگی",
    email: "example@email.com",
    phone: "09123456789",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Account info updated:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="نام و نام خانوادگی"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="email"
        name="email"
        placeholder="ایمیل"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="text"
        name="phone"
        placeholder="شماره تماس"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
      >
        ذخیره تغییرات
      </button>
    </form>
  );
};

export default AccountInfoForm;
