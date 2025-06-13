"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface NavLinks {
  title: string;
  href: string;
  id: number;
}

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
          <Button
            onClick={() => changeLocale("en")}
            className={`${locale === "en" && "bg-white text-black"}`}
          >
            EN
          </Button>
          <Button
            onClick={() => changeLocale("el")}
            className={`${locale === "el" && "bg-white text-black"}`}
          >
            EL
          </Button>
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

//"text-muted-foreground hover:text-foreground font-light transition-colors"
