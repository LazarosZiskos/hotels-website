"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { EarthIcon } from "lucide-react";
import MobileNav from "./MobileNav";

interface NavLinks {
  title: string;
  href: string;
  id: number;
}

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="top-0 sticky bg-background/80 border-b border-foreground/20">
      <div className="hidden px-[100px] h-25 md:flex justify-between">
        <div className="md:flex items-center justify-center ">
          <Link href="/">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </Link>
          <h2 className="text-xl">Ziskos Hotels</h2>
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
                "hover:text-foreground transition-colors"
              )}
            >
              {link.title}
            </Link>
          ))}

          <EarthIcon size={25} />
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
