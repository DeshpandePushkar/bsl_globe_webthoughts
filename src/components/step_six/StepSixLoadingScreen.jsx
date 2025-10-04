import React from "react";
import { Spin } from "antd";
import { useLanguage } from "../../hooks/useLanguage";

const StepSixLoadingScreen = () => {
  const { t } = useLanguage();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Logo at top */}
      <div style={{ marginBottom: "60px" }}>
        <img
          src="/assets/logo.svg"
          alt="Processing"
          style={{
            width: "80px",
            height: "80px",
            marginBottom: "24px",
          }}
        />
      </div>

      {/* Main heading */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "var(--primary-blue)",
          marginBottom: "16px",
          maxWidth: "500px",
        }}
      >
        We're processing your SIM Registration.
      </h2>

      {/* Subtext */}
      <p
        style={{
          fontSize: "15px",
          color: "var(--text-gray)",
          marginBottom: "8px",
          maxWidth: "500px",
        }}
      >
        This may take several seconds.
      </p>

      <p
        style={{
          fontSize: "15px",
          color: "var(--text-gray)",
          maxWidth: "500px",
          lineHeight: "1.6",
        }}
      >
        To avoid interruptions, stay on this page. Do not quit this app or
        refresh the screen.
      </p>

      {/* Loading spinner */}
      {/* <div style={{ marginTop: "32px" }}>
        <Spin size="large" />
      </div> */}
    </div>
  );
};

export default StepSixLoadingScreen;
