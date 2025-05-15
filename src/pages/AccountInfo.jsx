import AccountInfoCard from "../components/common/AccountInfoCard";
import PageTitle from "../components/common/PageTitle";

/**
 * AccountInfo component is a page that displays user's account information.
 *
 * @returns {JSX.Element} The JSX element representing the AccountInfo component.
 */
const AccountInfo = () => {
  return (
    <div className="p-4">
      <AccountInfoCard />
    </div>
  );
};

export default AccountInfo;
