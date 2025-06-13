"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { destinations } from "@/constants/constants";
import { useTranslations } from "next-intl";

export default function DestinationsPage() {
  const t = useTranslations("Destinations");

  return (
    <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto">
      <section className="py-10 px-4">
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
    </div>
  );
}
