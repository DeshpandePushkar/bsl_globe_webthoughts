import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SimRegistrationPage from "./components/SimRegistrationPage";
import StepOne from "./components/StepOne";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SimRegistrationPage />} />
          <Route path="/step-one" element={<StepOne />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
