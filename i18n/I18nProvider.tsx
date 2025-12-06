"use client";

import React, { createContext, useContext, useState } from "react";
import { en } from "./en";
import { es } from "./es";
import { de } from "./de";
import { fr } from "./fr";
import { Keys } from "./Keys";

// Define supported languages
type Lang = "en" | "es" | "de" | "fr";

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: Keys) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("es");

  // Map each language code to its translation file; translation files may be partial
  const translations = {
    en,
    es,
    de,
    fr,
  } as Record<Lang, Partial<Record<Keys, string>>>;

  // ✅ Safe translation function (single definition)
  const t = (key: Keys): string => {
    const value = translations[lang][key];
    if (!value) {
      console.warn(`Missing translation for key "${key}" in "${lang}"`);
      return key; // fallback to key name
    }
    return value;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

// Hook to use translations in components
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};