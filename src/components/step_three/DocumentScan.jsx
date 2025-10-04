import { Button, Divider, Flex, Typography } from "antd";
import DocumentAutoCapture from "../innovatrics/DocumentAutoCapture";
import { useLanguage } from "../../hooks/useLanguage";
import { useState } from "react";

const { Title } = Typography;

const DocumentScan = ({ onContinue }) => {
  const { t } = useLanguage();
  const [showDocument, setShowDocument] = useState(false);
  const [scanDocumentUrl, setScanDocumentUrl] = useState(false);

  const handleDocumentScanComplete = (imageData, content) => {
    console.log("Document imageData:", imageData);
    console.log("Document content:", content);
    const objectURL = URL.createObjectURL(imageData?.image);
    setScanDocumentUrl(objectURL);
    setShowDocument(true);
    // onContinue();
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
        <img src="/assets/step3-3/1.png" width={60} alt="Register SIM" />
      </div>
      <Title level={4} className="text-center-primary">
        {showDocument
          ? t("stepThree.pointTwoMainResult")
          : t("stepThree.pointTwoMainDesc")}
      </Title>
      {showDocument && (
        <span className="text-gray text-center">
          {t("stepThree.pointThreeSelfieText")}
        </span>
      )}
      <div>
        {showDocument ? (
          <>
            <img
              src={scanDocumentUrl}
              style={{ objectFit: "cover" }}
              width="100%"
            />
            <Divider />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 15,
              }}
            >
              <span>{t("stepThree.pointTwoDocumentScanAnalysis")}</span>
              <span className="text-success" style={{ fontSize: 16 }}>
                {t("stepThree.pointThreePassed")}
              </span>
            </div>
            <div className="buttons-container">
              <Button type="primary" size="large" block onClick={onContinue}>
                {t("infoPage.primaryBtn")}
              </Button>
            </div>
          </>
        ) : (
          <DocumentAutoCapture onPhotoTaken={handleDocumentScanComplete} />
        )}
      </div>
    </div>
  );
};

export default DocumentScan;
