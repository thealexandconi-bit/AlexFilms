// components/LanguageContext.js
"use client";

import { createContext, useState, useContext } from "react";
import { translations } from "./Translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default: English

  const value = {
    language,
    setLanguage,
    t: translations[language], // shortcut for translation object
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
