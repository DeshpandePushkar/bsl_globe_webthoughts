import { useState, useEffect } from "react";
import { Form, Upload, Button, Collapse, message, Typography } from "antd";
import { PaperClipOutlined, DownOutlined } from "@ant-design/icons";
import { useLanguage } from "../hooks/useLanguage";

const { Panel } = Collapse;
const { Title } = Typography;

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
      <div className="text-center">
        <img
          src="/assets/supporting_doc.png"
          width={60}
          alt="Register SIM"
        />
      </div>
      <Title
        level={4}
        className="text-center-primary"
      >
        {t("stepFour.docInfoDesc")}
      </Title>
      <p className="text-center text-gray">
        {t("stepFour.docInfoSubDesc")}
      </p>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div>

          <img
            src="/assets/doc.png"
            alt="Documents"
            style={{ width: 40 }}
          />
          <p className="text-black" style={{ fontSize: "1.2rem" }}> {t("stepFour.docInfoFcHeaderMainText")}</p>

          <div style={{ marginBottom: "16px" }}>
            {!isAccordionOpen && (
              <>
                <p className="text-primary">
                  {t("stepFour.docInfoFcBodyText1")}
                  <br />
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
                <span className="text-primary-light">
                  {t("stepFour.docInfoFcBodyAccordianLabelOpen")}
                </span>
              }
              key="1"
            >
              <div className="text-gray">
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
                <span className="form-required-field">*</span>
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
              <div className="step-four-upload-input">
                <PaperClipOutlined className="text-gray" />
                <span className="text-gray">
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
              <div className="step-four-upload-input" >
                <PaperClipOutlined className="text-gray" />
                <span className="text-gray">
                  Scan, browse, or drag & drop here.
                </span>
              </div>
            </Upload>
          </Form.Item>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" block size="large" onClick={onSubmit}>
            {t("stepFour.docInfoPrimaryBtn")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SupportingDocuments;
