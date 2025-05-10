import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnboardingPage from "./pages/Onboarding";
import SignUpLoginPage from "./pages/SignUpLogin";
import VerifyCodePage from "./pages/VerifyCode";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/onboarding" component={OnboardingPage} />
        <Route path="/signup-login" component={SignUpLoginPage} />
        <Route path="/verify-code" component={VerifyCodePage} />
      </Switch>
    </Router>
  );
}

export default App;
