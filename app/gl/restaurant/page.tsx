import PhotoCarousel from "@/components/PhotoCarousel";
import { buttonVariants } from "@/components/ui/button";
import { restaurantGl } from "@/constants/constants";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const RestaurantPage = () => {
  const t = useTranslations("gl");
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center p-8">
        {t("restaurant.title")}
      </h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto mb-10">
        <div>
          <PhotoCarousel images={restaurantGl} />
        </div>

        <div className="flex flex-col items-start font-serif justify-center">
          <h3 className="pb-4 text-3xl">{t("restaurant.description")}</h3>
          <p className="leading-8 pt-2">{t("restaurant.para1")}</p>
          <p className="leading-8 pt-2">{t("restaurant.para2")}</p>
          <p className="leading-8 pt-2">{t("restaurant.para3")}</p>
          <p className="leading-8 pt-2 font-semibold text-gray-400 ">
            {t("restaurant.para4")}
          </p>
        </div>
        <div className="text-center mb-10 pt-10 w-[200px]">
          <Link href="/gl#accomodation" className={buttonVariants()}>
            <ArrowRight />
            {t("restaurant.btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RestaurantPage;
