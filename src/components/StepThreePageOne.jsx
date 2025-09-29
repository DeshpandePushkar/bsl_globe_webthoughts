import { useState } from 'react';
import { Input, Button, Checkbox, Typography, Row, Col, Select } from 'antd';
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

const StepThreePageOne = () => {
  const { t } = useLanguage();

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
            {t("stepThree.number")} {t("stepThree.mainDesc")}
          </Title>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src="/assets/registeryoursimicon.png" width={40} />
        </div>

        <div className="steps-container">
          <div className="steps-list">
            <div className='step-id-selfie'>
              <img src="/assets/step3-1/1.jpg" height={30} width={40} />
              <div className="step-item-id-selfie">
                <span>{t("stepThree.pointOneMainDesc")}</span>
                <span>{t("stepThree.pointOneMainDescSub")}</span>
                <span className='step-sub-item_id_selfie'>
                  <span>{t("stepThree.pointOneMain")}</span>
                </span>
                <div style={{ marginLeft: "32px" }}>
                  <div className='step-sub-item_id_selfie'>
                    <div style={{ marginBottom: "2px" }}>
                      {t("stepThree.pointOneBulletOne")}
                    </div>
                    <div style={{ marginBottom: "2px" }}>
                      {t("stepThree.pointOneBulletTwo")}
                    </div>
                    <div style={{ marginBottom: "2px" }}>
                      {t("stepThree.pointOneBulletThree")}
                    </div>
                    <div style={{ marginBottom: "2px" }}>
                      {t("stepThree.pointOneBulletFour")}
                    </div>
                    <div style={{ marginBottom: "2px" }}>
                      {t("stepThree.pointOneBulletFive")}
                    </div>
                    <div style={{ marginBottom: "2px" }}>
                      {t("stepThree.pointOneBulletSix")}
                    </div>
                    <div style={{ marginBottom: "2px" }}>
                      {t("stepThree.pointOneBulletSeven")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='step-id-selfie'>
              <img src="/assets/step3-1/2.jpeg" height={40} width={40} />
              <div className="step-item-id-selfie">
                <span>{t("stepThree.pointTwoMainDesc")}</span>
                <span>{t("stepThree.pointOneMainDescSub")}</span>
                <span className='step-sub-item_id_selfie'>
                  <span>{t("stepThree.pointTwoMain")}</span>
                </span>
              </div>
            </div>

            <div className='step-id-selfie'>
              <img src="/assets/step3-1/3.jpeg" height={40} />
              <div className="step-item-id-selfie">
                <span>{t("stepThree.pointThreeMainDesc")}</span>
                <span className='step-sub-item_id_selfie'>
                  <span>{t("stepThree.pointThreeMain")}</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        <Row>
          <Col span={24}>
            <Button
              type="primary"
              block
              size='large'
            >
              {t("stepThree.btnLabel")}
            </Button>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default StepThreePageOne;