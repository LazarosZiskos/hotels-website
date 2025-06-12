import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { destinations } from "@/constants/constants";

export default function page() {
  // Array of destinations with their details

  return (
    <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
      <section className="py-10 px-4">
        <div className="">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-7xl text-foreground mb-6">
              Explore Destinations
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover breathtaking locations near our hotels, from historic
              landmarks to natural wonders and exciting attractions.
            </p>
          </div>

          {/* Destinations List */}
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
                      alt={destination.name}
                      fill
                      className="object-cover rounded-tl-xl rounded-bl-xl"
                    />
                    <Badge className="absolute top-4 left-4 bg-amber-400 hover:bg-accent-foreground text-black">
                      Featured Destination
                    </Badge>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl tracking-wide text-card-foreground mb-4">
                      {destination.name}
                    </h2>
                    <p className="body-md text-muted-foreground font-serif mb-6">
                      {destination.description}
                    </p>

                    <div className="space-y-4 mb-6 font-serif">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 text-amber-400 h-5 mt-1" />
                        <div>
                          <p className="">Distance from our hotels:</p>
                          <p className="text-muted-foreground text-sm">
                            Hotel Hellas: {destination.distance.hotelHellas}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            Hotel GL: {destination.distance.hotelGL}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-heading font-medium text-card-foreground mb-3">
                        Recommended Activities
                      </h3>
                      <div className="flex flex-wrap gap-2 font-serif">
                        {destination.activities.map((activity, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-amber-200 text-accent-foreground rounded-full text-sm"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
