import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/helpers/localStorage";
import SubscriptionModal from "./components/common/SubscriptionModal";
import OnboardingPage from "./pages/Onboarding";
import SignUpLoginPage from "./pages/SignUpLogin";
import VerifyCodePage from "./pages/VerifyCode";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/Home";
import PlantDetection from "./pages/PlantDetection";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isFirstVisit = getLocalStorage("isFirstVisit");
    if (!isFirstVisit) {
      setShowModal(true);
      setLocalStorage("isFirstVisit", true);
    }
  }, []);

  const handleAccept = () => {
    console.log("Subscription accepted");
  };

  const handleDecline = () => {
    console.log("Subscription declined");
  };

  return (
    <Router>
      {showModal && (
        <SubscriptionModal
          onAccept={() => {
            setShowModal(false);
            handleAccept();
          }}
          onDecline={() => {
            setShowModal(false);
            handleDecline();
          }}
        />
      )}
      <Routes>
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/signup-login" element={<SignUpLoginPage />} />
        <Route path="/verify-code" element={<VerifyCodePage />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/plant-detection" element={<PlantDetection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
