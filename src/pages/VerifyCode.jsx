import VerifyCodeForm from "../components/auth/VerifyCodeForm";

/**
 * Page for verifying the user's phone number with a verification code.
 * This page renders the VerifyCodeForm component.
 */
const VerifyCodePage = () => {
  return (
    <div className="verify-code">
      <VerifyCodeForm />
    </div>
  );
};

export default VerifyCodePage;
