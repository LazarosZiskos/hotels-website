"use client";

import React, { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon, Globe } from "lucide-react";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "sr", label: "Српски", flag: "🇷🇸" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const [openLangMenu, setOpenLangMenu] = useState(false);

  const changeLocale = (newLocale: string) => {
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}; path=/`;
    router.refresh();
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={30} />
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col items-center justify-center mt-[100px] gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground",
                  "hover:text-foreground transition-colors"
                )}
              >
                <SheetClose>{t(link.title)}</SheetClose>
              </Link>
            ))}

            <div className="relative text-center mt-4">
              <button
                onClick={() => setOpenLangMenu(!openLangMenu)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50"
              >
                <Globe size={20} className="text-primary" />
                <span className="uppercase">{locale}</span>
              </button>

              {openLangMenu && (
                <ul className="absolute right-0 z-10 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  {languages.map((lang) => (
                    <SheetClose key={lang.code}>
                      <li
                        onClick={() => {
                          changeLocale(lang.code);
                          setOpenLangMenu(false);
                        }}
                        className={`${
                          locale === lang.code ? "text-primary" : ""
                        } cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center gap-2`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </li>
                    </SheetClose>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
