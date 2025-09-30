import React, { useState } from "react";
import { Button, message, Typography } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useLanguage } from "../hooks/useLanguage";

const { Title } = Typography;

const Success = ({ data, onRegisterAnother, onGoHome }) => {
  const { t } = useLanguage();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.referenceCode);
      message.success(t("finalScreen.copyToastHeading"));
    } catch (err) {
      console.error("Failed to copy:", err);
      message.error("Failed to copy reference code");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Title
          level={5}
          style={{ color: "#d3d3d3", fontSize: 13, letterSpacing: 5 }}
        >
          {t("verification.subtitle")}
        </Title>
      </div>
      <div
        style={{
          borderRadius: "16px",
          padding: "40px 24px",
          backgroundColor: "var(--white)",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <img
            src="/assets/success.png"
            alt="Success"
            style={{ width: 60 }}
          />
        </div>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "var(--primary-blue)",
            marginBottom: "12px",
          }}
        >
          {t("finalScreen.iconLabel")}
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            marginBottom: "32px",
            lineHeight: "1.6",
            maxWidth: "450px",
            margin: "0 auto 32px",
          }}
        >
          {t("finalScreen.subDesc")}
        </p>

        {/* Reference Code Section */}
        <div style={{ marginBottom: "32px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "var(--primary-blue)",
              marginBottom: "16px",
            }}
          >
            {t("finalScreen.heading")}
          </h3>

          {/* Reference Code with Copy Button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "var(--primary-blue)",
                letterSpacing: "1px",
              }}
            >
              {data.referenceCode}
            </span>
            <Button
              type="text"
              icon={<CopyOutlined />}
              onClick={handleCopy}
              style={{
                color: "var(--primary-button)",
                padding: "4px 8px",
              }}
            />
          </div>

          <p className="text-primary">
            {t("finalScreen.refCodeDesc")}
          </p>
        </div>

        {/* SIM Registration Details */}
        <div
          style={{
            textAlign: "left",
            borderTop: "1px solid var(--border-color)",
            paddingTop: "24px",
            marginBottom: "24px",
          }}
        >
          <h4
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "var(--primary-blue)",
              marginBottom: "16px",
            }}
          >
            {t("finalScreen.iconLabel")}
          </h4>

          <div style={{ marginBottom: "12px" }}>
            <div className="text-gray" style={{ fontSize: 13 }}>
              {t("finalScreen.mobileNumberLabel")}
            </div>
            <div>
              {data.mobileNumber}
            </div>
          </div>

          <div>
            <div className="text-gray" style={{ fontSize: 13 }}>
              {t("finalScreen.regDateLabel")}
            </div>
            <div>
              {data.registrationDate}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="buttons-container">
          <Button
            type="primary"
            size="large"
            block
            onClick={onRegisterAnother}>
            {t("finalScreen.primaryBtnLabel")}
          </Button>

          <Button block size="large" onClick={onGoHome}>
            {t("finalScreen.secondaryBtnLabel")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
