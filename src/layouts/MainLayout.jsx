import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    {
      to: "/plant-detection",
      label: "تشخیص نوع و خانواده گیاه",
      iconSrc: "/public/assets/icons/menu-icon/1.svg",
    },
    {
      to: "/pest-detection",
      label: "تشخیص انواع آفات و راه های درمانی آن",
      iconSrc: "/public/assets/icons/menu-icon/2.svg",
    },
    {
      to: "/fertilizer-detection",
      label: "تشخیص کود مناسب گیاه و زمان کود دهی",
      iconSrc: "/public/assets/icons/menu-icon/4.svg",
    },
    {
      to: "/water-detection",
      label: "تشخیص آب و دما مناسب گیاه",
      iconSrc: "/public/assets/icons/menu-icon/5.svg",
    },
    {
      to: "/support",
      label: "پشتیبانی 24 ساعته",
      iconSrc: "/public/assets/icons/menu-icon/6.svg",
    },
  ];

  const menu = [
    {
      to: "/profile",
      label: "پروفایل کاربری",
      iconSrc: "/public/assets/icons/profile-1.svg",
      activeIconSrc: "/public/assets/icons/profile.svg",
    },
    {
      to: "/",
      label: "صفحه اصلی",
      iconSrc: "/public/assets/icons/home-1.svg",
      activeIconSrc: "/public/assets/icons/home.svg",
    },
    {
      to: "/test1",
      label: "مشاوره هوشمند",
      iconSrc: "/public/assets/icons/consultant-1.svg",
      activeIconSrc: "/public/assets/icons/consultant.svg",
    },
  ];

  return (
    <div className="flex flex-col h-full relative">
      <header className="flex items-center justify-between px-4 py-2 bg-white">
        <button
          className="p-2 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src="/public/assets/icons/menu.svg"
            alt="Menu Icon"
            className="w-8 h-8"
          />
        </button>
        <Link to="/">
          <img
            src="/public/assets/icons/logo-green.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>
      </header>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white-50 z-50 backdrop-blur-2xl">
          <button
            className="absolute top-2 right-4 p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/public/assets/icons/close.svg"
              alt="Menu Icon"
              className="w-8 h-8"
            />
          </button>
          <ul className="mt-30 space-y-4 px-4">
            {tabs.map(({ to, label, iconSrc }) => (
              <li
                key={to}
                className="relative mb-7 hover:bg-gray-100 flex rounded-md items-center"
              >
                <img src={iconSrc} alt={label} className="w-6 h-6 mr-2" />
                <Link
                  to={to}
                  className="block py-2 px-4 text-gray-700  flex-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
                <div className="absolute -bottom-2 left-0 w-full h-0.25 bg-line-color"></div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div key={pathname} className="flex-grow overflow-auto pb-25">
        <Outlet />
      </div>

      <nav
        className="fixed bottom-0 w-full mt-10 mx-auto bg-menu h-16 flex rounded-t-4xl justify-around items-start pb-18 pt-2"
        style={{ maxWidth: "430px" }}
      >
        {menu.map(({ to, label, iconSrc, activeIconSrc }) => {
          const isActive = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center text-center"
            >
              <div
                className={
                  `transition-all duration-200 flex items-center justify-center ` +
                  (isActive
                    ? "relative -mt-4 w-12 h-12 bg-color text-white rounded-full"
                    : "mt-2 w-6 h-6 text-gray-400")
                }
              >
                <img
                  src={isActive ? activeIconSrc : iconSrc}
                  alt={label}
                  className="w-6 h-6"
                />
              </div>
              <span
                className={
                  `block mt-2 text-xs transition-colors duration-200 ` +
                  (isActive ? "text-color font-medium" : "text-gray-500")
                }
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MainLayout;
