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
  title: "Triple Rooms | Hotel Hellas - Ziskos Hotels",
  description:
    "Comfortable and spacious triple rooms at Hotel Hellas, ideal for families or small groups. Located just 100m from the beach in Paralia Katerinis.",
  keywords: [
    "triple hotel room Greece",
    "Hotel Hellas triple room",
    "family hotel room Paralia",
    "Ziskos Hotels",
    "3-bed room in Paralia Katerini",
    "Greek seaside hotels",
    "affordable family hotel Greece",
  ],
  alternates: {
    canonical: "/hellas/triple",
  },
  openGraph: {
    title: "Hotel Hellas Triple Rooms",
    description:
      "Ideal for families and small groups, our triple rooms offer great comfort near the beach.",
    url: "https://www.ziskos-hotels.gr/hellas/triple",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/hellastriple1.jpg",
        width: 1200,
        height: 630,
        alt: "Triple Room at Hotel Hellas",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triple Rooms - Hotel Hellas",
    description:
      "Spacious and cozy triple rooms near the beach. Perfect for families and friends.",
    images: ["/hellastriple1.jpg"],
  },
};

const HellasTripleRoomPage = () => {
  const t = useTranslations("hellas");
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center p-8">
        {t("roomInfo.triple.title")}
      </h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={imagesHellas} />
        </div>

        <div className="flex flex-col items-start font-serif justify-center">
          <h3 className="pb-4 text-3xl">{t("roomInfo.triple.description")}</h3>
          <p className="leading-8 pt-2">{t("roomInfo.triple.para1")}</p>
          <p className="leading-8 pt-2">{t("roomInfo.triple.para2")}</p>
          <p className="leading-8 pt-2">{t("roomInfo.triple.para3")}</p>
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

export default HellasTripleRoomPage;
