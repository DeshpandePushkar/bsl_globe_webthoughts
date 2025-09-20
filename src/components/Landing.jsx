import React from "react";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
  };

  const handleContinue = () => {
    console.log("Continue clicked");
  };

  const handleLearnMore = () => {
    console.log("Learn more clicked");
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-body-tertiary container-fluid navbar navbar-expand navbar-light">
        <div className="justify-content-between px-lg-0 container">
          <a href="#" className="navbar-brand">
            <img
              src="/images/logo.svg"
              height="40"
              className="d-inline-block align-top"
              alt="Brand Logo"
            />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-5 p-lg-5 border-0 container">
        <div className="text-center container-fluid">
          <img
            src="/images/sim-icon.png"
            alt="SIM Icon"
            className=""
            style={{ width: "64px", height: "64px", marginBottom: "1rem" }}
          />

          <h4 className="intro-page-instructions intro-page-heading">
            {t("title")}
          </h4>

          <div className="text-center my-3 container-fluid">
            <h4 className="small text-muted">{t("chooseLanguage")}</h4>
            <div className="language-switcher small p-0 m-0 nav-item dropdown-center">
              <select
                value={i18n.language}
                onChange={changeLanguage}
                className="form-select"
                style={{ maxWidth: "150px", margin: "0 auto" }}
              >
                <option value="en">English</option>
                <option value="taglish">Taglish</option>
              </select>
            </div>
          </div>
        </div>

        {/* Steps List */}
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 my-3">
            <div className="intro-page-instruction-container">
              <ol className="list-group list-group-numbered">
                <li className="intro-page-instructions border-0 list-group-item">
                  {t("steps.step1")}
                </li>
                <li className="intro-page-instructions border-0 list-group-item">
                  {t("steps.step2")}
                </li>
                <li className="intro-page-instructions border-0 list-group-item">
                  {t("steps.step3")}
                </li>
                <li className="intro-page-instructions border-0 list-group-item">
                  {t("steps.step4")}
                </li>
                <li className="intro-page-instructions border-0 list-group-item">
                  {t("steps.step5")}
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <button
                type="button"
                className="btn btn-primary w-100 my-3"
                onClick={handleContinue}
              >
                {t("buttons.continue")}
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <button
                type="button"
                className="btn btn-outline-primary w-100"
                onClick={handleLearnMore}
              >
                {t("buttons.learnMore")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
