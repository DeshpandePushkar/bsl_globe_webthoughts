import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SimRegistrationPage from "./components/SimRegistrationPage";
import StepOne from "./components/step_one/StepOne";
import PageTracker from "./utils/PageTracker";
import InactivityHandler from "./utils/InactivityHandler";
import InactivityPage from "./components/InactivityPage";
import NavigationProtection from "./utils/NavigationProtection";
import { AuthProvider } from "./context/authContext";
import { OnboardingDataProvider } from "./context/OnboardingDataContext";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./components/MainLayout";
import StepTwo from "./components/step_two/StepTwo";
import StepThree from "./components/step_three/StepThree";
import StepFour from "./components/step_four/StepFour";
import StepFive from "./components/step_five/StepFive";
import StepSix from "./components/step_six/StepSix";

function App() {
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
                path="/digital-onboarding/step-five"
                element={<StepFive />}
              />

              <Route
                path="/digital-onboarding/step-six"
                element={<StepSix />}
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
