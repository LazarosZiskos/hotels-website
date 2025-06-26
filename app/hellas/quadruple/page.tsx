import PhotoCarousel from "@/components/PhotoCarousel";
import { buttonVariants } from "@/components/ui/button";
import { facilities, imagesHellas } from "@/constants/constants";
import { ArrowRight, CheckCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

interface Facilities {
  text: string;
}

export const metadata: Metadata = {
  title: "Family Rooms | Hotel Hellas - Ziskos Hotels",
  description:
    "Spacious and family-friendly quadruple rooms at Hotel Hellas in Paralia Katerinis. Ideal for families with children, just 100m from the beach.",
  keywords: [
    "family hotel Greece",
    "quadruple room Paralia",
    "Hotel Hellas family room",
    "4-bed room Greece",
    "Paralia Katerini hotel room",
    "Greek seaside family hotel",
    "Ziskos Hotels",
  ],
  alternates: {
    canonical: "/hellas/quadruple",
  },
  openGraph: {
    title: "Family Rooms - Hotel Hellas",
    description:
      "Stay in our comfortable family rooms at Hotel Hellas, perfect for 4 guests and just steps from the beach.",
    url: "https://www.ziskos-hotels.gr/hellas/quadruple",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/hellasquad1.jpg",
        width: 1200,
        height: 630,
        alt: "Family Room at Hotel Hellas",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Rooms - Hotel Hellas",
    description:
      "Comfortable and spacious quadruple rooms in Paralia Katerinis. Ideal for families at Ziskos Hotels.",
    images: ["/hellasquad1.jpg"],
  },
};

const HellasQuadRoomPage = () => {
  const t = useTranslations("hellas");
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center p-8">
        {t("roomInfo.family.title")}
      </h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={imagesHellas} />
        </div>

        <div className="flex flex-col items-start font-serif justify-center">
          <h3 className="pb-4 text-3xl">{t("roomInfo.family.description")}</h3>
          <p className="leading-8 pt-2">{t("roomInfo.family.para1")}</p>
          <p className="leading-8 pt-2">{t("roomInfo.family.para2")}</p>
          <p className="leading-8 pt-2">{t("roomInfo.family.para3")}</p>
        </div>
        <h3 className="pb-4 mt-10 font-serif text-3xl">Room Facilities</h3>
        <div className="items-start font-serif mb-10">
          <ul className="grid md:grid-cols-3 gap-2">
            {facilities.map((item: Facilities, index) => (
              <li key={index} className="flex gap-2">
                <CheckCheck className="text-primary" />
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

export default HellasQuadRoomPage;
