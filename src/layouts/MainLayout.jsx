import React from "react";
import { Link, useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  const tabs = [
    {
      to: "/smart-consultant",
      label: "مشاوره هوشمند",
      iconPath:
        "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
    },
    {
      to: "/",
      label: "صفحه اصلی",
      iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    },
    {
      to: "/profile",
      label: "پروفایل کاربری",
      iconPath:
        "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div key={pathname} className="flex-grow overflow-auto">
        {children}
      </div>

      <nav className="relative w-full max-w-md mx-auto bg-menu shadow-lg h-16 flex justify-around items-start">
        {tabs.map(({ to, label, iconPath }) => {
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
                    ? "relative -mt-6 w-12 h-12 bg-color text-white rounded-full"
                    : "mt-2 w-6 h-6 text-gray-400")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={iconPath} />
                </svg>
              </div>
              <span
                className={
                  `block mt-2 text-xs transition-colors duration-200 ` +
                  (isActive ? "text-green-500 font-medium" : "text-gray-500")
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
