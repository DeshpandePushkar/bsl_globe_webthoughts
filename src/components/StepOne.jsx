import { useState } from "react";
import MobileNumberScreen from "./MobileNumberScreen";
import OTPVerificationScreen from "./OTPVerificationPage";

const StepOne = () => {
  // Local state for managing screens within this step
  const [currentScreen, setCurrentScreen] = useState("mobile");
  const [mobileNumber, setMobileNumber] = useState("");

  // Handle mobile number submission
  const handleMobileSubmit = (mobile) => {
    setMobileNumber(mobile);
    setCurrentScreen("otp");
    // You might trigger OTP API call here
    console.log("Requesting OTP for:", mobile);
  };

  // Handle OTP verification success
  const handleOTPVerified = (otp) => {
    console.log("OTP verified:", otp);
    console.log("Mobile:", mobileNumber);
    // Navigate to step 2 or handle completion
    // navigate("/digital-onboarding/step-two");
  };

  // Handle resend OTP
  const handleResendOTP = () => {
    console.log("Resending OTP to:", mobileNumber);
    // Trigger resend OTP API call
  };

  // Allow user to go back to edit mobile number
  const handleEditMobile = () => {
    setCurrentScreen("mobile");
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      {currentScreen === "mobile" && (
        <MobileNumberScreen
          initialMobile={mobileNumber}
          onSubmit={handleMobileSubmit}
        />
      )}

      {currentScreen === "otp" && (
        <OTPVerificationScreen
          mobileNumber={mobileNumber}
          onVerified={handleOTPVerified}
          onResend={handleResendOTP}
          onEditMobile={handleEditMobile}
        />
      )}
    </div>
  );
};

export default StepOne;
