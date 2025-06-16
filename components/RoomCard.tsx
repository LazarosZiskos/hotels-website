import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface RoomCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  btnTitle: string;
}

const RoomCard = ({
  src,
  alt,
  title,
  description,
  href,
  btnTitle,
}: RoomCardProps) => {
  return (
    <div className="">
      <Card className="relative overflow-hidden min-h-[650px] border-0 shadow-2xl bg-card py-0">
        <div>
          <Image
            src={src}
            alt={alt}
            width={600}
            height={400}
            className="w-full h-100 object-fill"
          />
        </div>
        <CardContent className="">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-2xl text-card-foreground mb-3">
              {title}
            </h3>
            <p className="text-center text-muted-foreground font-serif mb-6">
              {description}
            </p>

            <Link
              href={href}
              className={
                buttonVariants() +
                "w-full mb-4 px-10 hover:scale-105 transition-all duration-300"
              }
            >
              {btnTitle}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomCard;
