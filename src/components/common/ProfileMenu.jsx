import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const menuItems = [
    {
      label: "اطلاعات حساب کاربری",
      icon: "/public/assets/icons/profile-icon/profile.svg",
      to: "/account-info",
    },
    {
      label: "لیست پرداخت ها",
      icon: "/public/assets/icons/profile-icon/payment.svg",
      to: "/payments",
    },
    {
      label: "تمدید اشتراک",
      icon: "/public/assets/icons/profile-icon/subscription.svg",
      to: "/renew-subscription",
    },
    {
      label: "تاریخچه تحلیل ها",
      icon: "/public/assets/icons/profile-icon/analysis.svg",
      to: "/analysis-history",
    },
  ];

  return (
    <ul className="space-y-4 ">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="border border-gray-200 flex items-center bg-white p-4 rounded-2xl "
        >
          <img src={item.icon} alt={item.label} className="w-6 h-6 ml-4" />
          <Link to={item.to} className="text-sm text-gray-700 flex-1">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProfileMenu;
