import { Button, Typography } from "antd";
import { useLanguage } from "../hooks/useLanguage";

const { Title, Paragraph } = Typography;

const RegisterYourSim = ({ onContinue, onSecondary }) => {
  const { t } = useLanguage();

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "22px" }}>
        <Title
          level={5}
          style={{ color: "#d3d3d3", fontSize: 13, letterSpacing: 5 }}
        >
          {t("verification.subtitle")}
        </Title>
      </div>

      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <img
          src="/assets/registeryoursimicon.png"
          width={60}
          alt="Register SIM"
        />

        <Title
          level={4}
          style={{
            color: "#1B458B",
            marginBottom: 0,
            fontSize: "1.2rem",
          }}
        >
          {t("infoPage.heading")}
        </Title>

        <Paragraph className="step-one-hpwNote-container">
          {t("infoPage.subHeading")}
        </Paragraph>
      </div>

      <div className="steps-container">
        <div className="steps-list">
          <div className="step-item">
            <span className="step-number">1.</span>
            <span>{t("infoPage.pointOne")}</span>
          </div>
          <div className="step-item">
            <span className="step-number">2.</span>
            <span>{t("infoPage.pointTwo")}</span>
          </div>
          <div className="step-item">
            <span className="step-number">3.</span>
            <span>{t("infoPage.pointThree")}</span>
          </div>
          <span
            style={{
              fontSize: "12px",
              color: "#6c757d",
              display: "block",
            }}
          >
            <span>{t("infoPage.pointThreeSubDesc")}</span>
          </span>
          <div style={{ marginLeft: "32px" }}>
            <div
              style={{
                fontSize: "12px",
                color: "#6c757d",
                lineHeight: "1.6",
              }}
            >
              <div style={{ marginBottom: "2px" }}>
                {t("infoPage.pointThreeSubDesc1")}
              </div>
              <div style={{ marginBottom: "2px" }}>
                {t("infoPage.pointThreeSubDesc2")}
              </div>
              <div style={{ marginBottom: "2px" }}>
                {t("infoPage.pointThreeSubDesc3")}
              </div>
              <div style={{ marginBottom: "2px" }}>
                {t("infoPage.pointThreeSubDesc4")}
              </div>
              <div style={{ marginBottom: "2px" }}>
                {t("infoPage.pointThreeSubDesc5")}
              </div>
              <div style={{ marginBottom: "2px" }}>
                {t("infoPage.pointThreeSubDesc7")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="buttons-container">
        <Button type="primary" block onClick={onContinue}>
          {t("infoPage.primaryBtn")}
        </Button>

        <Button type="default" block onClick={onSecondary}>
          {t("infoPage.secondaryBtn")}
        </Button>
      </div>
    </>
  );
};

export default RegisterYourSim;
