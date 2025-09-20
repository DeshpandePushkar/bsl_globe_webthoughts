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
    <div className="sim-registration">
      <div className="container-sm">
        <div className="sim-registration__content">
          {/* SIM Registration Icon */}
          <div className="sim-registration__icon-container">
            <div>
              <img
                src="/assets/page1.png"
                alt="SIM Icon"
                className="sim-registration__icon"
              />
            </div>

            <h1 className="sim-registration__title">{t("landing.title")}</h1>
          </div>

          {/* Language Switcher */}
          <div className="sim-registration__language">
            <p className="sim-registration__language-label">
              {t("landing.chooseLanguage")}
            </p>
            <div className="language-dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="language-dropdown__button"
              >
                {languages.find((lang) => lang.key === currentLanguage)
                  ?.label || currentLanguage}
                <span
                  className={`language-dropdown__arrow ${
                    dropdownOpen ? "language-dropdown__arrow--open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {dropdownOpen && (
                <div className="language-dropdown__menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.key}
                      onClick={() => {
                        changeLanguage(lang.key);
                        setDropdownOpen(false);
                      }}
                      className="language-dropdown__item"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Steps List */}
          <div className="sim-registration__steps">
            <div className="steps-list">
              <div className="step-item">
                <span className="step-item__number">1.</span>
                <span>{t("landing.steps.step1")}</span>
              </div>
              <div className="step-item">
                <span className="step-item__number">2.</span>
                <span>{t("landing.steps.step2")}</span>
              </div>
              <div className="step-item">
                <span className="step-item__number">3.</span>
                <span>{t("landing.steps.step3")}</span>
              </div>
              <div className="step-item">
                <span className="step-item__number">4.</span>
                <span>{t("landing.steps.step4")}</span>
              </div>
              <div className="step-item">
                <span className="step-item__number">5.</span>
                <span>{t("landing.steps.step5")}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="sim-registration__actions">
            <button onClick={handleContinue} className="btn btn-primary">
              {t("landing.buttons.continue")}
            </button>

            <button onClick={handleLearnMore} className="btn btn-secondary">
              {t("landing.buttons.learnMore")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimRegistrationPage;
