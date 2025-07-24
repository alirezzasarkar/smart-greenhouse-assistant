import React, { useContext, useEffect, useState } from "react";
import UploadButton from "../components/common/UploadButton";
import InputField from "../components/common/InputField";
import RadioGroup from "../components/common/RadioGroup";
import AuthContext from "../context/AuthContext";
import { updateProfile } from "../api/usersApi";
import toast from "react-hot-toast";

/**
 * EditAccountInfo component renders the account information form
 * for users to edit their profile information.
 * The form contains input fields for first name, last name, phone number, email, and usage type
 * as well as an upload button for profile picture.
 * The form is submitted when the user clicks the "تکمیل اطلاعات" button.
 */
const EditAccountInfo = () => {
  const { user, updateUserDetails, refreshToken } = useContext(AuthContext);
  const [uploadStatus, setUploadStatus] = useState(null); // null, 'success', or 'error'
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    usage_type: "",
  });

  useEffect(() => {
    const { first_name, last_name, phone_number, usage_type, email } = user;
    setFormData({
      first_name,
      last_name,
      phone_number,
      email,
      usage_type,
    });
  }, [user]);

  const onUpload = async (image) => {
    console.log(image);
    setUploadStatus("success");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isChanged = Object.keys(formData).some(
      (key) => formData[key] !== user[key]
    );

    if (!isChanged) {
      toast.error("تغییری در اطلاعات ایجاد نشده است");
      return;
    }

    toast.promise(updateProfile(formData), {
      loading: "درحال بروزرسانی اطلاعات . . .",
      success: (response) => {
        updateUserDetails(response.data);
        return "پروفایل با موفقیت بروزرسانی شد";
      },
      error: (err) => {
        if (err.code === "token_not_valid") {
          refreshToken();
          toast.error("لطفا 10 ثانیه بعد مجدد تلاش کنید");
        }
        console.error("Error updating profile:", err);
        toast.error("خطایی پیش آمده");
      },
    });

    // try {
    //   const response = await updateProfile(formData);
    //   updateUserDetails(response.data);
    //   toast.success("پروفایل با موفقیت بروزرسانی شد");
    // } catch (err) {
    //   if (err.code === "token_not_valid") {
    //     await refreshToken();
    //     toast.error("لطفا 10 ثانیه بعد مجدد تلاش کنید");
    //   }
    //   console.error("Error updating profile:", err);
    //   toast.error("خطایی پیش آمده");
    // }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-right text-sm mt-5 font-medium text-gray-700">
          اطلاعات خود را تکمیل کنید
        </label>
        <InputField
          type="text"
          name="first_name"
          placeholder="نام"
          value={formData.first_name}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="last_name"
          placeholder="نام خانوادگی"
          value={formData.last_name}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="phone_number"
          placeholder="شماره تماس"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <InputField
          type="email"
          name="email"
          placeholder="ایمیل (اختیاری)"
          value={formData.email}
          onChange={handleChange}
        />
        <RadioGroup
          label="پلتفرم را بیشتر در چه زمینه‌ای استفاده می‌کنید؟"
          name="usage_type"
          options={[
            { label: "باغداری", value: "باغداری" },
            { label: "گلخانه‌داری", value: "گلخانه‌داری" },
            {
              label: "نگهداری از گیاهان خانگی",
              value: "نگهداری از گیاهان خانگی",
            },
          ]}
          selectedValue={formData.usage_type}
          onChange={handleChange}
        />
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <UploadButton onUpload={onUpload} uploadStatus={uploadStatus} />
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
