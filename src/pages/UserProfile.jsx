import React from "react";
import ProfileCard from "../components/common/ProfileCard";
import ProfileMenu from "../components/common/ProfileMenu";

const UserProfile = () => {
  return (
    <div className="p-4">
      <ProfileCard />
      <div className="w-full h-0.25 bg-line-color mb-8"></div>
      <ProfileMenu />
    </div>
  );
};

export default UserProfile;
