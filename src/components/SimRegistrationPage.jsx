import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useNavigate } from "react-router-dom";
import { trackClick } from "../utils/analytics";

const SimRegistrationPage = () => {
  const { t, currentLanguage, changeLanguage, languages } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContinue = () => {
    trackClick("Continue");
    navigate("/digital-onboarding/step-one");
  };

  const handleLearnMore = () => {
    window.open("https://www.globe.com.ph/register-sim-card#faqs", "_blank");
  };

  return (
    <div className="sim-registration-container">
      {/* Main Content */}
      <div className="main-content">
        {/* SIM Registration Icon */}
        <div>
          <div className="sim-icon-container">
            {/* SIM Card Icon */}
            <img src="/assets/success.png" alt="SIM Icon" />
          </div>

          <h1 className="main-title">{t("landing.title")}</h1>
        </div>

        {/* Language Switcher */}
        <div>
          <p className="language-label">{t("landing.chooseLanguage")}</p>
          <div className="dropdown-container" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="dropdown-button"
            >
              {languages.find((lang) => lang.key === currentLanguage)?.label ||
                currentLanguage}
              <span
                className={`dropdown-arrow ${
                  dropdownOpen ? "dropdown-arrow-open" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.key}
                    onClick={() => {
                      changeLanguage(lang.key);
                      setDropdownOpen(false);
                    }}
                    className="dropdown-item"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Steps List */}
        <div className="steps-container">
          <div className="steps-list">
            <div className="step-item">
              <span className="step-number">1.</span>
              <span>{t("landing.steps.step1")}</span>
            </div>
            <div className="step-item">
              <span className="step-number">2.</span>
              <span>{t("landing.steps.step2")}</span>
            </div>
            <div className="step-item">
              <span className="step-number">3.</span>
              <span>{t("landing.steps.step3")}</span>
            </div>
            <div className="step-item">
              <span className="step-number">4.</span>
              <span>{t("landing.steps.step4")}</span>
            </div>
            <div className="step-item">
              <span className="step-number">5.</span>
              <span>{t("landing.steps.step5")}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="buttons-container">
          <button onClick={handleContinue} className="primary-button">
            {t("landing.buttons.continue")}
          </button>

          <button onClick={handleLearnMore} className="secondary-button">
            {t("landing.buttons.learnMore")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimRegistrationPage;
