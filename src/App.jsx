import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SimRegistrationPage from "./components/SimRegistrationPage";
import StepOne from "./components/StepOne";
import MainLayout from "./components/MainLayout";
import OTPVerificationPage from "./components/OTPVerificationPage";
import RegisterYourSim from "./components/RegisterYourSim";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<SimRegistrationPage />} />
          <Route path="/step-one" element={<StepOne />} />
          <Route path="/step-two" element={<OTPVerificationPage />} />
          <Route path="/step-three" element={<RegisterYourSim />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
