"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon, EarthIcon } from "lucide-react";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinks {
  title: string;
  href: string;
  id: number;
}

const MobileNav = () => {
  const pathname = usePathname();
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
          </div>
          <div className="flex items-center justify-center mt-4">
            <EarthIcon size={25} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
