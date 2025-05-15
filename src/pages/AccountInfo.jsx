import React from "react";
import AccountInfoCard from "../components/common/AccountInfoCard";

const AccountInfo = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold text-center mb-6">
        اطلاعات حساب کاربری
      </h1>
      <AccountInfoCard />
    </div>
  );
};

export default AccountInfo;
