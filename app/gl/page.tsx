import Amenities from "@/components/Amenities";
import RoomCard from "@/components/RoomCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { images, roomTypes } from "@/constants/constants";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GlRoute = () => {
  const t = useTranslations("gl");
  return (
    <section className="pt-10">
      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div className="flex flex-col justify-center md:flex md:flex-row md:justify-between items-center px-4">
          <div className="flex flex-col items-center md:items-start justify-between md:h-full gap-4 md:gap-8 ">
            <Badge className="font-bold font-serif  mb-2 bg-amber-200 text-black">
              3-Star Hotel
            </Badge>
            <h1 className="text-3xl md:text-6xl pb-4 tracking-wider">
              Hotel GL
            </h1>
            <p className="text-muted-foreground font-serif text-sm md:text-md text-center md:text-start  tracking-wider leading-8 md:w-[450px]">
              {t("subtitle1")}
            </p>
            <div className="flex items-center pt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
              <p className="pl-4 font-serif  text-muted-foreground tracking-wide">
                4.7/5 {t("rating")}
              </p>
            </div>
            <Link
              href="/contact"
              className={
                buttonVariants() +
                "md:mt-8 mt-6 mb-6 md:mb-0 w-[358px] md:w-[450px] hover:scale-105 duration-300 transition-all font-bold text-[18px]"
              }
            >
              {t("gl-btn")}
            </Link>
          </div>
          <div className="md:w-1/2 max-h-[500px] rounded-lg overflow-y-hidden">
            <Image
              src="/gl1.jpeg"
              alt="hotel-hellas"
              width={500}
              height={300}
              className=" shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className="mt-35 flex flex-col justify-center items-center gap-8 p-4">
          <h1 className="text-3xl md:text-6xl tracking-wider text-center">
            {t("accomodation-title")}
          </h1>
          <p className="text-center text-sm md:text-md text-muted-foreground tracking-wider font-serif  leading-7">
            {t("accomodation1")}
            <br />
            {t("accomodation2")}
          </p>

          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-4">
                <div className="w-3 h-3 bg-amber-100 rounded-full"></div>
                <span className="text-muted-foreground font-serif  text-sm tracking-wide">
                  {t("single")}
                </span>
              </div>
              <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
              <span className="text-muted-foreground font-serif  text-sm tracking-wide">
                {t("double")}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-amber-800 rounded-full"></div>
              <span className="text-muted-foreground font-serif  text-sm tracking-wide">
                {t("triple")}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              <span className="text-muted-foreground font-serif  text-sm tracking-wide">
                {t("quad")}
              </span>
            </div>
          </div>
          {/* <PhotoCarousel images={images} /> */}
          <div className="grid gap-8 md:grid-cols-2">
            {roomTypes.map((type: any, index) => (
              <div key={index} className="">
                <RoomCard
                  src={type.src}
                  title={type.title}
                  btnTitle={type.btnTitle}
                  alt={type.alt}
                  description={type.description}
                  href={type.href}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <Amenities />
        </div>
      </div>
    </section>
  );
};

export default GlRoute;
