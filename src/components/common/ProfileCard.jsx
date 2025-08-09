import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const ProfileCard = () => {
  const { user } = useContext(AuthContext);
  const { first_name, last_name, active_subscription, remaining_days, image } =
    user;
  return (
    <div className="flex items-center bg-white p-2 mt-4 rounded-lg  mb-6">
      <img
        src={image ? image : "/assets/icons/user.svg"}
        alt="User Avatar"
        className="w-16 h-16 ml-5 rounded-full mr-4 border-2 border-gray-300 p-2"
      />
      <div>
        <h2 className="text-md font-semibold mb-2">
          {first_name} {last_name}
        </h2>
        {active_subscription && (
          <p className="text-sm text-gray-500">
            {remaining_days} روز مانده تا پایان اشتراک پایه
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
