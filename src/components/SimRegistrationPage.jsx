import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from "react-router-dom";

const SimRegistrationPage = () => {
  const { t, currentLanguage, changeLanguage, languages } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/step-one");
  };

  const handleLearnMore = () => {
    window.open("https://www.globe.com.ph/register-sim-card#faqs", "_blank");
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      {/* Main Content */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        {/* SIM Registration Icon */}
        <div>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "12px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* SIM Card Icon */}
            <img src="/assets/page1.png" alt="SIM Icon" />
          </div>

          <h1
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#1B458B",
              lineHeight: "1.3",
            }}
          >
            {t("landing.title")}
          </h1>
        </div>

        {/* Language Switcher */}
        <div>
          <p
            style={{
              color: "#212529BF",
              fontSize: "14px",
              marginBottom: "0",
              fontWeight: "400",
            }}
          >
            {t("landing.chooseLanguage")}
          </p>
          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: "#1B458B",
                fontSize: "14px",
                fontWeight: "400",
                cursor: "pointer",
                position: "relative",
              }}
            >
              {languages.find((lang) => lang.key === currentLanguage)?.label ||
                currentLanguage}
              <span
                style={{
                  marginLeft: "0.5rem",
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  display: "inline-block",
                }}
              >
                ▼
              </span>
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  border: "1px solid #e9ecef",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                  minWidth: "120px",
                  marginTop: "0.25rem",
                }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.key}
                    onClick={() => {
                      changeLanguage(lang.key);
                      setDropdownOpen(false);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "none",
                      background: "transparent",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#1B458B",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#f8f9fa")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Steps List */}
        <div style={{ margin: "1.4rem", textAlign: "left" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                color: "#1B458B",
                fontWeight: "bold",
              }}
            >
              <span
                style={{
                  marginRight: "1rem",
                  color: "#1B458B",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                1.
              </span>
              <span>{t("landing.steps.step1")}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                color: "#1B458B",
                fontWeight: "bold",
              }}
            >
              <span
                style={{
                  marginRight: "1rem",
                  color: "#1B458B",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                2.
              </span>
              <span>{t("landing.steps.step2")}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                color: "#1B458B",
                fontWeight: "bold",
              }}
            >
              <span
                style={{
                  marginRight: "1rem",
                  color: "#1B458B",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                3.
              </span>
              <span>{t("landing.steps.step3")}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                color: "#1B458B",
                fontWeight: "bold",
              }}
            >
              <span
                style={{
                  marginRight: "1rem",
                  color: "#1B458B",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                4.
              </span>
              <span>{t("landing.steps.step4")}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                color: "#1B458B",
                fontWeight: "bold",
              }}
            >
              <span
                style={{
                  marginRight: "1rem",
                  color: "#1B458B",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                5.
              </span>
              <span>{t("landing.steps.step5")}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button
            onClick={handleContinue}
            style={{
              backgroundColor: "#1a73e8",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "8px 24px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
              transition: "background-color 0.2s ease",
              display: "block",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1557b0")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1a73e8")}
          >
            {t("landing.buttons.continue")}
          </button>

          <button
            onClick={handleLearnMore}
            style={{
              backgroundColor: "transparent",
              color: "#1a73e8",
              border: "1px solid #1a73e8",
              borderRadius: "8px",
              padding: "6px 24px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
              transition: "all 0.2s ease",
              display: "block",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#1a73e8";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#1a73e8";
            }}
          >
            {t("landing.buttons.learnMore")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimRegistrationPage;
