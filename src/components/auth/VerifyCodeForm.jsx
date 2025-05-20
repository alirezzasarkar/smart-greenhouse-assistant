import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VerifyCodeInput from "./VerifyCodeInput";
import Button from "../common/Button";

const VerifyCodeForm = () => {
  const [code, setCode] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleResendCode = () => {
    if (canResend) {
      console.log("Resending verification code...");
      setResendTimer(60);
      setCanResend(false);
    }
  };

  const handleChange = (value) => {
    setCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verification Code:", code);
    navigate("/");
  };

  return (
    <div className="verify-code-form flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <img
        src="/public/assets/icons/logo-green.svg"
        alt="لوگو"
        className="w-36 h-36 sm:w-36 sm:h-36 mb-10"
      />
      <h1 className="text-xl font-bold text-gray-800 mt-10 mb-5 text-center">
        کد تأیید را وارد کنید
      </h1>
      <p className="text-sm text-gray-500 mb-12 text-center">
        کد فعال‌سازی به شماره همراه شما ارسال شده است. لطفاً کد را وارد نمایید
        تا روند ورود تکمیل شود.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <VerifyCodeInput value={code} onChange={handleChange} />
        <Button
          type="submit"
          className="bg-color text-white hover:bg-green-800 w-full mt-5"
        >
          تأیید
        </Button>
      </form>
      <button
        onClick={handleResendCode}
        disabled={!canResend}
        className={`mt-8 text-sm ${
          canResend
            ? "text-color btn bg-gray-100 w-full rounded-4xl p-3"
            : "text-gray-400"
        }`}
      >
        {canResend
          ? "ارسال مجدد کد تأیید"
          : `لطفاً تا ${resendTimer} ثانیه دیگر منتظر بمانید، سپس می‌توانید کد را مجدداً ارسال کنید`}
      </button>
    </div>
  );
};

export default VerifyCodeForm;
