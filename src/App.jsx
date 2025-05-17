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
import PestDetection from "./pages/PestDetection";
import FertilizerDetection from "./pages/FertilizerDetection";
import WaterDetection from "./pages/WaterDetection";
import Support from "./pages/Support";
import UserProfile from "./pages/UserProfile";
import AccountInfo from "./pages/AccountInfo";
import EditAccountInfo from "./pages/EditAccountInfo";
import BuySubscription from "./pages/BuySubscription";
import Payments from "./pages/Payments";
import AnalysisHistory from "./pages/AnalysisHistory";
import SmartConsultant from "./pages/SmartConsultant";
import SubscriptionRenewal from "./pages/SubscriptionRenewal";

/**
 * The main app component, which sets up the routes and a subscription modal
 * that shows up on the first visit to the plant or pest detection pages.
 */

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isFirstVisit = getLocalStorage("isFirstVisit");
    const currentPath = window.location.pathname;
    const showModalPaths = ["/plant-detection", "/pest-detection"];

    if (!isFirstVisit && showModalPaths.includes(currentPath)) {
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
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/account-info" element={<AccountInfo />} />
          <Route
            path="/profile/edit-account-info"
            element={<EditAccountInfo />}
          />
          <Route path="/pest-detection" element={<PestDetection />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile/payments" element={<Payments />} />
          <Route
            path="/profile/analysis-history"
            element={<AnalysisHistory />}
          />
          <Route
            path="/fertilizer-detection"
            element={<FertilizerDetection />}
          />
          <Route path="/water-detection" element={<WaterDetection />} />
          <Route path="/smart-consultant" element={<SmartConsultant />} />
          <Route path="/buy-subscription" element={<BuySubscription />} />
          <Route
            path="/profile/subscription-renewal"
            element={<SubscriptionRenewal />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
