import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, Checkbox, Typography, Row, Col } from 'antd';
import { useLanguage } from '../hooks/useLanguage';

const { Title, Paragraph } = Typography;

const OTPVerificationPage = () => {
  const { t } = useLanguage();
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(163); // 02:43 in seconds
  const inputRefs = useRef([]);

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.slice(-1); // Only take the last character
    setOtpValues(newOtpValues);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isFormValid = otpValues.every(value => value !== '');
  const isExpired = timeLeft === 0;

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '16px',
    }}>
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
        <img src="/assets/download.png" width={60} />

        <Title level={4} style={{
          color: '#1B458B',
          marginBottom: 0,
          fontSize: '1.2rem',
        }}>
          Enter the One-Time PIN we sent to 639176881387
        </Title>

        <Paragraph className='step-one-hpwNote-container'>
          If you didn't receive a code, press Resend PIN
        </Paragraph>
      </div>

      {/* Custom OTP Input */}

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginBottom: '24px'
      }}>
        {otpValues.map((value, index) => (
          <React.Fragment key={index}>
            <div style={{ position: 'relative' }}>
              <Input
                ref={el => inputRefs.current[index] = el}
                autoComplete="off"
                aria-label={`Please enter OTP character ${index + 1}`}
                type="tel"
                inputMode="numeric"
                value={value}
                onChange={(e) => handleOtpChange(e.target.value, index, inputRefs)}
                onKeyDown={(e) => handleKeyDown(e, index, inputRefs)}
                maxLength={1}
                style={{
                  height: 'auto',
                  textAlign: 'center',
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#000000',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #8c8c8c',
                  outline: 'none',
                  borderRadius: '0',
                }}
                className='step-one-otp-input'
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      {/* Timer */}
      <div style={{ marginBottom: '40px' }}>
        <span style={{
          color: '#6c757d',
          fontSize: '14px',
        }}>
          Code expires in: <span style={{ fontWeight: '600' }}>{formatTime(timeLeft)}</span>
        </span>
      </div>

      <div className="buttons-container">
        <Button
          type="primary"
          block
          disabled={!isFormValid}
        >
          {t("landing.buttons.continue")}
        </Button>

        <Button
          type="default"
          block
          disabled={!isExpired}
        >
          Resend PIN
        </Button>
      </div>
    </div>
  );
};

export default OTPVerificationPage;