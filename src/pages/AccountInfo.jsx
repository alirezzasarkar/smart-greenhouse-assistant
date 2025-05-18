import { useState } from "react";
import AccountInfoCard from "../components/common/AccountInfoCard";
import PageTitle from "../components/common/PageTitle";
import Loading from "../components/common/PlantLoader";

/**
 * AccountInfo component is a page that displays user's account information.
 *
 * @returns {JSX.Element} The JSX element representing the AccountInfo component.
 */
const AccountInfo = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="p-4">
      <AccountInfoCard />
    </div>
  );
};

export default AccountInfo;
