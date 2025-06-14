"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon, Globe } from "lucide-react";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinks {
  title: string;
  href: string;
  id: number;
}

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "sr", label: "Српски", flag: "🇷🇸" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [locale, setLocale] = useState<String>("");
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}`;
    router.refresh();
  };
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side={"right"}>
          <div className="flex flex-col items-center justify-center mt-[100px] gap-6">
            {navLinks.map((link: NavLinks) => (
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
                <SheetClose>{link.title}</SheetClose>
              </Link>
            ))}
            <div>
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
                    <SheetClose>
                      <li
                        key={lang.code}
                        onClick={() => {
                          changeLocale(lang.code);
                          setOpen(false);
                        }}
                        className={`${
                          locale === lang.code && "text-primary"
                        } + "cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center gap-2"`}
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
