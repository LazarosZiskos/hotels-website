import { Check } from "lucide-react";
import Image from "next/image";
import { rules, services } from "../../constants/constants";

interface serviceProps {
  id: number;
  title: string;
  description: string;
  important?: string;
}

interface rulesProps {
  id: number;
  title: string;
  description: string;
}

const AboutPage = () => {
  return (
    <main>
      <section className="container mt-10 p-4 mb-10 max-w-6xl mx-auto">
        <div className="mb-10">
          <Image
            src="/paralia1.avif"
            alt="about-img"
            width={700}
            height={500}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
        <div>
          <h1 className="pb-8 text-4xl">About Our Hotels</h1>
          <div className="leading-loose">
            <p className="text-[14px] font-serif">
              Welcome to our family-run hotels in the heart of Paralia Katerini,
              Greece, where warm hospitality meets professional service to
              ensure your stay is truly memorable. Situated just 100 meters from
              the sun-kissed beaches of this vibrant tourist destination, our
              three-star renovated hotel offers the perfect blend of comfort and
              convenience.
            </p>

            <p className="pt-4 text-[14px] font-serif ">
              With 23 in Hotel Hellas and 20 in Hotel GL thoughtfully designed
              rooms, including single, double, triple, and family
              accommodations,we cater to the diverse needs of our guests. Each
              room is equipped with modern amenities such as a 32-inch
              flat-screen TV, air conditioning, a fully equipped
              kitchenette(only in Hotel Hellas), and complimentary high-speed
              WiFi, ensuring a comfortable and enjoyable stay.
            </p>
            <p className="pt-4 text-[14px] font-serif">
              But our hospitality extends beyond the walls of our rooms. Start
              your day with a delicious breakfast served in our cozy restaurant,
              where you can also indulge in traditional Greek cuisine for
              dinner, arranged with our friendly reception staff. And when you
              need a break from the sun, our onsite cafeteria offers a relaxing
              atmosphere to enjoy coffee or other refreshing beverages
              throughout the day.
            </p>
            <p className="pt-4 text-[14px] font-serif">
              As a family-run business, we take pride in creating a welcoming
              environment where every guest feels like part of our extended
              family. Our dedicated team is committed to ensuring your holiday
              experience is nothing short of exceptional. While we prioritize
              comfort and familiarity, we continuously strive for excellence,
              seeking ways to enhance your stay and create unforgettable
              memories.
            </p>
            <p className="pt-4 text-[14px] font-serif">
              Whether you&apos; re seeking a relaxing beach getaway, exploring
              the rich history and culture of the region, or simply looking for
              a home away from home, we invite you to join our family at our
              Hotels.
            </p>
            <p className="pt-4 text-[14px] font-serif">
              Nestled in the heart of Paralia Katerini, Greece, our hotel serves
              as the perfect base for discovering the treasures of this
              enchanting country. Beyond the sun-drenched shores just steps away
              from our doorstep, there are numerous destinations nearby waiting
              to be explored.
            </p>
            <p className="pt-4 text-[14px] font-serif">
              Embark on a journey to the awe-inspiring monasteries of Meteora,
              where ancient cliff-top sanctuaries offer breathtaking views and a
              glimpse into the spiritual heritage of Greece. Or set sail to the
              idyllic island of Skiathos, renowned for its crystal-clear waters,
              pristine beaches, and charming villages.
            </p>
            <p className="pt-4 text-[14px] font-serif">
              For those with a penchant for urban adventures, the vibrant city
              of Thessaloniki beckons with its bustling markets, historical
              landmarks, and lively cultural scene. Immerse yourself in the
              rhythm of city life as you wander through its winding streets,
              sampling delectable Greek cuisine and soaking in the vibrant
              atmosphere.
            </p>
            <p className="pt-4 text-[14px] font-serif">
              Book your stay with us today and embark on a journey of
              relaxation, discovery, and genuine hospitality. We look forward to
              welcoming you to Paralia Katerini, where every moment is an
              opportunity to create lasting memories.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl">Some of the services that we offer</h1>
          {services.map((service: serviceProps) => (
            <div className="pt-4" key={service.id}>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <h2 className="text-xl text-primary"> {service.title}</h2>
              </div>
              <p className="pt-2 text-slate-400/70 font-serif">
                {service.description}
              </p>
              {service.important && (
                <p className="pt-2 text-red-600">{service.important}</p>
              )}
              <div className="h-[1px] bg-slate-300 w-full mt-4"></div>
            </div>
          ))}
          <h1 className="text-xl italic pt-4">
            *Hotel management has the right to make changes in all facilities
            and the services listed in this description without a prior notice.*
          </h1>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl">Safety Rules</h1>
          {rules.map((rule: rulesProps) => (
            <div className="pt-4" key={rule.id}>
              <h2 className="text-xl text-red-500">{rule.title}</h2>
              <p className="pt-2 text-slate-400/70 font-serif">
                {rule.description}
              </p>
              <div className="h-[1px] bg-slate-300 w-full mt-4"></div>
            </div>
          ))}
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#262626"
          fillOpacity="1"
          d="M0,256L60,261.3C120,267,240,277,360,277.3C480,277,600,267,720,229.3C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
};

export default AboutPage;
