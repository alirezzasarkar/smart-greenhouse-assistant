import React from "react";
import ProfileCard from "../components/common/ProfileCard";
import ProfileMenu from "../components/common/ProfileMenu";

/**
 * UserProfile component is a page that displays user's profile information
 * and a menu for navigation to other pages.
 *
 * @returns {JSX.Element} The JSX element representing the UserProfile component.
 */
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
