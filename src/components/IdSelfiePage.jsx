import React from "react";
import { Card, Button, List, Typography, Space, Row, Col } from "antd";
import {
  UserOutlined,
  ScanOutlined,
  CameraOutlined,
  IdcardOutlined,
  FileTextOutlined,
  CarOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  CreditCardOutlined,
  FileImageOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from "react-router-dom";
import { useSimRegistration } from "../context/SimRegistrationContext";

const { Title, Text, Paragraph } = Typography;

const IdSelfiePage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { currentStep, setCurrentStep } = useSimRegistration();

  const handleContinue = () => {
    setCurrentStep(3);
    navigate("/digital-onboarding/id-selfie-detailed");
  };

  const getIconForIdType = (idType) => {
    const iconMap = {
      Passport: <IdcardOutlined />,
      "Driver's License": <CarOutlined />,
      "National ID (Physical only)": <BankOutlined />,
      "Social Security ID (SSS ID)": <SafetyCertificateOutlined />,
      "PRC ID": <FileTextOutlined />,
      "UMID ID": <CreditCardOutlined />,
    };
    return iconMap[idType] || <IdcardOutlined />;
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Text
            style={{
              color: "#d3d3d3",
              fontSize: "small",
              fontWeight: "600",
              letterSpacing: "5px",
              marginBottom: "1.5rem !important",
              display: "block",
              lineHeight: "1.2",
            }}
          >
            {t("idSelfie.subtitle")}
          </Text>

          <Title
            level={2}
            style={{
              color: "#1A458B",
              margin: "0 0 8px 0",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            {t("idSelfie.title")}
          </Title>

          {/* Icon below title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "#1B458B",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  border: "1.5px solid white",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "8px",
                    height: "6px",
                    backgroundColor: "white",
                    borderRadius: "0 0 4px 4px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div style={{ marginBottom: "32px" }}>
          {/* Step A */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "24px",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#62768B",
                fontSize: "24px",
                fontWeight: "bold",
                flexShrink: 0,
                marginTop: "-8px",
              }}
            >
              A
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "#1B458B",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px",
                  }}
                >
                  <UserOutlined style={{ color: "white", fontSize: "14px" }} />
                </div>
                <Text
                  strong
                  style={{
                    color: "#000000",
                    fontSize: "1rem",
                    lineHeight: "1.2",
                    fontWeight: "600",
                    fontFamily: "Roboto-Medium",
                  }}
                >
                  {t("idSelfie.steps.stepA.description")}
                </Text>
              </div>
              <div style={{ margin: "0", padding: "0" }}>
                <Text
                  strong
                  style={{
                    fontSize: ".9em",
                    color: "rgba(var(--bs-secondary-rgb), 1) !important",
                    lineHeight: "1.2",
                    fontFamily: "Roboto-Medium",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  {t("idSelfie.steps.stepA.sampleIds")}
                </Text>
                <ul
                  style={{
                    margin: "0",
                    paddingLeft: "0px",
                    listStyle: "none",
                    fontFamily: "Roboto-Medium",
                    fontSize: ".9em",
                    fontWeight: "600",
                    color: "rgba(var(--bs-secondary-rgb), 1) !important",
                    lineHeight: "1.2",
                  }}
                >
                  {t("idSelfie.steps.stepA.idTypes", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "0",
                        lineHeight: "1.2",
                        display: "flex",
                        alignItems: "flex-start",
                        fontFamily: "Roboto-Medium",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Step B */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "24px",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#62768B",
                fontSize: "24px",
                fontWeight: "bold",
                flexShrink: 0,
                marginTop: "-8px",
              }}
            >
              B
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "#1B458B",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px",
                  }}
                >
                  <FileImageOutlined
                    style={{ color: "white", fontSize: "14px" }}
                  />
                </div>
                <Text
                  strong
                  style={{
                    color: "#000000",
                    fontSize: "1rem",
                    lineHeight: "1.2",
                    fontWeight: "600",
                    fontFamily: "Roboto-Medium",
                  }}
                >
                  {t("idSelfie.steps.stepB.title")}
                </Text>
              </div>
              <Paragraph
                style={{
                  margin: 0,
                  color: "rgba(var(--bs-secondary-rgb), 1) !important",
                  fontSize: ".9em",
                  lineHeight: "1.2",
                  fontFamily: "Roboto-Medium",
                  fontWeight: "600",
                }}
              >
                {t("idSelfie.steps.stepB.description")}
              </Paragraph>
            </div>
          </div>

          {/* Step C */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "24px",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#62768B",
                fontSize: "24px",
                fontWeight: "bold",
                flexShrink: 0,
                marginTop: "-8px",
              }}
            >
              C
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "#1B458B",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px",
                  }}
                >
                  <CameraOutlined
                    style={{ color: "white", fontSize: "14px" }}
                  />
                </div>
                <Text
                  strong
                  style={{
                    color: "#000000",
                    fontSize: "1rem",
                    lineHeight: "1.2",
                    fontWeight: "600",
                    fontFamily: "Roboto-Medium",
                  }}
                >
                  {t("idSelfie.steps.stepC.title")}
                </Text>
              </div>
              <Paragraph
                style={{
                  margin: 0,
                  color: "rgba(var(--bs-secondary-rgb), 1) !important",
                  fontSize: ".9em",
                  lineHeight: "1.2",
                  fontFamily: "Roboto-Medium",
                  fontWeight: "600",
                }}
              >
                {t("idSelfie.steps.stepC.description")}
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <Button
            type="primary"
            size="large"
            onClick={handleContinue}
            style={{
              backgroundColor: "#2274E5",
              borderColor: "#2274E5",
              borderRadius: "8px",
              height: "48px",
              fontSize: "16px",
              fontWeight: "600",
              minWidth: "200px",
              boxShadow: "0 2px 8px rgba(34, 116, 229, 0.3)",
            }}
            block
          >
            {t("idSelfie.continue")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IdSelfiePage;
