import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterYourSim from "./RegisterYourSim";
import SelectRegistrationType from "./SelectRegistrationType";

const StepTwo = () => {
  const navigate = useNavigate();

  // Local state for managing screens within this step
  const [currentScreen, setCurrentScreen] = useState("info");
  const [selectedRegistrationType, setSelectedRegistrationType] = useState("");

  // Handle continue from info screen
  const handleInfoContinue = () => {
    setCurrentScreen("select");
  };

  // Handle secondary button (navigate to home)
  const handleSecondaryAction = () => {
    navigate("/");
  };

  // Handle registration type submission
  const handleRegistrationTypeSubmit = (type) => {
    setSelectedRegistrationType(type);
    console.log("Selected Registration Type:", type);
    // Navigate to step three
    navigate("/digital-onboarding/step-three");
  };

  return (
    <div className="main-steps-container">
      {currentScreen === "info" && (
        <RegisterYourSim
          onContinue={handleInfoContinue}
          onSecondary={handleSecondaryAction}
        />
      )}

      {currentScreen === "select" && (
        <SelectRegistrationType
          initialType={selectedRegistrationType}
          onSubmit={handleRegistrationTypeSubmit}
        />
      )}
    </div>
  );
};

export default StepTwo;
