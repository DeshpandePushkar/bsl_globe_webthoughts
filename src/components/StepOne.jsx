import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

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
    <div className="globe-sim-registration">
      <div className="container-sm">
        <div className="globe-sim-registration__content">
          {/* Header */}
          <div className="globe-sim-registration__header">
            <h5 className="globe-sim-registration__subtitle">
              {t("verification.subtitle")}
            </h5>
            <h1 className="globe-sim-registration__title">
              {t("verification.title")}
            </h1>
          </div>

          {/* Icon and Description */}
          <div className="globe-sim-registration__icon-section">
            <div className="globe-sim-registration__icon">
              <div>
                <img
                  src="/assets/phone number page.png"
                  alt="SIM Icon"
                  className="sim-registration__icon"
                />
              </div>
            </div>
            <p className="globe-sim-registration__description">
              {t("verification.description")}
            </p>
            <p className="globe-sim-registration__note">
              {t("verification.hpwNote.part1")}{" "}
              <a href="#" className="globe-sim-registration__link">
                {t("verification.hpwNote.linkText1")}
              </a>{" "}
              {t("verification.hpwNote.part2")}{" "}
              <a
                href="http://192.168.0.254/"
                target="_blank"
                rel="noopener noreferrer"
                className="globe-sim-registration__link globe-sim-registration__link--underlined"
              >
                {t("verification.hpwNote.linkText2")}
              </a>{" "}
              {t("verification.hpwNote.part3")}{" "}
              <a href="#" className="globe-sim-registration__link">
                {t("verification.hpwNote.linkText3")}
              </a>
            </p>
          </div>

          {/* Form */}
          <div className="globe-sim-registration__form">
            {/* Mobile Number Input */}
            <div className="form-group">
              <label className="form-label">
                {t("verification.mobileLabel")}{" "}
                <span className="form-label__required">*</span>
              </label>
              <div className="input-group">
                <div className="input-group__container">
                  <span className="input-group__prefix">+63</span>
                  <input
                    type="text"
                    placeholder="XXXXXXXXX"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                    className="input-group__field"
                    maxLength={10}
                  />
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="form-group">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="checkbox-input"
                />
                <label className="checkbox-label">
                  {t("verification.termsText.part1")}{" "}
                  <a
                    href="https://www.officialgazette.gov.ph/downloads/2022/10oct/20221010-RA-11934-FRM.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="globe-sim-registration__link"
                  >
                    {t("verification.termsText.linkText1")}
                  </a>{" "}
                  {t("verification.termsText.part2")}{" "}
                  <a
                    href="https://www.globe.com.ph/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="globe-sim-registration__link"
                  >
                    {t("verification.termsText.linkText2")}
                  </a>
                  {/* {t("verification.termsText.part3")} */}
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button
                type="button"
                disabled={!isButtonEnabled}
                onClick={handleRequestPin}
                className="btn btn-primary"
              >
                {t("verification.requestPin")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
