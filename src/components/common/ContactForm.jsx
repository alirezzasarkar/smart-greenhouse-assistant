import React, { useState } from "react";
import toast from "react-hot-toast";
import { createSupportRequest } from "../../api/supportApi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    customer_name: "",
    phone_number: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const persianToEnglishDigits = (str) =>
      str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

    const phone_number = persianToEnglishDigits(formData.phone_number);

    if (!formData.customer_name.trim()) {
      newErrors.customer_name = "نام و نام خانوادگی الزامی است.";
      toast.error("نام و نام خانوادگی الزامی است.");
    }
    if (!phone_number.trim()) {
      newErrors.phone_number = "شماره تماس الزامی است.";
      toast.error("شماره تماس الزامی است.");
    } else if (!/^\d{11}$/.test(phone_number)) {
      newErrors.phone_number = "شماره تماس باید معتبر باشد.";
      toast.error("شماره تماس باید معتبر باشد.");
    }
    if (!formData.description.trim()) {
      newErrors.description = "توضیحات الزامی است.";
      toast.error("توضیحات الزامی است.");
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
      toast.promise(createSupportRequest(formData), {
        loading: "در حال ارسال پیام . . .",
        success: (res) => {
          setFormData({ customer_name: "", phone_number: "", description: "" });
          setErrors({});
          return "پیام شما با موفقیت ارسال شد";
        },
        error: (err) => {
          console.log(err);
          return "مشکلی در ارسال پیام پیش آمده";
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="customer_name"
          placeholder="نام و نام خانوادگی"
          value={formData.customer_name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.customer_name && (
          <p className="text-red-500 text-xs mt-2">{errors.customer_name}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          name="phone_number"
          placeholder="شماره تماس"
          value={formData.phone_number}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.phone_number && (
          <p className="text-red-500 text-xs mt-2">{errors.phone_number}</p>
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
