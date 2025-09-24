import { useState } from 'react';
import { Input, Button, Checkbox, Typography, Row, Col } from 'antd';
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

const StepOne = () => {
  const { t } = useLanguage();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => {
    let value = e.target.value;

    // Allow only numbers
    value = value.replace(/[^0-9]/g, "");

    // Handle leading zero removal logic
    if (value.length >= 2 && value.startsWith("0")) {
      // Remove leading zero only when user types a second digit
      value = value.substring(1);
    }

    // Limit to 10 digits
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  const isButtonEnabled = mobileNumber.length === 10 && isChecked;

  const handleRequestPin = () => {
    if (isButtonEnabled) {
      alert("PIN request sent to +63" + mobileNumber);
      navigate("/step-two");
    }
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '16px',
    }}>
      <>
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <Title level={5} style={{ color: "#d3d3d3", fontSize: 13, letterSpacing: 5 }}>
            {t("verification.subtitle")}
          </Title>

          <Title level={4} style={{
            color: '#1B458B',
            marginBottom: 0,
            fontSize: "1.2rem"
          }}>
            {t("verification.title")}
          </Title>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src="/assets/phone number page.png" width={60} />

          <Title level={4} style={{
            color: '#1B458B',
            marginBottom: 0,
            fontSize: '1.2rem',
          }}>
            {t("verification.description")}
          </Title>

          <Paragraph className='step-one-hpwNote-container'>
            {t("verification.hpwNote.part1")}{" "}<span className='link-text'>{t("verification.hpwNote.linkText1")}</span>, {t("verification.hpwNote.part2")}{" "}
            <a
              href="http://192.168.0.254/"
              target="_blank"
              rel="noopener noreferrer"
              className='link-text'
            >
              {t("verification.hpwNote.linkText2")}
            </a>{' '}
            {t("verification.hpwNote.part3")}{" "}<span className='link-text'>OTP</span>
          </Paragraph>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Text className='step-one-mobileLabel-container'>
            {t("verification.mobileLabel")}{" "}
            <span style={{ color: "red" }}>*</span>
          </Text>

          <Input.Group compact>
            <Input
              style={{
                width: '60px',
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                border: '1px solid #d9d9d9',
                padding: "6px 12px"
              }}
              value="+63"
              disabled
            />
            <Input
              style={{
                width: 'calc(100% - 60px)',
                border: '1px solid #d9d9d9',
                padding: "6px 12px"
              }}
              placeholder="9XXXXXXXXX"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              maxLength={10}
              type="tel"
            />
          </Input.Group>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Checkbox
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            style={{ alignItems: 'flex-start' }}
          >
            <Text className='step-one-tnc'>
              {t("verification.termsText.part1")}{" "}
              <a
                href="https://www.officialgazette.gov.ph/downloads/2022/10oct/20221010-RA-11934-FRM.pdf"
                target="_blank"
                style={{ color: '#1890ff' }}
              >
                {t("verification.termsText.linkText1")}
              </a>{' '}
              {t("verification.termsText.part2")}{" "}
              <a
                href="https://www.globe.com.ph/privacy-policy"
                target="_blank"
                style={{ color: '#1890ff' }}
              >
                {t("verification.termsText.linkText2")}
              </a>{' '}
              {t("verification.termsText.part3")}
            </Text>
          </Checkbox>
        </div>

        <Row>
          <Col span={24}>
            <Button
              type="primary"
              block
              disabled={!isButtonEnabled}
              onClick={handleRequestPin}
            >
              {t("verification.requestPin")}
            </Button>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default StepOne;