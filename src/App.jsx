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
import AnalysisDetail from "./pages/AnalysisDetail";
import LoadingPage from "./pages/Loading";
import ProtectedRoute from "./pages/ProtectedRoute";

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
    if (isFirstVisit == null) {
      setLocalStorage("isFirstVisit", true);
    }
    // if (isFirstVisit == null && showModalPaths.includes(currentPath)) {
    //   setShowModal(true);
    //   setLocalStorage("isFirstVisit", true);
    // }
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
        <Route
          path="/onboarding"
          element={
            // <ProtectedRoute>
            <OnboardingPage />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/signup-login"
          element={
            <ProtectedRoute>
              <SignUpLoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verify-code"
          element={
            <ProtectedRoute>
              <VerifyCodePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route
            path="/plant-detection"
            element={
              <ProtectedRoute>
                <PlantDetection />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<UserProfile />} />
          <Route
            path="/profile/account-info"
            element={
              <ProtectedRoute>
                <AccountInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit-account-info"
            element={
              <ProtectedRoute>
                <EditAccountInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pest-detection"
            element={
              <ProtectedRoute>
                <PestDetection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/support"
            element={
              <ProtectedRoute>
                <Support />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/payments"
            element={
              <ProtectedRoute>
                <Payments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/analysis-history"
            element={
              <ProtectedRoute>
                <AnalysisHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/analysis-history/analysis-detail/:id"
            element={
              <ProtectedRoute>
                <AnalysisDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fertilizer-detection"
            element={
              <ProtectedRoute>
                <FertilizerDetection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/water-detection"
            element={
              <ProtectedRoute>
                <WaterDetection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/smart-consultant"
            element={
              <ProtectedRoute>
                <SmartConsultant />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buy-subscription"
            element={
              <ProtectedRoute>
                <BuySubscription />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/subscription-renewal"
            element={
              <ProtectedRoute>
                <SubscriptionRenewal />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
