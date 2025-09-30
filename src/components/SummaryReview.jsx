import React, { useState } from "react";
import { Button, Image } from "antd";
import { DownOutlined, UpOutlined, EditOutlined } from "@ant-design/icons";
import { useLanguage } from "../hooks/useLanguage";

const SummaryReview = ({ data, onContinue }) => {
  const { t } = useLanguage();
  const [idDetailsExpanded, setIdDetailsExpanded] = useState(false);

  const handleEditClick = (section) => {
    console.log(`Edit clicked for: ${section}`);
  };

  const InfoRow = ({ label, value }) => (
    <div style={{ marginBottom: "12px" }}>
      <div
        style={{
          fontSize: "13px",
          color: "var(--text-gray)",
          marginBottom: "4px",
        }}
      >
        {label}
      </div>
      <div
        style={{ fontSize: "15px", color: "var(--black)", fontWeight: "500" }}
      >
        {value}
      </div>
    </div>
  );

  const SectionHeader = ({ icon, title, showEdit = false, editSection }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
        marginTop: "24px",
      }}
    >
      <h3
        style={{
          fontSize: "16px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: 0,
          color: "var(--primary-blue)",
        }}
      >
        <img src={icon} alt="" style={{ width: "24px", height: "24px" }} />
        {title}
      </h3>
      {showEdit && (
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => handleEditClick(editSection)}
          style={{ color: "var(--primary-button)", padding: 0 }}
        >
          {t("stepFive.editButtonLabel")}
        </Button>
      )}
    </div>
  );

  return (
    <div style={{ padding: "20px 0", maxWidth: "800px", margin: "0 auto" }}>
      {/* Header */}

      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "var(--primary-blue)",
          marginBottom: "8px",
        }}
      >
        {t("stepFive.number")} {t("stepFive.mainDesc")}
      </h2>
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <img
          src="/assets/review_summary.png"
          alt="Review"
          style={{ width: "60px", height: "60px", marginBottom: "12px" }}
        />
      </div>

      <p
        style={{
          color: "var(--text-secondary)",
          marginBottom: "24px",
          fontSize: "14px",
        }}
      >
        {t("stepFive.desc")}
      </p>

      {/* Mobile Phone Section */}
      <SectionHeader
        icon="/assets/mobile_phone.png"
        title={t("stepFive.firstContainerHeading")}
      />
      <InfoRow
        label={t("stepFive.firstContainerLabel1")}
        value={data.mobilePhone}
      />

      {/* SIM User Description Section */}
      <SectionHeader
        icon="/assets/sim_user_description.png"
        title={t("stepFive.secondContainerHeading")}
      />
      <p
        style={{
          fontSize: "15px",
          color: "var(--black)",
          margin: "0 0 12px 0",
        }}
      >
        {data.simUserDescription}
      </p>

      {/* Government-Issued ID Section */}
      <SectionHeader
        icon="/assets/govt_id.png"
        title={t("stepFive.thirdContainerHeading")}
      />

      <div style={{ marginBottom: "12px" }}>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-gray)",
            marginBottom: "8px",
          }}
        >
          {data.governmentId.type}
        </p>
        <Image
          src={data.governmentId.imageUrl}
          alt="Government ID"
          style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
          fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
        />
      </div>

      <div
        onClick={() => setIdDetailsExpanded(!idDetailsExpanded)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 0",
          cursor: "pointer",
          color: "var(--primary-button)",
          fontSize: "14px",
          fontWeight: "500",
          userSelect: "none",
        }}
      >
        <span>
          {idDetailsExpanded
            ? t("stepFive.thirdContainerAccordianHideLabel")
            : t("stepFive.thirdContainerAccordianOpenLabel")}
        </span>
        {idDetailsExpanded ? <UpOutlined /> : <DownOutlined />}
      </div>

      {idDetailsExpanded && (
        <div
          style={{
            paddingTop: "16px",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel1")}
            value={data.governmentId.scanDetails.fullName}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel2")}
            value={data.governmentId.scanDetails.dateOfBirth}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel3")}
            value={data.governmentId.scanDetails.documentNumber}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel4")}
            value={data.governmentId.scanDetails.dateOfExpiry}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel5")}
            value={data.governmentId.scanDetails.dateOfIssue}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel6")}
            value={data.governmentId.scanDetails.address}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel7")}
            value={data.governmentId.scanDetails.restrictions}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel8")}
            value={data.governmentId.scanDetails.securityNumber}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel9")}
            value={data.governmentId.scanDetails.height}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel10")}
            value={data.governmentId.scanDetails.eyeColor}
          />
          <InfoRow
            label={t("stepFive.thirdContainerAccordianLabel11")}
            value={data.governmentId.scanDetails.endorsements}
          />
        </div>
      )}

      {/* Personal Details Section */}
      <SectionHeader
        icon="/assets/personal_details.png"
        title={t("stepFive.forthContainerHeading")}
        showEdit={true}
        editSection="personal-details"
      />
      <InfoRow
        label={t("stepFive.forthContainerLabel1")}
        value={data.personalDetails.fullName}
      />
      <InfoRow
        label={t("stepFive.forthContainerLabel2")}
        value={data.personalDetails.birthdate}
      />
      <InfoRow
        label={t("stepFive.forthContainerLabel3")}
        value={data.personalDetails.gender}
      />

      {/* Local Residence Section */}
      <SectionHeader
        icon="/assets/location.png"
        title={t("stepFive.fifthContainerHeading")}
      />
      <InfoRow
        label={t("stepFive.fifthContainerLabel1")}
        value={data.localResidence.unitNumber}
      />
      <InfoRow
        label={t("stepFive.fifthContainerLabel2")}
        value={data.localResidence.street}
      />
      <InfoRow
        label={t("stepFive.fifthContainerLabel3")}
        value={data.localResidence.village}
      />
      <InfoRow
        label={t("stepFive.fifthContainerLabel4")}
        value={data.localResidence.province}
      />
      <InfoRow
        label={t("stepFive.fifthContainerLabel5")}
        value={data.localResidence.city}
      />
      <InfoRow
        label={t("stepFive.fifthContainerLabel6")}
        value={data.localResidence.barangay}
      />
      <InfoRow
        label={t("stepFive.fifthContainerLabel7")}
        value={data.localResidence.zipCode}
      />

      {/* Company Details Section (if applicable) */}
      {data.companyDetails && (
        <>
          <SectionHeader
            icon="/assets/location.png"
            title={t("stepFive.sixthContainerHeading")}
          />
          <InfoRow
            label={t("stepFive.sixthContainerLabel1")}
            value={data.companyDetails.secDtiName}
          />
        </>
      )}

      {/* Company Location Section (if applicable) */}
      {data.companyLocation && (
        <>
          <SectionHeader
            icon="/assets/location.png"
            title={t("stepFive.seventhContainerHeading")}
          />
          <InfoRow
            label={t("stepFive.seventhContainerLabel1")}
            value={data.companyLocation.unitNumber}
          />
          <InfoRow
            label={t("stepFive.seventhContainerLabel2")}
            value={data.companyLocation.street}
          />
          <InfoRow
            label={t("stepFive.seventhContainerLabel3")}
            value={data.companyLocation.village}
          />
          <InfoRow
            label={t("stepFive.seventhContainerLabel4")}
            value={data.companyLocation.province}
          />
          <InfoRow
            label={t("stepFive.seventhContainerLabel5")}
            value={data.companyLocation.city}
          />
          <InfoRow
            label={t("stepFive.seventhContainerLabel6")}
            value={data.companyLocation.barangay}
          />
          <InfoRow
            label={t("stepFive.seventhContainerLabel7")}
            value={data.companyLocation.zipCode}
          />
        </>
      )}

      {/* Supporting Documents Section (if applicable) */}
      {data.supportingDocuments && (
        <>
          <SectionHeader
            icon="/assets/supproting_doc.png"
            title={t("stepFive.eighthContainerHeading")}
          />
          <InfoRow
            label={t("stepFive.eighthContainerLabel1")}
            value={data.supportingDocuments.travelVisa}
          />
        </>
      )}

      {/* Continue Button */}
      <div style={{ marginTop: "32px", marginBottom: "24px" }}>
        <Button
          type="primary"
          size="large"
          block
          onClick={onContinue}
          className="primary-button"
          style={{
            height: "48px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "8px",
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SummaryReview;
