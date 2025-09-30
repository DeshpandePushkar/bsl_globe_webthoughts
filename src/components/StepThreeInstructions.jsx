// import { Button, Typography, Row, Col, Collapse } from "antd";
// import { useLanguage } from "../hooks/useLanguage";

// const { Title } = Typography;

// const StepThreeInstructions = ({ onContinue }) => {
//   const { t } = useLanguage();

//   return (
//     <>
//       <div style={{ textAlign: "center", marginBottom: "22px" }}>
//         <Title
//           level={5}
//           style={{ color: "#d3d3d3", fontSize: 13, letterSpacing: 5 }}
//         >
//           {t("verification.subtitle")}
//         </Title>

//         <Title
//           level={4}
//           style={{
//             color: "#1B458B",
//             marginBottom: 0,
//             fontSize: "1.2rem",
//           }}
//         >
//           {t("stepThree.number")} {t("stepThree.mainDesc")}
//         </Title>
//       </div>

//       <div style={{ textAlign: "center", marginBottom: "32px" }}>
//         <img
//           src="/assets/registeryoursimicon.png"
//           width={40}
//           alt="Register SIM"
//         />
//       </div>

//       <Title
//         level={4}
//         style={{
//           color: "#1B458B",
//           marginBottom: 0,
//           fontSize: "1.2rem",
//         }}
//       >
//         {t("stepThree.pointOneMainDesc")}
//       </Title>

//       <Collapse
//         defaultActiveKey={["1"]}
//         className="step-three-page-tow-collapse"
//         ghost
//         items={[
//           {
//             key: "1",
//             label: `${t("stepThree.pointOneAccordionLabel")}`,
//             children: (
//               <div className="steps-container">
//                 <div className="steps-list">
//                   <span className="step-three-page-two-sub-header">
//                     <span>{t("stepThree.pointOneAccordionDesc")}</span>
//                   </span>
//                   <div className="step-id-selfie">
//                     <img src="/assets/step3-2/1.svg" width={40} alt="Step 1" />
//                     <div className="step-item-id-selfie">
//                       <span className="step-sub-item_id_selfie">
//                         <span>{t("stepThree.documentInst1Label")}</span>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="step-id-selfie">
//                     <img src="/assets/step3-2/2.svg" width={40} alt="Step 2" />
//                     <div className="step-item-id-selfie">
//                       <span className="step-sub-item_id_selfie">
//                         <span>{t("stepThree.documentInst2Label")}</span>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="step-id-selfie">
//                     <img src="/assets/step3-2/3.svg" width={40} alt="Step 3" />
//                     <div className="step-item-id-selfie">
//                       <span className="step-sub-item_id_selfie">
//                         <span>{t("stepThree.documentInst3Label")}</span>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="step-id-selfie">
//                     <img src="/assets/step3-2/4.svg" width={40} alt="Step 4" />
//                     <div className="step-item-id-selfie">
//                       <span className="step-sub-item_id_selfie">
//                         <span>{t("stepThree.documentInst4Label")}</span>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="step-id-selfie">
//                     <img src="/assets/step3-2/5.svg" width={40} alt="Step 5" />
//                     <div className="step-item-id-selfie">
//                       <span className="step-sub-item_id_selfie">
//                         <span>{t("stepThree.documentInst5Label")}</span>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="step-id-selfie">
//                     <img src="/assets/step3-2/6.svg" width={40} alt="Step 6" />
//                     <div className="step-item-id-selfie">
//                       <span className="step-sub-item_id_selfie">
//                         <span>{t("stepThree.documentInst6Label")}</span>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="step-id-selfie">
//                     <img src="/assets/step3-2/7.svg" width={40} alt="Step 7" />
//                     <div className="step-item-id-selfie">
//                       <span className="step-sub-item_id_selfie">
//                         <span>{t("stepThree.documentInst7Label")}</span>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="step-id-selfie">
//                     <img src="/assets/step3-2/8.svg" width={40} alt="Step 8" />
//                     <div className="step-item-id-selfie">
//                       <span className="step-sub-item_id_selfie">
//                         <span>{t("stepThree.documentInst8Label")}</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ),
//           },
//         ]}
//       />

//       <Row>
//         <Col span={24}>
//           <Button type="primary" block size="large" onClick={onContinue}>
//             {t("stepThree.pointOneBtnLabel")}
//           </Button>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default StepThreeInstructions;

import { useState } from "react";
import { Button, Typography, Row, Col, Collapse, Modal } from "antd";
import { useLanguage } from "../hooks/useLanguage";

const { Title } = Typography;

const StepThreeInstructions = ({ onContinue }) => {
  const { t } = useLanguage();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleContinueClick = () => {
    setIsModalVisible(true);
  };

  // const handleModalOk = () => {
  //   setIsModalVisible(false);
  //   // Do nothing on button click for now
  // };

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
          <img src="/assets/step3-2/1.svg" width={40} alt="Step 1" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.documentInst1Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/2.svg" width={40} alt="Step 2" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.documentInst2Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/3.svg" width={40} alt="Step 3" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.documentInst3Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/4.svg" width={40} alt="Step 4" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.documentInst4Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/5.svg" width={40} alt="Step 5" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.documentInst5Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/6.svg" width={40} alt="Step 6" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.documentInst6Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/7.svg" width={40} alt="Step 7" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.documentInst7Label")}</span>
            </span>
          </div>
        </div>

        <div className="step-id-selfie">
          <img src="/assets/step3-2/8.svg" width={40} alt="Step 8" />
          <div className="step-item-id-selfie">
            <span className="step-sub-item_id_selfie">
              <span>{t("stepThree.documentInst8Label")}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
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
          {t("stepThree.number")} {t("stepThree.mainDesc")}
        </Title>
      </div>

      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <img
          src="/assets/registeryoursimicon.png"
          width={40}
          alt="Register SIM"
        />
      </div>

      <Title
        level={4}
        style={{
          color: "#1B458B",
          marginBottom: 0,
          fontSize: "1.2rem",
        }}
      >
        {t("stepThree.pointOneMainDesc")}
      </Title>

      <Collapse
        defaultActiveKey={["1"]}
        className="step-three-page-tow-collapse"
        ghost
        items={[
          {
            key: "1",
            label: `${t("stepThree.pointOneAccordionLabel")}`,
            children: instructionsContent,
          },
        ]}
      />

      <Row>
        <Col span={24}>
          <Button
            type="primary"
            block
            size="large"
            onClick={handleContinueClick}
          >
            {t("stepThree.pointOneBtnLabel")}
          </Button>
        </Col>
      </Row>

      <Modal
        title={<span className="text-center-primary">{t("stepThree.documentInstModalInfoIconText")}</span>}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
        width="90%"
        style={{ maxWidth: "900px" }}
        footer={[
          <Button key="ok" type="primary" size="large" style={{ width: "60%", display: "flex", justifySelf: "center" }} onClick={handleModalOk} block>
            OK
          </Button>
        ]}
      >
        {instructionsContent}
      </Modal>
    </>
  );
};

export default StepThreeInstructions;
