"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import RotatingText from "./RotatingText";

const Hero = () => {
  return (
    <>
      <div className="w-full h-full min-h-screen">
        <section className=" p-4 pb-10">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center max-w-6xl">
              <h1 className="md:text-7xl text-4xl leading-[72px] md:w-[1000px] tracking-wide font-serif mt-10">
                <span className="text-primary font-semibold">
                  <RotatingText
                    texts={[
                      "Καλημέρα",
                      "Good Morning",
                      "Dobar Dan",
                      "Bună dimineaţa",
                      "Dobre Utro",
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />
                </span>{" "}
                from Paralia
              </h1>
              <p className="text-sm md:text-md text-muted-foreground/80 tracking-wider font-serif pt-4">
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
                <Badge className="absolute font-serif top-4 left-4 text-black font-bold bg-primary">
                  3-Star Hotel
                </Badge>
              </div>
              <CardContent className="">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-center text-2xl text-card-foreground mb-3">
                    Hotel Hellas
                  </h3>
                  <p className="text-center text-muted-foreground font-serif mb-6">
                    A family hotel near the center of Paralia, <br /> to host
                    all your favourite moments.
                  </p>

                  <Link
                    href="/hellas"
                    className={
                      buttonVariants() +
                      "w-full mb-4 px-10 hover:scale-105 transition-all duration-300"
                    }
                  >
                    Explore Hotel Hellas
                  </Link>
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
                <Badge className="absolute font-serif top-4 left-4 text-secondary font-bold bg-primary/20">
                  3-Star Hotel
                </Badge>
              </div>
              <CardContent>
                <div className="flex flex-col items-center justify-center mb-5">
                  <h3 className="text-center text-2xl text-card-foreground mb-3">
                    Hotel GL
                  </h3>
                  <p className="text-center font-serif text-muted-foreground mb-6">
                    The perfect balance between luxury <br /> and comfort
                  </p>
                  <Link
                    href="/gl"
                    className={
                      buttonVariants() +
                      "w-full mb-4 px-10 hover:scale-105 transition-all duration-300"
                    }
                  >
                    Explore Hotel GL
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <section className="pt-10 bg-[#F3F4F6] p-4 pb-10" id="location">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-7xl leading-[72px] tracking-wide mt-10">
            LOCATION
          </h1>
          <p className="text-sm md:text-md text-muted-foreground/80 font-serif tracking-wider pt-4 mb-6 text-center">
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
              <div className="flex flex-col items-center justify-center mb-5 h-[220px]">
                <h3 className="text-center text-2xl text-card-foreground mb-3">
                  Paralia
                </h3>
                <p className="text-center h-[144px] font-serif text-muted-foreground mb-6">
                  Where the Mythical Olympus mountain meets the Aegean blue.
                  <br />A land full of attractions and benefits for your
                  holidays!
                </p>
                <Link
                  href="/destinations"
                  className={
                    buttonVariants() +
                    "w-full px-10 hover:scale-105 transition-all duration-300"
                  }
                >
                  More about Paralia
                </Link>
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
                <p className="text-center font-serif text-muted-foreground mb-6">
                  Explore all greeks finest destinations.
                  <br />
                  From Meteora, to Athens to many popular destinations nearby.
                  <br />
                  We have it all!
                </p>
                <Link
                  href="/destinations"
                  className={
                    buttonVariants() +
                    "w-full px-10 hover:scale-105 transition-all duration-300"
                  }
                >
                  Nearby Destinations
                </Link>
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
                <p className="text-center text-muted-foreground font-serif mb-6">
                  Located near the center of Paralia.
                  <br />
                  In a vibrant neighbourhood full of hotels, restaurants and
                  shops.
                  <br />
                  Just under 100 meters from the beach!
                </p>
                <Link
                  href="https://www.google.com/maps/dir//40.2684934,22.5962151/@40.2684941,22.596043,20.57z/data=!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D"
                  className={
                    buttonVariants() +
                    "w-full px-10 hover:scale-105 transition-all duration-300"
                  }
                  target="_blank"
                >
                  Find us on Google Maps
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Hero;
