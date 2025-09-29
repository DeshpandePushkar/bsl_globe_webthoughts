import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Checkbox, Typography, Row, Col } from "antd";
import { useLanguage } from "../hooks/useLanguage";

const { Title, Paragraph } = Typography;

const OTPVerificationPage = () => {
  const { t } = useLanguage();
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(180 * 1000);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);
  const endTimeRef = useRef(0);

  const inputRefs = useRef([]);

  const updateTime = () => {
    const now = Date.now();
    const remaining = Math.max(0, endTimeRef.current - now);

    setTimeRemaining(remaining);

    if (remaining === 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setIsResendEnabled(true);
    }
  };

  useEffect(() => {
    if (isRunning) {
      endTimeRef.current = Date.now() + timeRemaining;
      intervalRef.current = setInterval(updateTime, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeRemaining]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const resendClicked = () => {
    setIsRunning(true);
    setTimeRemaining(180 * 1000);
    setIsResendEnabled(false);
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.slice(-1);
    setOtpValues(newOtpValues);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isFormValid = otpValues.every((value) => value !== "");

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "22px" }}>
        <Title
          level={5}
          style={{ color: "#d3d3d3", fontSize: 13, letterSpacing: 5 }}
        >
          {t("verification.subtitle")}
        </Title>

        <Title
          level={4}
          style={{
            color: "#1B458B",
            marginBottom: 0,
            fontSize: "1.2rem",
          }}
        >
          {t("verification.title")}
        </Title>
      </div>

      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <img src="/assets/otp.png" width={60} />

        <Title
          level={4}
          style={{
            color: "#1B458B",
            marginBottom: 0,
            fontSize: "1.2rem",
          }}
        >
          Enter the One-Time PIN we sent to 639176881387
        </Title>

        <Paragraph className="step-one-hpwNote-container">
          If you didn't receive a code, press Resend PIN
        </Paragraph>
      </div>

      {/* Custom OTP Input */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {otpValues.map((value, index) => (
          <React.Fragment key={index}>
            <div style={{ position: "relative" }}>
              <Input
                ref={(el) => (inputRefs.current[index] = el)}
                autoComplete="off"
                aria-label={`Please enter OTP character ${index + 1}`}
                type="tel"
                inputMode="numeric"
                value={value}
                onChange={(e) =>
                  handleOtpChange(e.target.value, index, inputRefs)
                }
                onKeyDown={(e) => handleKeyDown(e, index, inputRefs)}
                maxLength={1}
                style={{
                  height: "auto",
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#000000",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "1px solid #8c8c8c",
                  outline: "none",
                  borderRadius: "0",
                }}
                className="step-one-otp-input"
              />
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Timer with updated logic */}
      <div style={{ marginBottom: "40px" }}>
        <span
          style={{
            color: "#6c757d",
            fontSize: "14px",
          }}
        >
          Code expires in:{" "}
          <span style={{ fontWeight: "600" }}>{formatTime(timeRemaining)}</span>
        </span>
      </div>

      <div className="buttons-container">
        <Button type="primary" block disabled={!isFormValid}>
          {t("landing.buttons.continue")}
        </Button>

        <Button
          type="default"
          block
          disabled={!isResendEnabled}
          onClick={resendClicked}
        >
          Resend PIN
        </Button>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
