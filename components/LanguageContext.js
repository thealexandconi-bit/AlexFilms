// components/LanguageContext.js
"use client";

import { createContext, useState, useContext } from "react";
import { translations } from "./Translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default: English

  // The translation function
  const t = (key) => {
    const langSet = translations[language] || {};
    return langSet[key] || key; // fallback: show the key if not found
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);