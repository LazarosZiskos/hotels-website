"use client";

import Amenities from "@/components/Amenities";
import RoomCard from "@/components/RoomCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { roomTypes } from "@/constants/constants";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RoomType {
  src: string;
  title: string;
  btnTitle: string;
  alt: string;
  description: string;
  href: string;
}

const GlRoute = () => {
  const t = useTranslations("gl");

  return (
    <section className="pt-10">
      <div className="bg-white w-full h-full pt-4">
        <div className="flex flex-col justify-center md:flex md:flex-row md:justify-between items-center px-4 max-w-6xl mx-auto">
          <div className="flex flex-col items-center md:items-start justify-between md:h-full gap-4 md:gap-8 ">
            <Badge className="font-bold mb-2 font-serif bg-amber-200 text-black">
              3-Star Hotel
            </Badge>
            <h1 className="text-3xl md:text-6xl pb-4 tracking-wider">
              Hotel GL
            </h1>
            <p className="text-muted-foreground text-sm md:text-md font-serif text-center md:text-start tracking-wider leading-8 md:w-[450px]">
              {t("subtitle1")}
            </p>
            <div className="flex items-center pt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
              <p className="pl-4 text-muted-foreground font-serif tracking-wide">
                4.6/5 {t("rating")}
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
              className="shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F3F4F6"
          fillOpacity="1"
          d="M0,192L34.3,192C68.6,192,137,192,206,202.7C274.3,213,343,235,411,250.7C480,267,549,277,617,261.3C685.7,245,754,203,823,181.3C891.4,160,960,160,1029,160C1097.1,160,1166,160,1234,138.7C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>

      <div className="pt-10 bg-[#F3F4F6] p-4">
        <div className="flex flex-col max-w-6xl mx-auto justify-center items-center gap-8 p-4 ">
          <h1 className="text-3xl md:text-6xl tracking-wider text-center">
            {t("accomodation-title")}
          </h1>
          <p className="text-center text-sm md:text-md font-serif text-muted-foreground tracking-wider leading-7">
            {t("accomodation1")}
            <br />
            {t("accomodation2")}
          </p>

          <div className="flex items-center justify-center gap-8 flex-wrap mb-10">
            <div className="flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-amber-100 rounded-full"></div>
              <span className="text-muted-foreground font-serif text-sm tracking-wide">
                {t("single")}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
              <span className="text-muted-foreground font-serif text-sm tracking-wide">
                {t("double")}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-amber-800 rounded-full"></div>
              <span className="text-muted-foreground font-serif text-sm tracking-wide">
                {t("triple")}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
              <span className="text-muted-foreground font-serif text-sm tracking-wide">
                {t("quad")}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {roomTypes.map((type: RoomType, index) => (
            <div key={index}>
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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F3F4F6"
          fillOpacity="1"
          d="M0,96L34.3,96C68.6,96,137,96,206,80C274.3,64,343,32,411,37.3C480,43,549,85,617,106.7C685.7,128,754,128,823,112C891.4,96,960,64,1029,90.7C1097.1,117,1166,203,1234,208C1302.9,213,1371,139,1406,101.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <div className="pt-0 p-4">
        <Amenities />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#262626"
          fillOpacity="1"
          d="M0,256L60,261.3C120,267,240,277,360,277.3C480,277,600,267,720,229.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default GlRoute;
