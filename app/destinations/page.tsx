import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { destinations } from "@/constants/constants";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations Near Ziskos Hotels | Daily Trips in Greece",
  description:
    "Take exciting daily trips from Paralia Katerini to iconic destinations like Mount Olympus, Meteora, Skiathos, Thessaloniki, Athens and Waterland. Discover the beauty of Greece during your stay at Ziskos Hotels.",
  keywords: [
    "Daily trips from Paralia Katerini",
    "Day trips Greece",
    "Mount Olympus tour",
    "Meteora from Paralia",
    "Thessaloniki day trip",
    "Skiathos ferry tour",
    "Waterland Thessaloniki",
    "Ziskos Hotels excursions",
    "Greek sightseeing",
    "Near Hotel Hellas GL",
  ],
  metadataBase: new URL("https://www.ziskos-hotels.gr"),
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: "Destinations Near Ziskos Hotels | Day Trips in Greece",
    description:
      "Visit Mount Olympus, Meteora, Skiathos, Thessaloniki, Athens & more – all within reach from Ziskos Hotels in Paralia Katerinis.",
    url: "https://www.ziskos-hotels.gr/destinations",
    siteName: "Ziskos Hotels",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Day trips near Ziskos Hotels",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destinations Near Ziskos Hotels",
    description:
      "Explore iconic Greek sights like Olympus & Meteora – perfect for day trips during your stay at Ziskos Hotels.",
    images: ["/og-cover.png"],
  },
};

export default function DestinationsPage() {
  const t = useTranslations("Destinations");

  return (
    <div className="w-full h-full pt-4 min-h-screen">
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-6xl text-foreground mb-6">
            {t("title")}
          </h1>
          <p className="text-muted-foreground text-sm md:text-md max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-16">
          {destinations.map((destination, index) => (
            <Card key={index} className="border-0 py-0 shadow-xl">
              <div
                className={`grid md:grid-cols-2 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative h-80 md:h-auto">
                  <Image
                    src={destination.image || "/gl1.jpeg"}
                    alt={t(`${destination.key}.name`)}
                    fill
                    className="object-cover rounded-tl-xl rounded-bl-xl"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-400 hover:bg-accent-foreground text-black">
                    {t("featured")}
                  </Badge>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl tracking-wide text-card-foreground mb-4">
                    {t(`${destination.key}.name`)}
                  </h2>
                  <p className="body-md text-sm md:text-md text-muted-foreground font-serif mb-6">
                    {t(`${destination.key}.description`)}
                  </p>

                  <div className="space-y-4 mb-6 font-serif">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 text-amber-400 h-5 mt-1" />
                      <div>
                        <p className="font-semibold">{t("distance.title")}</p>
                        <p className="text-muted-foreground text-sm">
                          {t("distance.hellas")}:{" "}
                          {destination.distance.hotelHellas}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {t("distance.gl")}: {destination.distance.hotelGL}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-medium text-card-foreground mb-3">
                      {t("activities.title")}
                    </h3>
                    <div className="flex flex-wrap gap-2 font-serif">
                      {destination.activities.map((activity, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-amber-200 text-accent-foreground rounded-full text-sm"
                        >
                          {t(`activities.${activity}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#262626"
          fillOpacity="1"
          d="M0,256L60,261.3C120,267,240,277,360,277.3C480,277,600,267,720,229.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
