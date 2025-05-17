import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className="p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileCard />
      </motion.div>
      <motion.div
        className="w-full h-0.25 bg-line-color mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileMenu />
      </motion.div>
    </motion.div>
  );
};

export default UserProfile;
