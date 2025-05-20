import React from "react";
import { Link } from "react-router-dom";

const AccountInfoCard = () => {
  return (
    <>
      <div className="flex flex-col bg-menu p-4 rounded-2xl  mb-6">
        <img
          src="/public/assets/icons/user.svg"
          alt="User Avatar"
          className="w-16 h-16 rounded-full mx-auto mb-10"
        />
        <div className="text-right">
          <p className="text-sm text-gray-500 mb-6">
            نام :{" "}
            <span className="font-bold text-black block mt-2">علیرضا</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            نام خانوادگی:{" "}
            <span className="font-bold text-black block mt-2">سرکار</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            ایمیل:{" "}
            <span className="font-bold text-black block mt-2">
              example@email.com
            </span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            شماره تماس:{" "}
            <span className="font-bold text-black block mt-2">09123456789</span>
          </p>
        </div>
      </div>
      <Link to="/profile/edit-account-info">
        <button className="cursor-pointer w-full mt-3 px-4 py-3 bg-orange-500 text-white rounded-2xl text-sm hover:bg-orange-600 transition-colors">
          ویرایش اطلاعات
        </button>
      </Link>
    </>
  );
};

export default AccountInfoCard;
