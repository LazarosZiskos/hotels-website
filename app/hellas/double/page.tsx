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
  title: "Double Rooms | Hotel Hellas - Ziskos Hotels",
  description:
    "Spacious and modern double rooms at Hotel Hellas in Paralia Katerinis. Ideal for couples or friends, just 100m from the beach.",
  keywords: [
    "double hotel room Greece",
    "Hotel Hellas double room",
    "couples accommodation Paralia",
    "Ziskos Hotels",
    "budget double room",
    "Paralia Katerini hotels",
    "modern hotel rooms Greece",
  ],
  alternates: {
    canonical: "/hellas/double",
  },
  openGraph: {
    title: "Hotel Hellas Double Rooms",
    description:
      "Stay in comfort with our modern double rooms, only 100m from the sea in Paralia Katerini.",
    url: "https://www.ziskos-hotels.gr/hellas/double",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/hellasdouble2.jpg",
        width: 1200,
        height: 630,
        alt: "Double Room at Hotel Hellas",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Double Rooms - Hotel Hellas",
    description:
      "Comfortable and affordable double rooms at Hotel Hellas. Close to the beach and perfect for couples.",
    images: ["/hellasdouble2.jpg"],
  },
};

const HellasDoubleRoomPage = () => {
  const t = useTranslations("hellas");
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center p-8">
        {t("roomInfo.double.title")}
      </h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={imagesHellas} />
        </div>

        <div className="flex flex-col items-start font-serif justify-center">
          <h3 className="pb-4 text-3xl">{t("roomInfo.double.description")}</h3>
          <p className="leading-8 pt-2">{t("roomInfo.double.para1")}</p>
          <p className="leading-8 pt-2">{t("roomInfo.double.para2")}</p>
          <p className="leading-8 pt-2">{t("roomInfo.double.para3")}</p>
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

export default HellasDoubleRoomPage;
