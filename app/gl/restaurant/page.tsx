import PhotoCarousel from "@/components/PhotoCarousel";
import { restaurantGl } from "@/constants/constants";
import React from "react";

const RestaurantPage = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-5xl text-center p-8">Restaurant</h1>

      <div className="w-full h-full pt-4 min-h-screen max-w-6xl mx-auto mb-10">
        <div>
          <PhotoCarousel images={restaurantGl} />
        </div>

        <div className="flex flex-col items-start font-serif justify-center">
          <h3 className="pb-4 text-3xl">Description</h3>
          <p className="leading-8 pt-2">
            Come to our inviting indoor and outdoor dining room, with modern
            design and friendly environment! The guests can enjoy american-style
            buffet for breakfast. We also offer a wide variety of greek products
            like Feta cheese, traditional jams and homemade cakes.
          </p>
          <p className="leading-8 pt-2">
            For dinner, we offer a buffet style dinner with the option of two
            main courses and two sides. Accompanied you can find a range of 6 or
            7 salads in a salad bar, a wide variety of soups, that changes every
            day and cold fruits or home-made sweets to fulfill your dining
            experience. You can find greek traditional dishes like Musaka,
            Pastitsio and various fresh fish.
          </p>
          <p className="leading-8 pt-2">
            The dining room can host a high number of guests and our experienced
            staff is always there to accompany any need. Our two main principles
            when it comes to food are: 1. You will not stay hungry and 2. We
            don&apos;t sacrifice the quality of our products for the price.
          </p>
          <p className="leading-8 pt-2 font-semibold text-gray-400 ">
            ***Important notice: The dinner is avaiable for Groups only and we
            do not offer à la carte options.***
          </p>
        </div>
      </div>
    </section>
  );
};

export default RestaurantPage;
