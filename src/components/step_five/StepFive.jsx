import React, { useState } from "react";
import SummaryReview from "./SummaryReview";
import ConfirmationModal from "./ConfirmationModal";
import { Typography } from "antd";
import { useLanguage } from "../../hooks/useLanguage";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const StepFive = () => {
  const { t } = useLanguage();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  // Mock data for all sections
  const mockData = {
    mobilePhone: "+63 912 345 6789",
    simUserDescription: "I am a Filipino SIM owner",
    governmentId: {
      type: "Driver's Licence, United States of America",
      imageUrl: "https://picsum.photos/seed/picsum/300/200", // Placeholder - you'll replace
      scanDetails: {
        fullName: "Juan Miguel Santos Dela Cruz",
        dateOfBirth: "1993/05/10",
        documentNumber: "D1234567",
        dateOfExpiry: "2023/01/15",
        dateOfIssue: "2028/01/15",
        address: "123 Main Street, Makati City, Metro Manila",
        restrictions: "None",
        securityNumber: "XXX-XX-1234",
        height: "5'8\"",
        eyeColor: "Brown",
        endorsements: "None",
      },
    },
    personalDetails: {
      fullName: "Juan Miguel Santos Dela Cruz",
      birthdate: "1993/05/10",
      gender: "Male",
      suffix: "Jr.",
    },
    localResidence: {
      unitNumber: "Unit 456, Green Heights Condominium",
      street: "Ayala Avenue",
      village: "Bel-Air Village",
      province: "Metro Manila",
      city: "Makati City",
      barangay: "Bel-Air",
      zipCode: "1209",
    },
    companyDetails: {
      secDtiName: "ABC Corporation Philippines Inc.",
    },
    companyLocation: {
      unitNumber: "Unit 789, Commerce Tower",
      street: "Paseo de Roxas",
      village: "Salcedo Village",
      province: "Metro Manila",
      city: "Makati City",
      barangay: "Bel-Air",
      zipCode: "1227",
    },
    supportingDocuments: {
      travelVisa: "travel-visa.pdf",
    },
  };

  const handleContinue = () => {
    setIsModalVisible(true);
  };

  const handleEdit = (section) => {
    console.log(`Edit clicked for: ${section}`);
    if (section == "supporting-docs") {
      navigate("/digital-onboarding/step-four");
    } else if (section == "company-details") {
      navigate("/digital-onboarding/step-four");
    } else if (section == "personal-details") {
      navigate("/digital-onboarding/step-four");
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    console.log("button clicked");
    setIsModalVisible(false);
    navigate("/digital-onboarding/step-six");
    // Modal stays open - you'll add navigation logic later
  };

  return (
    <div className="main-steps-container">
      <div style={{ textAlign: "center" }}>
        <Title
          level={5}
          style={{ color: "#d3d3d3", fontSize: 13, letterSpacing: 5 }}
        >
          {t("verification.subtitle")}
        </Title>

        <Title level={4} className="text-center-primary">
          {t("stepFive.number")} {t("stepFive.mainDesc")}
        </Title>
        <div className="text-center">
          <img src="/assets/review_summary.png" width={60} alt="Register SIM" />
        </div>
        <Title level={4} className="text-center-primary">
          {t("stepFive.desc")}
        </Title>
      </div>
      <SummaryReview
        data={mockData}
        onContinue={handleContinue}
        handleEdit={handleEdit}
      />

      <ConfirmationModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default StepFive;
