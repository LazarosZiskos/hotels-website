import PhotoCarousel from "@/components/PhotoCarousel";
import { facilities, images } from "@/constants/constants";
import { CheckCheck } from "lucide-react";
import React from "react";

interface Facilities {
  text: string;
}

const page = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-5xl text-center p-8">Family Room</h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto ">
        <div>
          <PhotoCarousel images={images} />
        </div>

        <div className="flex flex-col items-start font-serif justify-center">
          <h3 className="pb-4 text-3xl">Description</h3>
          <p className="leading-8 pt-2">
            Create lasting memories with your loved ones in our spacious and
            inviting Family Room, designed to accommodate families of all sizes.
            Step into a generously proportioned space, beautifully appointed
            with modern furnishings and tasteful decor that creates a warm and
            welcoming ambiance. Stay connected with complimentary high-speed
            WiFi and enjoy entertainment on the 32-inch flat-screen TV with
            satellite channels, providing entertainment options for guests of
            all ages. Individual air conditioning ensures personalized comfort
            for every member of the family, creating a comfortable environment
            throughout your stay.
          </p>
          <p className="leading-8 pt-2">
            The fully equipped kitchenette offers the flexibility to prepare
            meals or snacks at your convenience, adding an extra layer of
            convenience to your stay. Refresh yourself in the en-suite bathroom,
            complete with all the essentials for your comfort and convenience.
            Step out onto your private balcony to enjoy the fresh air and
            stunning views, offering a peaceful retreat after a day of adventure
            and exploration.
          </p>
          <p className="leading-8 pt-2">
            With ample space and modern amenities, our Family Room is the
            perfect choice for a memorable stay that brings families together
            and creates cherished moments that last a lifetime.
          </p>
        </div>
        <h3 className="pb-4 mt-10 font-serif text-3xl">Room Facilities</h3>
        <div className="items-start font-serif mb-10">
          <ul className="grid md:grid-cols-3 gap-2">
            {facilities.map((item: Facilities, index) => (
              <li key={index} className="flex gap-2">
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
