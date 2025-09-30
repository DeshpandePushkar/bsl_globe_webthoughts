import React, { useState } from "react";
import { Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useLanguage } from "../hooks/useLanguage";

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
      <div
        style={{
          border: "1px solid var(--border-color)",
          borderRadius: "16px",
          padding: "40px 24px",
          backgroundColor: "var(--white)",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <img
            src="/assets/success.png"
            alt="Success"
            style={{ width: "80px", height: "80px" }}
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
          Your SIM is now registered
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
              marginBottom: "12px",
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

          <p
            style={{
              fontSize: "13px",
              color: "var(--text-gray)",
              lineHeight: "1.5",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
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
            <div
              style={{
                fontSize: "13px",
                color: "var(--text-gray)",
                marginBottom: "4px",
              }}
            >
              {t("finalScreen.mobileNumberLabel")}
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "var(--black)",
                fontWeight: "500",
              }}
            >
              {data.mobileNumber}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "13px",
                color: "var(--text-gray)",
                marginBottom: "4px",
              }}
            >
              {t("finalScreen.regDateLabel")}
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "var(--black)",
                fontWeight: "500",
              }}
            >
              {data.registrationDate}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Button
            type="primary"
            size="large"
            block
            onClick={onRegisterAnother}
            style={{
              height: "48px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "8px",
            }}
          >
            {t("finalScreen.primaryBtnLabel")}
          </Button>

          <Button
            size="large"
            block
            onClick={onGoHome}
            style={{
              height: "48px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "8px",
              backgroundColor: "var(--white)",
              color: "var(--primary-button)",
              border: "1px solid var(--primary-button)",
            }}
          >
            {t("finalScreen.secondaryBtnLabel")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
