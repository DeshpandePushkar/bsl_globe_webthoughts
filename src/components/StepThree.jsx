import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepThreeInfo from "./StepThreeInfo";
import StepThreeInstructions from "./StepThreeInstructions";
import DocumentScan from "./DocumentScan";
import SelfieCapture from "./SelfieCapture";

const StepThree = () => {
  const navigate = useNavigate();

  // Local state for managing screens within this step
  const [currentScreen, setCurrentScreen] = useState("info");

  // Handle continue from info screen
  const handleInfoContinue = () => {
    setCurrentScreen("instructions");
  };

  // Handle continue from instructions screen (modal OK clicked)
  const handleInstructionsContinue = () => {
    setCurrentScreen("documentScan");
  };

  // Handle continue from document scan
  const handleDocumentScanContinue = () => {
    setCurrentScreen("selfieCapture");
  };

  // Handle continue from selfie capture (if needed later)
  const handleSelfieContinue = () => {
    console.log("Selfie capture complete");
    // Navigate to step four or do something else later
    // navigate("/digital-onboarding/step-four");
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      {currentScreen === "info" && (
        <StepThreeInfo onContinue={handleInfoContinue} />
      )}

      {currentScreen === "instructions" && (
        <StepThreeInstructions onContinue={handleInstructionsContinue} />
      )}

      {currentScreen === "documentScan" && (
        <DocumentScan onContinue={handleDocumentScanContinue} />
      )}

      {currentScreen === "selfieCapture" && (
        <SelfieCapture onContinue={handleSelfieContinue} />
      )}
    </div>
  );
};

export default StepThree;
