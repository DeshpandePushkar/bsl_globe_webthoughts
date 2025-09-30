import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInformation from "./PersonalInformation";
import CompanyInformation from "./CompanyInformation";
import SupportingDocuments from "./SupportingDocuments";
import { Button, Typography, Row, Col } from "antd";
import { useLanguage } from "../hooks/useLanguage";

const { Title } = Typography;

const StepFour = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Local state for managing screens within this step
  const [currentScreen, setCurrentScreen] = useState("personal");
  const [personalData, setPersonalData] = useState({});
  const [companyData, setCompanyData] = useState({});
  const [documentsData, setDocumentsData] = useState({});

  // Handle continue from personal information screen
  const handlePersonalInfoContinue = (data) => {
    console.log("Personal Information Data:", data);
    setPersonalData(data);
    setCurrentScreen("company");
  };

  // Handle continue from company information screen
  const handleCompanyInfoContinue = (data) => {
    console.log("Company Information Data:", data);
    setCompanyData(data);
    setCurrentScreen("documents");
  };

  // Handle continue from supporting documents screen
  const handleDocumentsContinue = (data) => {
    console.log("Supporting Documents Data:", data);
    setDocumentsData(data);

    // Log all collected data
    console.log("All Step 4 data collected:", {
      personalData,
      companyData,
      documentsData: data,
    });

    // Navigate to next step or do something else
    // navigate("/digital-onboarding/step-five");
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "22px" }}>
        <Title
          level={5}
          style={{ color: "#d3d3d3", fontSize: 13, letterSpacing: 5 }}
        >
          {t("verification.subtitle")}
        </Title>

        <Title
          level={4}
          className="text-center-primary"
        >
          {t("stepFour.number")} {t("stepFour.mainDesc")}
        </Title>
      </div>
      {currentScreen === "personal" && (
        <PersonalInformation onSubmit={handlePersonalInfoContinue} />
      )}

      {currentScreen === "company" && (
        <CompanyInformation onSubmit={handleCompanyInfoContinue} />
      )}

      {currentScreen === "documents" && (
        <SupportingDocuments onSubmit={handleDocumentsContinue} />
      )}
    </div>
  );
};

export default StepFour;
