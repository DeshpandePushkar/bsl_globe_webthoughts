import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
  };

  return {
    t,
    currentLanguage: i18n.language,
    changeLanguage,
    languages: [
      { key: "en", label: "English" },
      { key: "taglish", label: "Taglish" },
    ],
  };
};
