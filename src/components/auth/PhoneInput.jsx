import React from "react";
import Input from "../common/Input";

const PhoneInput = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      name="phone"
      value={value}
      onChange={onChange}
      placeholder="شماره موبایل خود را وارد کنید"
    />
  );
};

export default PhoneInput;
