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
  title: "Family Room | Hotel GL - Ziskos Hotels",
  description:
    "Spacious family rooms (quadruple) at Hotel GL in Paralia Katerinis. Ideal for families and groups, just 100m from the beach.",
  keywords: [
    "family hotel room Greece",
    "quadruple room Paralia",
    "Hotel GL family room",
    "Ziskos Hotels",
    "Paralia Katerini rooms",
    "budget family hotel Greece",
    "accommodation for 4 people Greece",
  ],
  alternates: {
    canonical: "/gl/quadruple",
  },
  openGraph: {
    title: "Family Room - Hotel GL",
    description:
      "Enjoy your stay in our large family rooms at Hotel GL. Perfect for families or groups, located near the beach in Paralia Katerinis.",
    url: "https://www.ziskos-hotels.gr/gl/quadruple",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/gl-double5.JPG",
        width: 1200,
        height: 630,
        alt: "Family Room at Hotel GL",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Room - Hotel GL",
    description:
      "Spacious quadruple rooms for families at Hotel GL in Paralia Katerinis. Just 100m from the sea, perfect for summer holidays.",
    images: ["/gl-double5.JPG"],
  },
};

const QuadRoomPage = () => {
  const t = useTranslations("gl");
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center p-8">
        {t("roomInfo.family.title")}
      </h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={imagesGL} />
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
          <Link href="/gl#accomodation" className={buttonVariants()}>
            <ArrowRight />
            {t("roomInfo.single.btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuadRoomPage;
