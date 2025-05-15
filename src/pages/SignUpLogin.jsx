import AuthForm from "../components/auth/AuthForm";

/**
 * SignUpLoginPage component renders the authentication form
 * for users to sign up or log in.
 * It contains the AuthForm component.
 */

const SignUpLoginPage = () => {
  return (
    <div className="sign-up-login">
      <AuthForm />
    </div>
  );
};

export default SignUpLoginPage;
