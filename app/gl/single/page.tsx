import PhotoCarousel from "@/components/PhotoCarousel";
import { buttonVariants } from "@/components/ui/button";
import { facilities, imagesGL } from "@/constants/constants";
import { ArrowRight, CheckCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

interface Facilities {
  text: string;
}

export const metadata: Metadata = {
  title: "Single Room | Hotel GL - Ziskos Hotels",
  description:
    "Comfortable single rooms at Hotel GL in Paralia Katerinis, ideal for solo travelers. Just 100m from the beach with great amenities.",
  keywords: [
    "single room Greece",
    "Hotel GL Paralia",
    "solo travel Paralia Katerini",
    "Ziskos Hotels",
    "affordable accommodation Greece",
    "Paralia Katerini hotel",
    "beach hotel Greece",
  ],
  alternates: {
    canonical: "/gl/single",
  },
  openGraph: {
    title: "Single Room - Hotel GL",
    description:
      "Explore our cozy single rooms at Hotel GL – perfect for solo travelers seeking comfort near the sea.",
    url: "https://www.ziskos-hotels.gr/gl/single",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/gldouble4.JPG",
        width: 1200,
        height: 630,
        alt: "Single Room at Hotel GL",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Single Room - Hotel GL",
    description:
      "Stay in a modern single room at Hotel GL, just steps from the beach in Paralia Katerinis.",
    images: ["/gldouble4.JPG"],
  },
};

const SingleRoomPage = () => {
  const t = useTranslations("gl");
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center p-8">
        {t("roomInfo.single.title")}
      </h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={imagesGL} />
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
          <Link href="/gl#accomodation" className={buttonVariants()}>
            <ArrowRight />
            {t("roomInfo.single.btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleRoomPage;
