import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";

// Check if user has previously selected a language
const savedLanguage = localStorage.getItem("i18nextLng");

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    // Default to English unless user previously selected a language
    lng: savedLanguage || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

// Save language preference when changed
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;
