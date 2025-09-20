import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import taglish from "../locales/taglish.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    taglish: { translation: taglish },
  },
  lng: localStorage.getItem("selectedLanguage") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
