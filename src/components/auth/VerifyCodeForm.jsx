import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import VerifyCodeInput from "./VerifyCodeInput";
import Button from "../common/Button";

const VerifyCodeForm = () => {
  const [code, setCode] = useState("");
  const history = useHistory();

  const handleChange = (value) => {
    setCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verification Code:", code);
    history.push("/dashboard"); // هدایت به داشبورد پس از تأیید
  };

  return (
    <div className="verify-code-form flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <img
        src="/public/assets/icons/logo-green.svg"
        alt="لوگو"
        className="w-36 h-36 sm:w-36 sm:h-36 mb-10"
      />
      <h1 className="text-2xl font-bold text-gray-800 mt-10 mb-5 text-center">
        کد تأیید را وارد کنید
      </h1>
      <p className="text-sm text-gray-500 mb-12 text-center">
        کد تأیید برای شما ارسال شد
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
    </div>
  );
};

export default VerifyCodeForm;
