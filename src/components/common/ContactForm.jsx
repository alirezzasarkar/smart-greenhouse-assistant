import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="نام و نام خانوادگی"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="text"
        name="phone"
        placeholder="شماره تماس"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <textarea
        name="description"
        placeholder="توضیحات"
        value={formData.description}
        onChange={handleChange}
        className="w-full px-4 py-10 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="w-full bg-color text-white py-4 rounded-2xl text-sm hover:bg-green-600 transition-colors"
      >
        ارسال
      </button>
    </form>
  );
};

export default ContactForm;
