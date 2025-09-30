import React, { useState } from "react";
import SummaryReview from "./SummaryReview";
import ConfirmationModal from "./ConfirmationModal";

const StepFive = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Mock data for all sections
  const mockData = {
    mobilePhone: "+63 912 345 6789",
    simUserDescription: "I am a Filipino SIM owner",
    governmentId: {
      type: "Driver's Licence, United States of America",
      imageUrl: "/path/to/id-image.jpg", // Placeholder - you'll replace
      scanDetails: {
        fullName: "Juan Miguel Santos Dela Cruz",
        dateOfBirth: "January 15, 1990",
        documentNumber: "D1234567",
        dateOfExpiry: "January 15, 2028",
        dateOfIssue: "January 15, 2023",
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
      birthdate: "January 15, 1990",
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

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    console.log("button clicked");
    // Modal stays open - you'll add navigation logic later
  };

  return (
    <div className="step-five-container">
      <SummaryReview data={mockData} onContinue={handleContinue} />

      <ConfirmationModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default StepFive;
