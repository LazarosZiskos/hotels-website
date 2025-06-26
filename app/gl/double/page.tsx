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
  title: "Double Room | Hotel GL - Ziskos Hotels",
  description:
    "Modern double rooms at Hotel GL in Paralia Katerinis, perfect for couples or two guests. Only 100m from the beach with renovated amenities.",
  keywords: [
    "double room Greece",
    "Hotel GL double room",
    "Paralia Katerini hotel room",
    "Greece couple hotel",
    "affordable hotel for couples",
    "Ziskos Hotels",
    "GL hotel room",
  ],
  alternates: {
    canonical: "/gl/double",
  },
  openGraph: {
    title: "Double Room - Hotel GL",
    description:
      "Enjoy a relaxing stay in our spacious double rooms at Hotel GL, just a few steps from the beach in Paralia Katerinis.",
    url: "https://www.ziskos-hotels.gr/gl/double",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/gldouble2.JPG",
        width: 1200,
        height: 630,
        alt: "Double Room at Hotel GL",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Double Room - Hotel GL",
    description:
      "Spacious and modern double rooms at Hotel GL in Paralia Katerinis. Great location, just 100m from the beach.",
    images: ["/gldouble2.JPG"],
  },
};

const DoubleRoomPage = () => {
  const t = useTranslations("gl");
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center p-8">
        {t("roomInfo.double.title")}
      </h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={imagesGL} />
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
          <Link href="/gl#accomodation" className={buttonVariants()}>
            <ArrowRight />
            {t("roomInfo.single.btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoubleRoomPage;
