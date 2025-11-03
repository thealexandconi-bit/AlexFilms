"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useI18n();
  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const handleSelect = (langObj) => {
    setLang(langObj.code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm hover:opacity-80 transition"
      >
        <span>{currentLang.flag}</span>
        <Globe className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg border z-50 w-32">
          {languages.map((langObj) => (
            <button
              key={langObj.code}
              onClick={() => handleSelect(langObj)}
              className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 text-left"
            >
              <span>{langObj.flag}</span> {langObj.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
