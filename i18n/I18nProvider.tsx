"use client";

import React, { createContext, useContext, useState } from "react";
import { en } from "./en";
import { es } from "./es";
import { de } from "./de";
import { fr } from "./fr";
import { Keys } from "./Keys";

// Add all supported languages here
type Lang = "en" | "es" | "de" | "fr";

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: Keys) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  // Map each language code to its translation file
  const translations: Record<Lang, Record<Keys, string>> = { en, es, de, fr };

  // Translation function
  const t = (key: Keys) => translations[lang][key] || key;

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