import React, { useState } from "react";
import { Modal, Button, Checkbox } from "antd";
import { Trans } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";

const ConfirmationModal = ({ visible, onClose, onConfirm }) => {
  const { t } = useLanguage();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleConfirmClick = () => {
    if (isChecked) {
      onConfirm();
    }
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={500}
      className="confirmation-modal"
    >
      <div style={{ padding: "24px" }}>
        {/* Modal Heading */}
        <h2 className="text-primary text-center" style={{ fontSize: "1.2rem" }}>
          {t("stepFive.confirmationModalHeading")}
        </h2>
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            fontWeight: "500",
          }}
        >
          {/* White Content Box */}
          <div>
            {/* Modal Body with clickable links */}
            <div
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
                textAlign: "justify",
                marginBottom: "16px",
              }}
            >
              <Trans
                i18nKey="stepFive.confirmationModalBody"
                components={{
                  1: (
                    <a
                      href="https://www.officialgazette.gov.ph/downloads/2022/10oct/20221010-RA-11934-FRM.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--primary-link-color)",
                        textDecoration: "underline",
                        fontWeight: "500",
                      }}
                    >
                      SIM Registration Act
                    </a>
                  ),
                  3: (
                    <a
                      href="https://www.globe.com.ph/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--primary-link-color)",
                        textDecoration: "underline",
                        fontWeight: "500",
                      }}
                    >
                      Privacy Policy of Globe
                    </a>
                  ),
                }}
              />
            </div>
          </div>
        </Checkbox>

        {/* Modal Footer Buttons */}
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
            disabled={!isChecked}
            onClick={handleConfirmClick}
            style={{
              height: "48px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "8px",
              backgroundColor: isChecked
                ? "var(--primary-button)"
                : "var(--primary-button-disabled)",
              border: "none",
            }}
          >
            {t("stepFive.confirmationModalPrimaryBtn")}
          </Button>

          <Button
            size="large"
            block
            onClick={onClose}
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
            {t("stepFive.confirmationModalSecondaryBtn")}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
