import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "./PhoneInput";
import Button from "../common/Button";
import AuthContext from "../../context/AuthContext";

const AuthForm = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { handleSendCode, isAuthenticated, firstCustomerVisit } =
    useContext(AuthContext);

  useEffect(() => {
    console.log(firstCustomerVisit);
    if (firstCustomerVisit) {
      navigate("/onboarding");
    } else if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, firstCustomerVisit]);

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await handleSendCode(phone); // ارسال شماره به API
      navigate("/verify-code", { state: { phone } }); // ارسال شماره به صفحه تایید کد
    } catch (err) {
      setError(err?.response?.data?.message || "خطا در ارسال کد تایید");
    } finally {
      setLoading(false);
    }
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
          disabled={loading || phone.trim().length === 0}
          className="bg-color text-white hover:bg-green-800 w-full mt-5"
        >
          {loading ? "در حال ارسال..." : "ادامه"}
        </Button>
      </form>
      {error && (
        <p className="text-red-600 text-center mt-4 text-sm">{error}</p>
      )}
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
