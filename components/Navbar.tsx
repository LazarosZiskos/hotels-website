"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";

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

const Navbar = () => {
  const [locale, setLocale] = useState<String>("");
  const pathname = usePathname();
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
    <nav className="top-0 z-10 sticky bg-white border-b backdrop-blur-md border-foreground/20">
      <div className="hidden px-[100px] h-25 md:flex justify-between z-10">
        <div className="md:flex items-center justify-center ">
          <Link
            href="/"
            className="flex items-center justify-center font-semibold"
          >
            <Image src="/logo.png" width={90} height={90} alt="logo" />
            <h2 className="text-xl text-primary font-serif">Ziskos Hotels</h2>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center space-x-10">
          {navLinks.map((link: NavLinks) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground",
                "hover:text-foreground transition-colors font-serif "
              )}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="relative inline-block top-7 text-right">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50"
          >
            🌐
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.587l3.71-4.357a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
            </svg>
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
                    locale === lang.code && "text-primary"
                  } + "cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center gap-2"`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-8 py-2 md:hidden">
        <div className="md:flex items-center justify-center">
          <Link href="/">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
          </Link>
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
