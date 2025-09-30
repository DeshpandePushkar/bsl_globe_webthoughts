import { useState, useEffect } from "react";
import { Form, Upload, Button, Collapse, message } from "antd";
import { PaperClipOutlined, DownOutlined } from "@ant-design/icons";
import { useLanguage } from "../hooks/useLanguage";

const { Panel } = Collapse;

const SupportingDocuments = ({ onSubmit }) => {
  const { t } = useLanguage();
  const [form] = Form.useForm();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [documents, setDocuments] = useState({
    addressProof: null,
    departureTicket: null,
  });

  // Detect mobile/desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // File validation
  const beforeUpload = (file) => {
    const isValidType =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/bmp" ||
      file.type === "application/pdf";

    if (!isValidType) {
      message.error(t("stepFour.invalidFileFormat"));
      return false;
    }

    const isValidSize = file.size / 1024 / 1024 < 5;
    if (!isValidSize) {
      message.error(t("stepFour.invalidFileSize"));
      return false;
    }

    return true;
  };

  // Dummy request (prevent auto upload)
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  // Handle file change for Address Proof
  const handleAddressProofChange = (info) => {
    if (info.file.status === "done") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Content = e.target.result.split(",")[1];
        setDocuments((prev) => ({
          ...prev,
          addressProof: {
            name: info.file.name,
            type: "addressProof",
            image: base64Content,
          },
        }));
      };
      reader.readAsDataURL(info.file.originFileObj);
    } else if (info.file.status === "removed") {
      setDocuments((prev) => ({ ...prev, addressProof: null }));
    }
  };

  // Handle file change for Departure Ticket
  const handleDepartureTicketChange = (info) => {
    if (info.file.status === "done") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Content = e.target.result.split(",")[1];
        setDocuments((prev) => ({
          ...prev,
          departureTicket: {
            name: info.file.name,
            type: "departureTicket",
            image: base64Content,
          },
        }));
      };
      reader.readAsDataURL(info.file.originFileObj);
    } else if (info.file.status === "removed") {
      setDocuments((prev) => ({ ...prev, departureTicket: null }));
    }
  };

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Supporting Documents:", documents);
    console.log("Form Values:", values);

    if (onSubmit) {
      onSubmit(documents);
    }
  };

  return (
    <div style={{ padding: "20px 0" }}>
      {!isAccordionOpen && (
        <>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#1e3a8a",
              marginBottom: "8px",
            }}
          >
            {t("stepFour.number")} {t("stepFour.mainDesc")}
          </h2>

          <div
            style={{
              textAlign: "center",
              marginBottom: "32px",
              marginTop: "32px",
            }}
          >
            <img
              src="/assets/supporting_doc.png"
              alt="Documents"
              style={{ width: "48px", height: "48px", marginBottom: "16px" }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1e3a8a",
                marginBottom: "8px",
              }}
            >
              {t("stepFour.docInfoDesc")}
            </h3>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              {t("stepFour.docInfoSubDesc")}
            </p>
          </div>
        </>
      )}

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div
          style={{
            marginBottom: "32px",
            padding: "20px",
            backgroundColor: "#f9fafb",
            borderRadius: "8px",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              src="/assets/doc.png"
              alt="Documents"
              style={{ width: "24px", height: "24px" }}
            />
            {t("stepFour.docInfoFcHeaderMainText")}
          </h3>

          <div style={{ marginBottom: "16px" }}>
            {!isAccordionOpen && (
              <>
                <p
                  style={{
                    color: "#1e40af",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {t("stepFour.docInfoFcBodyText1")}
                </p>
                <p style={{ color: "#6b7280", fontSize: "14px" }}>
                  {t("stepFour.docInfoFcBodyText2")}
                </p>
              </>
            )}
          </div>

          {/* Collapsible Accordion */}
          <Collapse
            ghost
            expandIconPosition="end"
            style={{ marginBottom: "24px" }}
            onChange={(key) => setIsAccordionOpen(key.length > 0)}
          >
            <Panel
              header={
                <span style={{ color: "#3b82f6", fontWeight: "500" }}>
                  {t("stepFour.docInfoFcBodyAccordianLabelOpen")}
                </span>
              }
              key="1"
            >
              <div style={{ color: "#6b7280", fontSize: "14px" }}>
                <p style={{ marginBottom: "12px" }}>
                  {t("stepFour.docInfoFcBodyAccordianBodyHeading")}
                </p>
                <p style={{ marginBottom: "4px" }}>
                  {t("stepFour.docInfoFcBodyAccordianBodyText1")}
                </p>
                <p style={{ marginBottom: "4px" }}>
                  {t("stepFour.docInfoFcBodyAccordianBodyText2")}
                </p>
                <p style={{ marginBottom: "0" }}>
                  {t("stepFour.docInfoFcBodyAccordianBodyText3")}
                </p>
              </div>
            </Panel>
          </Collapse>

          {/* Philippines Address Proof Upload */}
          <Form.Item
            label={
              <span>
                {t("stepFour.inputAccountTypeLabel2")}{" "}
                <span style={{ color: "#ef4444" }}>*</span>
              </span>
            }
            name="addressProof"
            rules={[
              {
                required: true,
                message: `Please upload ${t(
                  "stepFour.inputAccountTypeLabel2"
                ).toLowerCase()}`,
              },
            ]}
          >
            <Upload
              customRequest={dummyRequest}
              beforeUpload={beforeUpload}
              maxCount={1}
              onChange={handleAddressProofChange}
              showUploadList={{
                showRemoveIcon: true,
              }}
            >
              <div
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  padding: "16px",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <PaperClipOutlined style={{ color: "#9ca3af" }} />
                <span style={{ color: "#9ca3af", fontSize: "14px" }}>
                  Scan, browse, or drag & drop here.
                </span>
              </div>
            </Upload>
          </Form.Item>

          {/* Departure Ticket Upload */}
          <Form.Item
            label={
              <span>
                {t("stepFour.inputAccountTypeSecondaryLabel2")}{" "}
                <span style={{ color: "#ef4444" }}>*</span>
              </span>
            }
            name="departureTicket"
            rules={[
              {
                required: true,
                message: `Please upload ${t(
                  "stepFour.inputAccountTypeSecondaryLabel2"
                ).toLowerCase()}`,
              },
            ]}
          >
            <Upload
              customRequest={dummyRequest}
              beforeUpload={beforeUpload}
              maxCount={1}
              onChange={handleDepartureTicketChange}
              showUploadList={{
                showRemoveIcon: true,
              }}
            >
              <div
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  padding: "16px",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <PaperClipOutlined style={{ color: "#9ca3af" }} />
                <span style={{ color: "#9ca3af", fontSize: "14px" }}>
                  Scan, browse, or drag & drop here.
                </span>
              </div>
            </Upload>
          </Form.Item>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            style={{
              backgroundColor: "#3b82f6",
              borderColor: "#3b82f6",
              height: "48px",
              fontSize: "16px",
              fontWeight: "500",
              borderRadius: "8px",
            }}
          >
            {t("stepFour.docInfoPrimaryBtn")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SupportingDocuments;
