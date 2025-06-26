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
  title: "Triple Room | Hotel GL - Ziskos Hotels",
  description:
    "Comfortable triple rooms at Hotel GL in Paralia Katerinis, ideal for small families or groups of three. Just 100m from the beach.",
  keywords: [
    "triple room Greece",
    "Hotel GL triple room",
    "Paralia Katerini hotel room",
    "family room Greece",
    "affordable hotel for families",
    "Ziskos Hotels",
    "GL hotel triple",
  ],
  alternates: {
    canonical: "/gl/triple",
  },
  openGraph: {
    title: "Triple Room - Hotel GL",
    description:
      "Book a spacious triple room at Hotel GL, just 100m from the beach in Paralia Katerinis. Ideal for families or groups of three.",
    url: "https://www.ziskos-hotels.gr/gl/triple",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/gl-triple3.JPG",
        width: 1200,
        height: 630,
        alt: "Triple Room at Hotel GL",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triple Room - Hotel GL",
    description:
      "Stay in our modern triple rooms at Hotel GL, perfect for families or friends. Only 100m from the sea in Paralia Katerinis.",
    images: ["/gl-triple3.JPG"],
  },
};

const TripleRoomPage = () => {
  const t = useTranslations("gl");
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center p-8">
        {t("roomInfo.triple.title")}
      </h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={imagesGL} />
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
          <Link href="/gl#accomodation" className={buttonVariants()}>
            <ArrowRight />
            {t("roomInfo.single.btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TripleRoomPage;
