"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ReactRotatingText = require("react-rotating-text");

const Hero = () => {
  return (
    <>
      <div className="bg-[#F9FAFB] w-full h-full px-0">
        <section className="">
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
              <h2 className="text-2xl pt-6 tracking-normal">
                Make this summer unforgetable!
              </h2>
              <p className="text-muted-foreground tracking-wide ">
                Choose from one of our three-star Hotels
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
    </>
  );
};

export default Hero;
