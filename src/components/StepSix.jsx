import React, { useState, useEffect } from "react";
import StepSixLoadingScreen from "./StepSixLoadingScreen";
import Success from "./Success";
import StepSixError from "./StepSixError";

const StepSix = ({ registrationData }) => {
  const [status, setStatus] = useState("loading"); // 'loading' | 'success' | 'error'
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Simulate API call for registration submission
    const submitRegistration = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Mock success response (70% success rate for demo)
        const isSuccess = Math.random() > 0.3;

        if (isSuccess) {
          const mockSuccessData = {
            referenceCode: "01K0ZZGX63AP001RST5YYNY480",
            mobileNumber: registrationData?.mobilePhone || "639176882239",
            registrationDate: new Date().toISOString().split("T")[0],
          };
          setResponseData(mockSuccessData);
          setStatus("success");
        } else {
          const mockErrorData = {
            mobileNumber: registrationData?.mobilePhone || "639176882239",
            registrationDate: new Date().toISOString().split("T")[0],
          };
          setResponseData(mockErrorData);
          setStatus("error");
        }
      } catch (error) {
        console.error("Registration error:", error);
        setStatus("error");
      }
    };

    submitRegistration();
  }, [registrationData]);

  const handleRetry = () => {
    window.location.href = "/digital-onboarding";
  };

  const handleRegisterAnother = () => {
    window.location.href = "/digital-onboarding";
  };

  const handleGoHome = () => {
    window.location.href = "https://globe.com.ph";
  };

  if (status === "loading") {
    return <StepSixLoadingScreen />;
  }

  if (status === "success") {
    return (
      <Success
        data={responseData}
        onRegisterAnother={handleRegisterAnother}
        onGoHome={handleGoHome}
      />
    );
  }

  if (status === "error") {
    return (
      <StepSixError
        data={responseData}
        onRetry={handleRetry}
        onGoHome={handleGoHome}
      />
    );
  }

  return null;
};

export default StepSix;
