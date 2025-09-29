import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { useAuth } from "../context/authContext"; // Adjust path as needed
import { useOnboardingData } from "../context/OnboardingDataContext";

const NavigationProtection = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { token, clearToken } = useAuth();
  const { clearOnboardingData } = useOnboardingData();

  // Check if current route needs protection
  const needsProtection = location.pathname.startsWith("/digital-onboarding/");

  useEffect(() => {
    if (!needsProtection) {
      return;
    }

    // Check if page was refreshed - if on protected route but no token, show modal
    if (!token) {
      setShowModal(true);
      return;
    }

    // Handle browser back button
    const handlePopState = (event) => {
      event.preventDefault();
      setShowModal(true);
      // Push current state back to prevent navigation
      window.history.pushState(null, "", window.location.pathname);
    };

    // Add initial history state to catch back button
    window.history.pushState(null, "", window.location.pathname);

    // Add event listener for back button
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [needsProtection, token, location.pathname]);

  const handleOkClick = () => {
    // Clear auth and onboarding context before redirecting
    clearToken();
    clearOnboardingData();

    setShowModal(false);
    navigate("/digital-onboarding");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <Modal
      title="You've Been Logged Out"
      open={showModal}
      onOk={handleOkClick}
      onCancel={handleCancel}
      okText="OK"
      cancelButtonProps={{ style: { display: "none" } }}
      closable={false}
      maskClosable={false}
    >
      <p>
        For security reasons, you have been logged out of the Registration
        Application. This happens when you refresh the page or use the back
        button on the browser.
      </p>
    </Modal>
  );
};

export default NavigationProtection;
