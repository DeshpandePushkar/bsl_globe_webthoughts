import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SimRegistrationPage from "./components/SimRegistrationPage";
import StepOne from "./components/StepOne";
import PageTracker from "./utils/PageTracker";
import { initGA } from "./utils/analytics";
import InactivityHandler from "./utils/InactivityHandler";
import InactivityPage from "./components/InactivityPage";
import NavigationProtection from "./utils/NavigationProtection";
import { AuthProvider } from "./context/authContext";
import { OnboardingDataProvider } from "./context/OnboardingDataContext";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./components/MainLayout";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";

function App() {
  useEffect(() => {
    initGA();
    console.log("App initialized with Google Analytics");
  }, []);

  return (
    <AuthProvider>
      <OnboardingDataProvider>
        <Router>
          <ScrollToTop />
          <PageTracker />
          <InactivityHandler />
          {/* <NavigationProtection /> */}
          <MainLayout>
            <Routes>
              {/* Redirect root to digital-onboarding */}
              <Route
                path="/"
                element={<Navigate to="/digital-onboarding" replace />}
              />

              {/* Root route for digital onboarding */}
              <Route
                path="/digital-onboarding"
                element={<SimRegistrationPage />}
              />

              {/* Subsequent routes */}
              <Route
                path="/digital-onboarding/step-one"
                element={<StepOne />}
              />

              <Route
                path="/digital-onboarding/step-two"
                element={<StepTwo />}
              />

              <Route
                path="/digital-onboarding/step-three"
                element={<StepThree />}
              />

              <Route
                path="/digital-onboarding/step-four"
                element={<StepFour />}
              />
              <Route
                path="/digital-onboarding/inactivity"
                element={<InactivityPage />}
              />
              {/* Catch all other routes and redirect to digital-onboarding */}
              <Route
                path="*"
                element={<Navigate to="/digital-onboarding" replace />}
              />
            </Routes>
          </MainLayout>
        </Router>
      </OnboardingDataProvider>
    </AuthProvider>
  );
}

export default App;
