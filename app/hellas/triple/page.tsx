import PhotoCarousel from "@/components/PhotoCarousel";
import { facilities, images } from "@/constants/constants";
import { Check, CheckCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Facilities {
  text: string;
}

const page = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-5xl text-center p-8">Triple Room</h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={images} />
        </div>

        <div className="flex flex-col items-start font-serif justify-center">
          <h3 className="pb-4 text-3xl">Description</h3>
          <p className="leading-8 pt-2">
            Experience the ultimate in comfort and convenience in our spacious
            Triple Room, ideal for families or small groups seeking a memorable
            stay. Step into a beautifully renovated space, tastefully decorated
            with modern furnishings and thoughtful touches that create a
            welcoming atmosphere. Stay connected with complimentary high-speed
            WiFi and enjoy entertainment on the 32-inch flat-screen TV with
            satellite channels, providing endless entertainment options for
            guests of all ages. Keep cool and comfortable with individual air
            conditioning, ensuring a personalized environment throughout your
            stay.
          </p>
          <p className="leading-8 pt-2">
            The fully equipped kitchenette allows you to prepare delicious meals
            or snacks, providing added flexibility and convenience for your
            stay. Rejuvenate in the en-suite bathroom, complete with all the
            amenities you need for a refreshing shower. Step out onto your
            private balcony to enjoy the fresh air and stunning views, offering
            a peaceful retreat after a day of exploration.
          </p>
          <p className="leading-8 pt-2">
            With ample space and modern amenities, our Triple Room is the
            perfect choice for a memorable stay filled with comfort and
            convenience that exceeds your expectations.
          </p>
        </div>
        <h3 className="pb-4 mt-10 font-serif text-3xl">Room Facilities</h3>
        <div className="items-start font-serif mb-10">
          <ul className="grid md:grid-cols-3 gap-2">
            {facilities.map((item: Facilities) => (
              <li key={item.text} className="flex gap-2">
                <CheckCheck className="text-primary" />
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
