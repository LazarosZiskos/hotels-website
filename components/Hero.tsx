"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import ReactRotatingText from "react-rotating-text";

const Hero = () => {
  return (
    <>
      <div className="w-full h-full px-0 min-h-screen">
        <section className="bg-[#F9FAFB]">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center max-w-4xl">
              <h1 className="text-7xl leading-[72px] md:w-[1000px] tracking-wide mt-10">
                <span className="text-amber-400">
                  <ReactRotatingText
                    items={[
                      "Καλημέρα",
                      "Good Morning",
                      "Dobar Dan",
                      "Bună dimineaţa",
                      "Dobre Utro",
                    ]}
                  />
                </span>{" "}
                from Paralia
              </h1>
              <p className="text-muted-foreground/80 tracking-wider pt-4">
                Choose from one of our three-star Hotels
                <br /> and make this summer unforgetable!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
              <div>
                <Image
                  src="/hellas1.jpg"
                  alt="hotel-hellas"
                  width={600}
                  height={400}
                  className="w-full h-100 object-fill"
                />
                <Badge className="absolute top-4 left-4 text-black font-bold bg-amber-200">
                  3-Star Hotel
                </Badge>
              </div>
              <CardContent className="">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-center text-2xl text-card-foreground mb-3">
                    Hotel Hellas
                  </h3>
                  <p className="text-center text-muted-foreground mb-6">
                    A family hotel near the center of Paralia, <br /> to host
                    all your favourite moments.
                  </p>
                  <Button className="w-full">
                    <Link href="/hellas">Explore Hotel Hellas</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
              <div>
                <Image
                  src="/gl1.jpeg"
                  alt="hotel-gl"
                  width={600}
                  height={400}
                  className="w-full h-100 object-fill"
                />
                <Badge className="absolute top-4 left-4 text-black font-bold bg-amber-600">
                  3-Star Hotel
                </Badge>
              </div>
              <CardContent>
                <div className="flex flex-col items-center justify-center mb-5">
                  <h3 className="text-center text-2xl text-card-foreground mb-3">
                    Hotel GL
                  </h3>
                  <p className="text-center text-muted-foreground mb-6">
                    The perfect balance between luxury <br /> and confort
                  </p>
                  <Button className="w-full">
                    <Link href="/gl">Explore Hotel GL</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <section className="pt-10 bg-[#F3F4F6] p-4 pb-10" id="location">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl leading-[72px] tracking-wide mt-10">
            LOCATION
          </h1>
          <p className="text-muted-foreground/80 tracking-wider pt-4 mb-6 text-center">
            Our hotels are located in a vibrant neighbourhood <br /> near the
            center of Paralia!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
            <div>
              <Image
                src="/paralia1.avif"
                alt="paralia-katerini"
                width={600}
                height={400}
                className="w-full h-100 object-fill"
              />
            </div>
            <CardContent>
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-center text-2xl text-card-foreground mb-3">
                  Paralia
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                  Where the Mythical Olympus mountain meets the Aegean blue.
                  <br />A land full of attractions and benefits for your
                  holidays!
                </p>
                <Button className="w-full">
                  <Link href="/destinations">Read More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
            <div>
              <Image
                src="/meteora1.avif"
                alt="meteora"
                width={600}
                height={400}
                className="w-full h-100 object-fill"
              />
            </div>
            <CardContent>
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-center text-2xl text-card-foreground mb-3">
                  Sightseeing
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                  Explore all greeks finest destinations.
                  <br />
                  From Meteora, to Athens to many popular destinations nearby.
                  <br />
                  We have it all!
                </p>
                <Button className="w-full">
                  <Link href="/destinations">Explore Destinations</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-card py-0">
            <div>
              <Image
                src="/location1.png"
                alt="maps-location"
                width={600}
                height={400}
                className="w-full h-100 object-fill"
              />
            </div>
            <CardContent>
              <div className="flex flex-col items-center justify-center mb-5">
                <h3 className="text-center text-2xl text-card-foreground mb-3">
                  Our Location
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                  Located near the center of Paralia.
                  <br />
                  In a vibrant neighbourhood full of hotels, restaurants and
                  shops.
                  <br />
                  Just under 100 meters from the beach!
                </p>
                <Button className="w-full">
                  <Link href="/contact">Find Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Hero;
