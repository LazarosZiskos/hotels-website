import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white">
      <div className="flex flex-col items-center justify-center gap-4 max-w-6xl mx-auto pt-6">
        <h1 className="text-4xl tracking-wider">Ziskos Hotels</h1>

        <p className="text-white tracking-wider">
          Creating unforgetable Memories for you and your family
        </p>

        <h3 className="text-white/80">Find us on social media</h3>
        <div className="flex items-center justify-center gap-4 text-white/80">
          <Link
            href="/instagram.com"
            className="hover:scale-120 transition-all duration-300 size-8"
          >
            <Instagram />
          </Link>
          <Link
            href="/facebook.com"
            className="hover:scale-120 transition-all duration-300 size-8"
          >
            <Facebook />
          </Link>
          <a
            href="mailto:info@hotel-gl.gr"
            className="hover:scale-120 transition-all duration-300 size-8"
          >
            <Mail />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground pb-4 text-sm tracking-wide">
          <p>© 2025 Ziskos Hotels. All rights reserved.</p>
          <p className="">
            Designed and developed by{" "}
            <Link
              href="https://lazaros-portfolio.vercel.app/"
              className="underline"
              target="_blank"
            >
              Lazaros Ziskos
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
