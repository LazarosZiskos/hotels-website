import ImagePreview from "@/components/ImagePreview";
import PhotoCarousel from "@/components/PhotoCarousel";
import { facilities, imagesGL } from "@/constants/constants";
import { CheckCheck } from "lucide-react";
import React from "react";

interface Facilities {
  text: string;
}

const page = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-5xl text-center p-8">Single Room</h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={imagesGL} />
          {/* <ImagePreview images={imagesGL} /> */}
        </div>

        <div className="flex flex-col items-start font-serif justify-center">
          <h3 className="pb-4 text-3xl">Description</h3>
          <p className="leading-8 pt-2">
            Escape to serenity in our inviting Double Room, designed to provide
            couples with a haven of relaxation and comfort. Step into a spacious
            and elegantly furnished room, featuring modern amenities and
            tasteful decor. Stay connected with complimentary high-speed WiFi
            and unwind in front of the 32-inch flat-screen TV with satellite
            channels, offering a wide range of entertainment options. Indulge in
            the convenience of individual air conditioning, ensuring
            personalized comfort throughout your stay.
          </p>
          <p className="leading-8 pt-2">
            The fully equipped kitchenette allows you to prepare your own meals
            or snacks, adding an extra layer of convenience to your experience.
            Refresh yourself in the en-suite bathroom, complete with all the
            essentials for your comfort and convenience. Step out onto your
            private balcony to enjoy the fresh air and beautiful views,
            providing the perfect backdrop for moments of relaxation and
            reflection.
          </p>
          <p className="leading-8 pt-2">
            Whether youare here for a romantic getaway or a rejuvenating
            retreat, our Double Room offers the perfect blend of style and
            comfort for an unforgettable stay that leaves you refreshed and
            revitalized.
          </p>
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
      </div>
    </section>
  );
};

export default page;
