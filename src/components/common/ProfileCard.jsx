import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex items-center bg-white p-2 mt-4 rounded-lg  mb-6">
      <img
        src="/public/assets/icons/user.svg"
        alt="User Avatar"
        className="w-16 h-16 ml-5 rounded-full mr-4 border-2 border-gray-300 p-2"
      />
      <div>
        <h2 className="text-md font-semibold mb-2">نام و نام خانوادگی</h2>
        <p className="text-sm text-gray-500">
          ۲۰ روز مانده تا پایان اشتراک پایه
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
