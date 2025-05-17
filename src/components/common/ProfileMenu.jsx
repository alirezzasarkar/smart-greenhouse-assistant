import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const menuItems = [
    {
      label: "اطلاعات حساب کاربری",
      icon: "/public/assets/icons/profile-icon/profile.svg",
      to: "/profile/account-info",
    },
    {
      label: "لیست پرداخت ها",
      icon: "/public/assets/icons/profile-icon/payment.svg",
      to: "/profile/payments",
    },
    {
      label: "تمدید اشتراک",
      icon: "/public/assets/icons/profile-icon/subscription.svg",
      to: "/profile/subscription-renewal",
    },
    {
      label: "تاریخچه تحلیل ها",
      icon: "/public/assets/icons/profile-icon/analysis.svg",
      to: "/profile/analysis-history",
    },
  ];

  return (
    <ul className="space-y-4 ">
      {menuItems.map((item, index) => (
        <Link to={item.to} key={index} className="block">
          <li className="border border-gray-200 flex items-center bg-white p-4 rounded-2xl ">
            <img src={item.icon} alt={item.label} className="w-6 h-6 ml-4" />
            <span className="text-sm text-gray-700 font-bold flex-1">
              {item.label}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ProfileMenu;
