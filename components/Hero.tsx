"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import RotatingText from "./RotatingText";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Homepage");

  return (
    <>
      <div className="w-full h-full min-h-screen">
        <section className=" p-4 pb-10">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center max-w-6xl">
              <h1 className="md:text-7xl text-4xl leading-[72px] md:w-[1000px] tracking-wide font-serif mt-10">
                <span className="text-blue-400 font-semibold">
                  <RotatingText
                    texts={[
                      "Καλημέρα",
                      "Good Morning",
                      "Dobar Dan",
                      "Bună dimineaţa",
                      "Dobre Utro",
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />
                </span>{" "}
                {t("title1")}
              </h1>
              <p className="text-sm md:text-md text-muted-foreground/80 tracking-wider font-serif pt-4">
                {t("subtitle1")}
                <br />
                {t("subtitle2")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
              <div>
                <Image
                  src="/hellas1.jpg"
                  alt="hotel-hellas"
                  width={600}
                  height={400}
                  className="w-full h-100 object-fill"
                />
                <Badge className="absolute font-serif top-4 left-4 text-black font-bold bg-primary">
                  3-Star Hotel
                </Badge>
              </div>
              <CardContent className="">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-center text-2xl text-card-foreground mb-3">
                    Hotel Hellas
                  </h3>
                  <p className="text-center text-muted-foreground font-serif mb-6">
                    {t("hellas-desc1")}
                    <br />
                    {t("hellas-desc2")}
                  </p>

                  <Link
                    href="/hellas"
                    className={
                      buttonVariants() +
                      "w-full mb-4 px-10 hover:scale-105 transition-all duration-300"
                    }
                  >
                    {t("hellas-btn")}
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
              <div>
                <Image
                  src="/gl1.jpeg"
                  alt="hotel-gl"
                  width={600}
                  height={400}
                  className="w-full h-100 object-fill"
                />
                <Badge className="absolute font-serif top-4 left-4 text-secondary font-bold bg-primary/20">
                  3-Star Hotel
                </Badge>
              </div>
              <CardContent>
                <div className="flex flex-col items-center justify-center mb-5">
                  <h3 className="text-center text-2xl text-card-foreground mb-3">
                    Hotel GL
                  </h3>
                  <p className="text-center font-serif text-muted-foreground mb-6">
                    {t("gl-desc1")}
                    <br /> {t("gl-desc2")}
                  </p>
                  <Link
                    href="/gl"
                    className={
                      buttonVariants() +
                      "w-full mb-4 px-10 hover:scale-105 transition-all duration-300"
                    }
                  >
                    {t("gl-btn")}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <section className="pt-10 bg-[#F3F4F6] p-4 pb-10" id="location">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-7xl leading-[72px] tracking-wide mt-10">
            {t("location")}
          </h1>
          <p className="text-sm md:text-md text-muted-foreground/80 font-serif tracking-wider pt-4 mb-6 text-center">
            {t("location-sub1")} <br /> {t("location-sub2")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
            <div>
              <Image
                src="/paralia1.avif"
                alt="paralia-katerini"
                width={600}
                height={400}
                className="w-full h-100 object-fill"
              />
            </div>
            <CardContent>
              <div className="flex flex-col items-center justify-center mb-5 h-[220px]">
                <h3 className="text-center text-2xl text-card-foreground mb-3">
                  {t("paralia-title")}
                </h3>
                <p className="text-center h-[144px] font-serif text-muted-foreground mb-6">
                  {t("paralia-desc1")}
                  <br />
                  {t("paralia-desc2")}
                </p>
                <Link
                  href="/paralia"
                  className={buttonVariants() + "w-full px-10"}
                >
                  {t("paralia-btn")}
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
            <div>
              <Image
                src="/meteora1.avif"
                alt="meteora"
                width={600}
                height={400}
                className="w-full h-100 object-fill"
              />
            </div>
            <CardContent>
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-center text-2xl text-card-foreground mb-3">
                  {t("sightseeing-title")}
                </h3>
                <p className="text-center font-serif text-muted-foreground mb-6">
                  {t("sightseeing-desc1")}
                  <br />
                  {t("sightseeing-desc2")}
                  <br />
                  {t("sightseeing-desc3")}
                </p>
                <Link
                  href="/destinations"
                  className={
                    buttonVariants() +
                    "w-full px-10 hover:scale-105 transition-all duration-300"
                  }
                >
                  {t("sightseeing-btn")}
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
            <div>
              <Image
                src="/location1.png"
                alt="maps-location"
                width={600}
                height={400}
                className="w-full h-100 object-fill"
              />
            </div>
            <CardContent>
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-center text-2xl text-card-foreground mb-3">
                  {t("location-title")}
                </h3>
                <p className="text-center text-muted-foreground font-serif mb-6">
                  {t("location-desc1")}
                  <br />
                  {t("location-desc2")}
                  <br />
                  {t("location-desc3")}
                </p>
                <Link
                  href="https://www.google.com/maps/dir//40.2684934,22.5962151/@40.2684941,22.596043,20.57z/data=!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D"
                  className={
                    buttonVariants() +
                    "w-full px-10 hover:scale-105 transition-all duration-300"
                  }
                  target="_blank"
                >
                  {t("location-btn")}
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Hero;
