import { Button, Divider, Typography } from "antd";
import SmileLiveness from "../innovatrics/SmileLiveness";
import { useLanguage } from "../../hooks/useLanguage";
import { useState } from "react";

const { Title } = Typography;

const SelfieCapture = ({ onContinue }) => {
  const { t } = useLanguage();
  const [showDocument, setShowDocument] = useState(false);
  const [scanDocumentUrl, setScanDocumentUrl] = useState(false);

  const handleSelfieComplete = (imageData, content) => {
    console.log("Selfie imageData:", imageData[0].image);
    console.log("Selfie content:", content);
    const objectURL = URL.createObjectURL(imageData[0].image);
    setScanDocumentUrl(objectURL);
    setShowDocument(true);
  };

  return (
    <div className="main-steps-container">
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
      <div style={{ textAlign: "center" }}>
        <img
          src="/assets/registeryoursimicon.png"
          width={40}
          alt="Register SIM"
        />
      </div>
      <Title level={4} className="text-center-primary">
        {showDocument
          ? t("stepThree.pointThreeResult")
          : t("stepThree.pointThreeMainDesc")}
      </Title>

      <div>
        {showDocument ? (
          <>
            <img
              src={scanDocumentUrl}
              style={{ objectFit: "cover" }}
              width="100%"
            />
            <Divider />
            <span
              className="text-gray text-center"
              style={{ paddingBottom: 20 }}
            >
              {t("stepThree.pointThreeSelfieText")}
            </span>
            <div className="buttons-container">
              <Button type="primary" size="large" block onClick={onContinue}>
                {t("infoPage.primaryBtn")}
              </Button>
            </div>
          </>
        ) : (
          <SmileLiveness onPhotoTaken={handleSelfieComplete} />
        )}
      </div>
    </div>
  );
};

export default SelfieCapture;
