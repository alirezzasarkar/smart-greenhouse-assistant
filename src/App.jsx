import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnboardingPage from "./pages/Onboarding";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/onboarding" component={OnboardingPage} />
      </Switch>
    </Router>
  );
}

export default App;
