import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Restaurant = () => {
  const t = useTranslations("restaurant");

  return (
    <div className="mb-40 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-6xl text-center tracking-wide pb-10">
          {t("title")}
        </h1>
        <p className="text-center text-sm md:text-md font-serif text-muted-foreground tracking-wider leading-7">
          {t("subtitle1")}

          <br />
          {t("subtitle2")}
        </p>
        <div className="mt-10 flex flex-col justify-center items-center">
          <Image
            src="/restaurant1.jpg"
            alt="gl-restaurant"
            width={420}
            height={400}
            className="w-180 h-150 mb-10 rounded-2xl shadow-xl object-fill"
          />

          <Link
            href="/gl/restaurant"
            className={
              buttonVariants() + "hover:scale-x-125 transition-all duration-300"
            }
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
