import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import VerifyCodeInput from "./VerifyCodeInput";
import Button from "../common/Button";
import AuthContext from "../../context/AuthContext";

const VerifyCodeForm = () => {
  const [code, setCode] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { verifyCode, handleSendCode, isAuthenticated } =
    useContext(AuthContext);

  const phone = location.state?.phone || "";

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleResendCode = async () => {
    if (canResend) {
      setError(null);
      setLoading(true);
      try {
        await handleSendCode(phone);
        setResendTimer(60);
        setCanResend(false);
      } catch (err) {
        setError("خطا در ارسال مجدد کد");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (value) => {
    setCode(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!phone) {
      setError("شماره تلفن یافت نشد، لطفاً دوباره وارد شوید");
      return;
    }
    setLoading(true);
    try {
      await verifyCode(phone, code);
      navigate("/");
    } catch (err) {
      setError("کد تأیید اشتباه است یا منقضی شده");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify-code-form flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <img
        src="/assets/icons/logo-green.svg"
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
          disabled={loading || code.trim().length === 0}
          className="bg-color text-white hover:bg-green-800 w-full mt-5"
        >
          {loading ? "در حال بررسی..." : "تأیید"}
        </Button>
      </form>

      {error && (
        <p className="text-red-600 text-center mt-4 text-sm">{error}</p>
      )}

      <button
        onClick={handleResendCode}
        disabled={!canResend || loading}
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
