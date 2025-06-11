import PhotoCarousel from "@/components/PhotoCarousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { images } from "@/constants/constants";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto mt-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-1/2">
          <Badge className="font-bold mb-2 bg-amber-200 text-black">
            3-Star Hotel
          </Badge>
          <h1 className="text-6xl pb-4 tracking-wider">Hotel Hellas</h1>
          <p className="text-muted-foreground tracking-wider leading-8 w-[450px]">
            Experience our beautiful hotel located in the heart of the city.
            Hotel Hellas a variety of rooms for all categories of travellers
            from solo travelers, couples and families.
          </p>
          <div className="flex items-center pt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <p className="pl-4 text-muted-foreground tracking-wide">
              4.6/5 Guest Rating
            </p>
          </div>
          <Link href="/contact" className="cursor-pointer">
            <Button className="mt-8 w-[450px]">Book Now</Button>
          </Link>
        </div>
        <div className="w-1/2 h-full">
          <Image
            src="/hellas1.jpg"
            alt="hotel-hellas"
            width={500}
            height={300}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-35 flex flex-col justify-center items-center gap-8">
        <h1 className="text-6xl tracking-wider">Our Accomodation</h1>
        <p className="text-center text-muted-foreground tracking-wider leading-7">
          Choose from our confortable double, triple and quadruple rooms.
          <br />
          We offer street view and mountain view rooms.
        </p>

        <div className="flex items-center justify-center gap-8 mb-10">
          <div className="flex items-center justify-center gap-4">
            <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
            <span className="text-muted-foreground text-sm tracking-wide">
              Double Rooms
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-3 h-3 bg-amber-800 rounded-full"></div>
            <span className="text-muted-foreground text-sm tracking-wide">
              Triple Rooms
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
            <span className="text-muted-foreground text-sm tracking-wide">
              Quadruple Rooms
            </span>
          </div>
        </div>
        <PhotoCarousel images={images} />
      </div>
    </section>
  );
};

export default page;
