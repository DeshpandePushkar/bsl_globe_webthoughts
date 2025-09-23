import { useState } from 'react';
import { Input, Button, Checkbox, Typography, Row, Col } from 'antd';
import { useLanguage } from "../hooks/useLanguage";

const { Title, Text, Paragraph } = Typography;

const StepOne = () => {
  const { t } = useLanguage();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '24px',
      minHeight: '100vh'
    }}>
      <>
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <Title level={5} style={{ color: "#d3d3d3", fontSize: 13, letterSpacing: 5 }}>
            {t("verification.subtitle")}
          </Title>

          <Title level={4} style={{
            color: '#1B458B',
            marginBottom: 0,
            fontWeight: '500'
          }}>
            {t("verification.title")}
          </Title>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src="/assets/phone number page.png" width={60} />

          <Title level={4} style={{
            color: '#1B458B',
            marginBottom: 0,
            fontSize: '20px',
            fontWeight: '400'
          }}>
            {t("verification.description")}
          </Title>

          <Paragraph style={{
            color: '#212529BF',
            fontSize: '16px',
            marginBottom: '0'
          }}>
            {t("verification.hpwNote.part1")}{" "}<span style={{ color: '#1890ff' }}>{t("verification.hpwNote.linkText1")}</span>, {t("verification.hpwNote.part2")}{" "}
            <a
              href="http://192.168.0.254/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1890ff' }}
            >
              {t("verification.hpwNote.linkText2")}
            </a>{' '}
            {t("verification.hpwNote.part3")}{" "}<span style={{ color: '#1890ff' }}>OTP</span>
          </Paragraph>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Text style={{
            color: '#212529BF',
            fontSize: '14px',
            display: 'block'
          }}>
            {t("verification.mobileLabel")}{" "}
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
            style={{ alignItems: 'flex-start', fontFamily: "Roboto-Regular" }}
          >
            <Text style={{
              fontSize: '14px',
              color: '#8c8c8c',
              lineHeight: '1.4'
            }}>
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