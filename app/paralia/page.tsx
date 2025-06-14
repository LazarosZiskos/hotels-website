"use client";

import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { paraliaImages } from "@/constants/constants";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ParaliaRoute = () => {
  const t = useTranslations("paralia");
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === paraliaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto mb-10 mt-10">
      <h1 className="text-3xl md:text-6xl text-center tracking-wide mb-10">
        {t("title")}
      </h1>

      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={paraliaImages[currentIndex].src}
          alt={paraliaImages[currentIndex].alt}
          fill
          className="object-fill transition-opacity duration-500"
        />
      </div>

      <div className="mt-10 flex flex-col font-serif gap-4">
        <p>{t("paragraph1")}</p>
        <p>{t("paragraph2")}</p>
        <p>{t("paragraph3")}</p>
        <p>{t("paragraph4")}</p>

        <p className="mt-10 flex items-center justify-center gap-3 font-serif font-bold text-center animate-pulse">
          <ArrowRight />
          {t("callToAction")}
        </p>

        <Link
          href="/contact"
          className={
            buttonVariants() +
            " w-full px-10 hover:scale-105 transition-all duration-300"
          }
        >
          {t("button")}
        </Link>
      </div>
    </div>
  );
};

export default ParaliaRoute;
