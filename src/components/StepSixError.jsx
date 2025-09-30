import React from "react";
import { Button } from "antd";
import { useLanguage } from "../hooks/useLanguage";

const StepSixError = ({ data, onRetry, onGoHome }) => {
  const { t } = useLanguage();

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      {/* Error Icon */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <img
          src="/assets/last_step_error.svg"
          alt="Error"
          style={{ width: "80px", height: "80px" }}
        />
      </div>

      <h2
        style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "var(--primary-blue)",
          marginBottom: "32px",
          textAlign: "center",
          lineHeight: "1.4",
        }}
      >
        We encountered errors in processing your registration. Please try again.
      </h2>

      {/* SIM Registration Details */}
      <div
        style={{
          textAlign: "left",
          marginBottom: "32px",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
          padding: "24px 0",
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
          SIM Registration Details
        </h4>

        <div style={{ marginBottom: "12px" }}>
          <div
            style={{
              fontSize: "13px",
              color: "var(--text-gray)",
              marginBottom: "4px",
            }}
          >
            Mobile phone number
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
            Date of SIM Registration
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
          marginBottom: "32px",
        }}
      >
        <Button
          type="primary"
          size="large"
          block
          onClick={onRetry}
          style={{
            height: "48px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "8px",
          }}
        >
          {t("finalScreen.primaryErrorBtnLabel")}
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
          {t("finalScreen.secondaryErrorBtnLabel")}
        </Button>
      </div>

      {/* Help Section */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "24px",
          borderTop: "1px solid var(--border-color)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <img
            src="/assets/messanger.svg"
            alt="Messenger"
            style={{ width: "24px", height: "24px" }}
          />
          <span
            style={{
              fontSize: "15px",
              color: "var(--black)",
              fontWeight: "500",
            }}
          >
            Need help? Contact us on Messenger
          </span>
        </div>

        <p
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            margin: 0,
          }}
        >
          Or register using an alternative{" "}
          <a
            href="#"
            style={{
              color: "var(--primary-link-color)",
              textDecoration: "underline",
              fontWeight: "500",
            }}
          >
            link.
          </a>
        </p>
      </div>
    </div>
  );
};

export default StepSixError;
