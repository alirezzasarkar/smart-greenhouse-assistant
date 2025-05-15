import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const persianToEnglishDigits = (str) =>
      str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

    const phone = persianToEnglishDigits(formData.phone);

    if (!formData.name.trim()) {
      newErrors.name = "نام و نام خانوادگی الزامی است.";
    }
    if (!phone.trim()) {
      newErrors.phone = "شماره تماس الزامی است.";
    } else if (!/^\d{10,11}$/.test(phone)) {
      newErrors.phone = "شماره تماس باید معتبر باشد.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "توضیحات الزامی است.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Clear form after successful submission
      setFormData({ name: "", phone: "", description: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="نام و نام خانوادگی"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-2">{errors.name}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="شماره تماس"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-2">{errors.phone}</p>
        )}
      </div>
      <div>
        <textarea
          name="description"
          placeholder="توضیحات"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-10 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-2">{errors.description}</p>
        )}
      </div>
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
