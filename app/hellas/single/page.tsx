import PhotoCarousel from "@/components/PhotoCarousel";
import { buttonVariants } from "@/components/ui/button";
import { facilities, imagesHellas } from "@/constants/constants";
import { ArrowRight, CheckCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single Rooms | Hotel Hellas - Ziskos Hotels",
  description:
    "Cozy and affordable single rooms at Hotel Hellas in Paralia Katerinis. Ideal for solo travelers or business stays. Only 100m from the beach.",
  keywords: [
    "single hotel room greece",
    "cheap single room Paralia",
    "Hotel Hellas single",
    "solo vacation Greece",
    "budget accommodation",
    "Ziskos Hotels",
  ],
  alternates: {
    canonical: "/hellas/single",
  },
  openGraph: {
    title: "Hotel Hellas Single Rooms",
    description:
      "Discover our comfortable single rooms – just steps away from the sea in Paralia Katerini.",
    url: "https://www.ziskos-hotels.gr/hellas/single",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/hellasdouble1.jpg",
        width: 1200,
        height: 630,
        alt: "Single Room at Hotel Hellas",
      },
    ],
    locale: "en",
    type: "website", // ✔️ valid value
  },
  twitter: {
    card: "summary_large_image",
    title: "Single Rooms - Hotel Hellas",
    description:
      "Perfect for solo travelers. Hotel Hellas in Paralia Katerini offers cozy and modern single rooms.",
    images: ["/hellasdouble1.jpg"],
  },
};

interface Facilities {
  text: string;
}

const HellasSingleRoomPage = () => {
  const t = useTranslations("hellas");
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center p-8">
        {t("roomInfo.single.title")}
      </h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={imagesHellas} />
        </div>

        <div className="flex flex-col items-start font-serif justify-center">
          <h3 className="pb-4 text-3xl">{t("roomInfo.single.description")}</h3>
          <p className="leading-8 pt-2">{t("roomInfo.single.para1")}</p>
          <p className="leading-8 pt-2">{t("roomInfo.single.para2")}</p>
          <p className="leading-8 pt-2">{t("roomInfo.single.para3")}</p>
        </div>
        <h3 className="pb-4 mt-10 font-serif text-3xl">Room Facilities</h3>
        <div className="items-start font-serif mb-10">
          <ul className="grid md:grid-cols-3 gap-2">
            {facilities.map((item: Facilities, index) => (
              <li key={index} className="flex gap-2">
                <CheckCheck className="text-primary/50" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mb-10 pt-10">
          <Link href="/hellas#accomodation" className={buttonVariants()}>
            <ArrowRight />
            {t("roomInfo.single.btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HellasSingleRoomPage;
