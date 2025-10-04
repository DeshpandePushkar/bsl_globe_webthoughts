import { useState } from "react";
import { Button, Typography, Row, Col, Collapse, Modal } from "antd";
import { useLanguage } from "../../hooks/useLanguage";

const { Title } = Typography;

const SelfieInstructionsModal = ({ onContinue }) => {
  const { t } = useLanguage();
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleModalOk = () => {
    setIsModalVisible(false);
    onContinue();
  };

  const instructionsContent = (
    <div className="steps-container">
      <div className="steps-list">
        <span className="step-three-page-two-sub-header">
          <span>{t("stepThree.pointOneAccordionDesc")}</span>
        </span>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/4.svg" width={40} alt="Step 4" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.selfieInst1Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/5.svg" width={40} alt="Step 5" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.selfieInst2Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/6.svg" width={40} alt="Step 6" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.selfieInst3Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/7.svg" width={40} alt="Step 7" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.selfieInst4Label")}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        title={
          <span className="text-center-primary">
            {t("stepThree.selfieInstModalInfoIconText")}
          </span>
        }
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
        width="90%"
        style={{ maxWidth: "900px" }}
        footer={[
          <Button
            key="ok"
            type="primary"
            size="large"
            style={{ width: "60%", display: "flex", justifySelf: "center" }}
            onClick={handleModalOk}
            block
          >
            {t("stepThree.selfieInstModalPrimarybtnLabel")}
          </Button>,
        ]}
      >
        {instructionsContent}
      </Modal>
    </>
  );
};

export default SelfieInstructionsModal;
