import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "./PhoneInput";
import Button from "../common/Button";

const AuthForm = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number:", phone);
    navigate("/verify-code");
  };

  return (
    <div className="auth-form flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <img
        src="/public/assets/icons/logo-green.svg"
        alt="لوگو"
        className="w-36 h-36 sm:w-36 sm:h-36 mb-10"
      />
      <h1 className="text-xl font-bold text-gray-800 mt-10 mb-5 text-center">
        قدم اول برای مراقبتی دقیق و هوشمند
      </h1>
      <p className="text-sm text-gray-500 mb-12 text-center">
        برای شروع کافیست وارد حساب کاربری‌تان شوید، یا اگر کاربر جدید هستید،
        همین حالا ثبت‌نام کنید.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <PhoneInput value={phone} onChange={handleChange} />
        <Button
          type="submit"
          className="bg-color text-white hover:bg-green-800 w-full mt-5"
        >
          ادامه
        </Button>
      </form>
      <p className="mt-20 text-xs text-gray-400 text-center">
        ثبت‌نام و ورود شما به منزله قبول{" "}
        <a href="#" className="underline">
          قوانین و شرایط
        </a>{" "}
        است
      </p>
    </div>
  );
};

export default AuthForm;
