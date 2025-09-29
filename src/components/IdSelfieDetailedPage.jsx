import React, { useState } from "react";
import { Button, Typography, List } from "antd";
import ScanningTipsModal from "./ScanningTipsModal";
import {
  CameraOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  BulbOutlined,
  FontSizeOutlined,
  SunOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from "react-router-dom";
import { useSimRegistration } from "../context/SimRegistrationContext";

const { Title, Text, Paragraph } = Typography;

const IdSelfieDetailedPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { currentStep, setCurrentStep } = useSimRegistration();
  const [guidelinesExpanded, setGuidelinesExpanded] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleScanWithCamera = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setCurrentStep(4);
    navigate("/digital-onboarding/camera-scan");
  };

  const guidelines = [
    {
      icon: (
        <CloseCircleOutlined style={{ color: "#ff4d4f", fontSize: "18px" }} />
      ),
      text: "No fingers or obstructions on document",
    },
    {
      icon: (
        <CloseCircleOutlined style={{ color: "#ff4d4f", fontSize: "18px" }} />
      ),
      text: "No scratches, smudges or dust",
    },
    {
      icon: (
        <CloseCircleOutlined style={{ color: "#ff4d4f", fontSize: "18px" }} />
      ),
      text: "No glare, reflections or shadows",
    },
    {
      icon: (
        <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "18px" }} />
      ),
      text: "Well-lit subject",
    },
    {
      icon: (
        <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "18px" }} />
      ),
      text: "Clear and legible text",
    },
    {
      icon: (
        <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "18px" }} />
      ),
      text: "Good contrast and brightness",
    },
    {
      icon: (
        <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "18px" }} />
      ),
      text: "Sharp focus, crisp details",
    },
    {
      icon: (
        <InfoCircleOutlined style={{ color: "#1890ff", fontSize: "18px" }} />
      ),
      text: "Please do not refresh the page, click the back button, or close the window during registration.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "16px",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Text
            style={{
              color: "#666",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "1px",
              marginBottom: "8px",
              display: "block",
            }}
          >
            REGISTER YOUR SIM
          </Text>

          <Title
            level={2}
            style={{
              color: "#1A458B",
              margin: "0 0 8px 0",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            3. Provide your ID and selfie
          </Title>

          {/* Icon below title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#1B458B",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    border: "1px solid white",
                    borderRadius: "50%",
                    marginBottom: "1px",
                  }}
                ></div>
                <div
                  style={{
                    width: "6px",
                    height: "1px",
                    backgroundColor: "white",
                    borderRadius: "1px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ marginBottom: "24px" }}>
          {/* Instruction Block */}
          <div style={{ marginBottom: "16px" }}>
            <Title
              level={4}
              style={{
                color: "#1A458B",
                margin: "0 0 8px 0",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Prepare a valid government-issued ID.
            </Title>
            <Paragraph
              style={{
                margin: "0 0 12px 0",
                color: "#666",
                fontSize: "14px",
                lineHeight: "1.4",
              }}
            >
              Make sure that the photo and other information are clearly
              visible.
            </Paragraph>

            {/* Document Guidelines Link */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#1B458B",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "12px",
              }}
              onClick={() => setGuidelinesExpanded(!guidelinesExpanded)}
            >
              <span>Document guidelines</span>
              <UpOutlined
                style={{
                  marginLeft: "4px",
                  fontSize: "12px",
                  transform: guidelinesExpanded
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </div>

            {/* Document Guidelines Section */}
            {guidelinesExpanded && (
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "6px",
                  padding: "12px",
                  border: "1px solid #e9ecef",
                }}
              >
                <List
                  dataSource={guidelines}
                  renderItem={(item, index) => (
                    <List.Item
                      style={{
                        padding: "6px 0",
                        border: "none",
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          marginRight: "10px",
                          marginTop: "1px",
                          minWidth: "18px",
                        }}
                      >
                        {item.icon}
                      </div>
                      <Text
                        style={{
                          color: "#666",
                          fontSize: "14px",
                          lineHeight: "1.4",
                          flex: 1,
                        }}
                      >
                        {item.text}
                      </Text>
                    </List.Item>
                  )}
                />
              </div>
            )}
          </div>
        </div>

        {/* Scan with Camera Button */}
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            size="large"
            onClick={handleScanWithCamera}
            style={{
              backgroundColor: "#2274E5",
              borderColor: "#2274E5",
              borderRadius: "8px",
              height: "48px",
              fontSize: "16px",
              fontWeight: "600",
              width: "100%",
              boxShadow: "0 2px 8px rgba(34, 116, 229, 0.3)",
            }}
            icon={<CameraOutlined style={{ fontSize: "16px" }} />}
          >
            Scan with Camera
          </Button>
        </div>
      </div>

      {/* Scanning Tips Modal */}
      <ScanningTipsModal visible={isModalVisible} onClose={handleModalClose} />
    </div>
  );
};

export default IdSelfieDetailedPage;
