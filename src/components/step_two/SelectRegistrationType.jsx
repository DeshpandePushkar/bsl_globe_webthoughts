import { useState } from "react";
import { Button, Typography, Row, Col, Select } from "antd";
import { useLanguage } from "../../hooks/useLanguage";

const { Title, Text } = Typography;

const SelectRegistrationType = ({ initialType = "", onSubmit }) => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState(initialType);

  const isButtonEnabled = selectedType !== "" && selectedType !== null;

  const handleSubmit = () => {
    if (isButtonEnabled) {
      onSubmit(selectedType);
    }
  };

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
          {t("stepTwo.number")}
          {t("stepTwo.mainDesc")}
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
          {t("stepTwo.desc")}
        </Title>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <Text className="step-one-mobileLabel-container">
          {t("stepTwo.inputLabel")} <span style={{ color: "red" }}>*</span>
        </Text>

        <Row>
          <Select
            style={{
              width: "100%",
            }}
            placeholder={t("stepTwo.dropdownLabel")}
            size="large"
            value={selectedType || undefined}
            onChange={(value) => setSelectedType(value)}
            options={[
              {
                typeKey: "Sim Owner",
                value: "I am a Filipino SIM owner",
              },
              {
                typeKey: "Parent or Legal guardian",
                value:
                  "I am a Parent or Legal Guardian registering the SIM of a minor",
              },
              {
                typeKey: "Auth Signatory or representative",
                value:
                  "I am an Authorized Representative of the business registering the SIM",
              },
              {
                typeKey: "Foreign Tourist",
                value: "Foreigner - I am a Foreign Tourist",
              },
              {
                typeKey: "Foreigner Working Resident",
                value: "Foreigner - I am a Foreign Working Resident",
              },
              {
                typeKey: "Foreigner Student Resident",
                value: "Foreigner - I am a Foreign Student Resident",
              },
              {
                typeKey: "Foreigner Resident",
                value: "Foreigner - I am a Foreign Resident",
              },
              {
                typeKey: "Foreigner Persona of concern",
                value: "Foreigner - I am a Foreign Person of Concern",
              },
            ]}
          />
        </Row>
      </div>

      <Row>
        <Col span={24}>
          <Button
            type="primary"
            block
            disabled={!isButtonEnabled}
            size="large"
            onClick={handleSubmit}
          >
            {t("stepTwo.primaryBtn")}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SelectRegistrationType;
