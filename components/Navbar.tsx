"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { navLinks } from "@/constants/constants";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "sr", label: "Српски", flag: "🇷🇸" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
];

const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const changeLocale = (newLocale: string) => {
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}; path=/;`;
    router.refresh();
  };

  return (
    <nav className="top-0 z-10 sticky bg-white border-b backdrop-blur-md border-foreground/20">
      <div className="hidden px-[100px] h-25 lg:flex justify-between z-10">
        <div className="md:flex items-center justify-center">
          <Link href="/" className="flex items-center font-semibold">
            <Image src="/logo.png" width={90} height={90} alt="logo" />
            <h2 className="text-xl text-primary font-serif">Ziskos Hotels</h2>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground",
                "hover:text-foreground transition-colors font-serif"
              )}
            >
              {t(link.title)}
            </Link>
          ))}
        </div>

        <div className="relative inline-block top-7 text-right">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50"
          >
            <Globe size={20} className="text-primary" />
            <span className="uppercase">{locale}</span>
          </button>

          {open && (
            <ul className="absolute right-0 z-10 mt-2 w-48 bg-white border rounded-md shadow-lg">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => {
                    changeLocale(lang.code);
                    setOpen(false);
                  }}
                  className={`${
                    locale === lang.code ? "text-primary" : ""
                  } cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center gap-2`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-8 py-2 lg:hidden">
        <Link href="/">
          <Image src="/logo.png" width={80} height={80} alt="logo" />
        </Link>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
