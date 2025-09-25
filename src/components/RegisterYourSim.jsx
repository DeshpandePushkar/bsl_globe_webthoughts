import { Button, Typography } from 'antd';
import { useLanguage } from '../hooks/useLanguage';
import { isEmpty } from '../generalFunctions';

const { Title, Paragraph } = Typography;

const RegisterYourSim = () => {
    const { t } = useLanguage();

    return (
        <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '16px',
        }}>
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
                <Title level={5} style={{ color: "#d3d3d3", fontSize: 13, letterSpacing: 5 }}>
                    {t("verification.subtitle")}
                </Title>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <img src="/assets/registeryoursimicon.png" width={60} />

                <Title level={4} style={{
                    color: '#1B458B',
                    marginBottom: 0,
                    fontSize: '1.2rem',
                }}>
                    {t("infoPage.heading")}
                </Title>

                <Paragraph className='step-one-hpwNote-container'>
                    {t("infoPage.subHeading")}
                </Paragraph>
            </div>

            <div className="steps-container">
                <div className="steps-list">
                    <div className="step-one-list-item">
                        <span className="step-number">1.</span>
                        <span>{t("infoPage.pointOne")}</span>
                    </div>
                    {!isEmpty(t("infoPage.pointOneSubDesc")) && <span className='step-one-pointThreeSubDesc'>
                        <span>{t("infoPage.pointOneSubDesc")}</span>
                    </span>}
                    <div className="step-one-list-item">
                        <span className="step-number">2.</span>
                        <span>{t("infoPage.pointTwo")}</span>
                    </div>
                    {!isEmpty(t("infoPage.pointTwoSubDesc")) && <span className='step-one-pointThreeSubDesc'>
                        <span>{t("infoPage.pointTwoSubDesc")}</span>
                    </span>}
                    <div className="step-one-list-item">
                        <span className="step-number">3.</span>
                        <span>{t("infoPage.pointThree")}</span>
                    </div>
                    {!isEmpty(t("infoPage.pointThreeSubDesc")) && <span className='step-one-pointThreeSubDesc'>
                        <span>{t("infoPage.pointThreeSubDesc")}</span>
                    </span>}
                    <div style={{ marginLeft: '32px' }}>
                        <div className='step-one-pointThreeSubDesc'>
                            {!isEmpty(t("infoPage.pointThreeSubDesc1")) && <div style={{ marginBottom: '2px' }}>{t("infoPage.pointThreeSubDesc1")}</div>}
                            {!isEmpty(t("infoPage.pointThreeSubDesc2")) && <div style={{ marginBottom: '2px' }}>{t("infoPage.pointThreeSubDesc2")}</div>}
                            {!isEmpty(t("infoPage.pointThreeSubDesc3")) && <div style={{ marginBottom: '2px' }}>{t("infoPage.pointThreeSubDesc3")}</div>}
                            {!isEmpty(t("infoPage.pointThreeSubDesc4")) && <div style={{ marginBottom: '2px' }}>{t("infoPage.pointThreeSubDesc4")}</div>}
                            {!isEmpty(t("infoPage.pointThreeSubDesc5")) && <div style={{ marginBottom: '2px' }}>{t("infoPage.pointThreeSubDesc5")}</div>}
                            {!isEmpty(t("infoPage.pointThreeSubDesc6")) && <div style={{ marginBottom: '2px' }}>{t("infoPage.pointThreeSubDesc6")}</div>}
                            {!isEmpty(t("infoPage.pointThreeSubDesc7")) && <div style={{ marginBottom: '2px' }}>{t("infoPage.pointThreeSubDesc7")}</div>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="buttons-container">
                <Button
                    type="primary"
                    block
                    size='large'
                >
                    {t("infoPage.primaryBtn")}
                </Button>

                <Button
                    type="default"
                    block
                    size='large'
                >
                    {t("infoPage.secondaryBtn")}
                </Button>
            </div>
        </div>
    );
};

export default RegisterYourSim;