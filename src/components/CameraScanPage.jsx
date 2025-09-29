import React, { useState, useRef, useEffect } from "react";
import { Button, Typography } from "antd";
import {
  RotateRightOutlined,
  ThunderboltOutlined,
  InfoCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from "react-router-dom";
import { useSimRegistration } from "../context/SimRegistrationContext";
import DocumentAutoCapture from "./innovatrics/DocumentAutoCapture";

const { Title, Text } = Typography;

const CameraScanPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { setCurrentStep } = useSimRegistration();
  const [isScanning, setIsScanning] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const handlePhotoTaken = async (imageData, content) => {
    console.log("Document captured:", imageData, content);
    setCapturedImage(imageData);
    setIsScanning(false);

    // Store the captured image in context
    // You can add this to your context if needed
    // setCurrentStep(5);
    // navigate('/id-selfie-detailed');
  };

  const handleError = (error) => {
    console.error("Document capture error:", error);
    setIsScanning(false);
  };

  const handleBack = () => {
    navigate("/digital-onboarding/id-selfie-detailed");
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)",
          padding: "20px 16px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Button
            type="text"
            icon={
              <ArrowLeftOutlined style={{ color: "white", fontSize: "20px" }} />
            }
            onClick={handleBack}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
            }}
          />
          <div style={{ flex: 1, textAlign: "center" }}>
            <Text
              style={{
                color: "#ccc",
                fontSize: "12px",
                fontWeight: "500",
                letterSpacing: "1px",
                display: "block",
              }}
            >
              REGISTER YOUR SIM
            </Text>
            <Title
              level={4}
              style={{
                color: "white",
                margin: "4px 0 0 0",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              3. Provide your ID and selfie
            </Title>
          </div>
        </div>

        {/* Instructions */}
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#1890ff",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "8px",
              }}
            >
              <InfoCircleOutlined
                style={{ color: "white", fontSize: "12px" }}
              />
            </div>
            <Text strong style={{ color: "white", fontSize: "16px" }}>
              Scan your document
            </Text>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <InfoCircleOutlined
              style={{ color: "#ccc", fontSize: "14px", marginRight: "6px" }}
            />
            <Text style={{ color: "#ccc", fontSize: "14px" }}>
              Scanning tips
            </Text>
          </div>
        </div>
      </div>

      {/* Innovatrics Document Capture */}
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <DocumentAutoCapture
          onPhotoTaken={handlePhotoTaken}
          onError={handleError}
        />

        {/* Top Instruction Bar */}
        <div
          style={{
            position: "absolute",
            top: "140px",
            left: "16px",
            right: "16px",
            backgroundColor: "rgba(0,0,0,0.7)",
            padding: "12px 16px",
            borderRadius: "8px",
            zIndex: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "14px",
              textAlign: "center",
              display: "block",
            }}
          >
            Place your valid Government issued identity document in the camera
            frame.
          </Text>
        </div>

        {/* Front Side Indicator */}
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              textShadow: "0 1px 3px rgba(0,0,0,0.8)",
            }}
          >
            Front Side
          </Text>
        </div>

        {/* Success Message */}
        {capturedImage && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: "20px",
              borderRadius: "12px",
              zIndex: 10,
              textAlign: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: "18px",
                fontWeight: "600",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Document Captured Successfully!
            </Text>
            <Button
              type="primary"
              onClick={() => {
                setCurrentStep(5);
                navigate("/digital-onboarding/id-selfie-detailed");
              }}
              style={{
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                borderRadius: "8px",
                height: "44px",
                fontSize: "16px",
                fontWeight: "600",
                minWidth: "120px",
              }}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraScanPage;
