import { useState } from 'react';
import { Input, Button, Checkbox, Typography, Row, Col, Select } from 'antd';
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

const StepTwo = () => {
  const { t } = useLanguage();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const isButtonEnabled = mobileNumber.length === 10 && isChecked;

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
            {t("stepTwo.number")}{t("stepTwo.mainDesc")}
          </Title>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src="/assets/registeryoursimicon.png" width={60} />

          <Title level={4} style={{
            color: '#1B458B',
            marginBottom: 0,
            fontSize: '1.2rem',
          }}>
            {t("stepTwo.desc")}
          </Title>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Text className='step-one-mobileLabel-container'>
            {t("stepTwo.inputLabel")}{" "}
            <span style={{ color: "red" }}>*</span>
          </Text>

          <Row>
            <Select
              style={{
                width: '100%',

              }}
              placeholder={t("stepTwo.dropdownLabel")}
              size='large'
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
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
              size='large'
            >
              {t("stepTwo.primaryBtn")}
            </Button>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default StepTwo;