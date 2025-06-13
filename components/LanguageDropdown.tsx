"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "sr", label: "Српски", flag: "🇷🇸" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
];

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const changeLanguage = (code: string) => {
    // Example assuming locale-based routing, e.g., /el/about
    const path = window.location.pathname;
    const segments = path.split("/");
    segments[1] = code;
    router.push(segments.join("/"));
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50"
      >
        🌐
        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.587l3.71-4.357a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      {open && (
        <ul className="absolute right-0 z-10 mt-2 w-48 bg-white border rounded-md shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
