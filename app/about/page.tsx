import { Check } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "24h Reception",
    description:
      "Our hotel has an open 24-hour reception, with 24-hour internal or external telephone access. Wake up service and 24-hour phone access.",
  },
  {
    id: 2,
    title: "Check In",
    description:
      "Check in time is after 14:00 In some cases your check in time can be earlier and it depends on the condition of the rooms. Please contact with Reception.",
  },
  {
    id: 3,
    title: "Luggage Transportation Service",
    description:
      "Ask Reception to carry your luggage in your room with extra charge.",
  },
  {
    id: 4,
    title: "Buffet Breakfast",
    description:
      "Breakfast is over 3 hours 07:15 – 10:30. In case of early departure, we can provide breakfast in special packs upon request. Please contact with Front Desk the day before for the prices.",
  },
  {
    id: 5,
    title: "Additional Children's Bed",
    description:
      "Additional children's bed can be placed in your room upon request from the Reception.",
  },
  {
    id: 6,
    title: "Room Breakfast",
    description:
      "Breakfast is available in the room as a morning breakfast service with extra charge at the front desk.",
  },
  {
    id: 7,
    title: "Express Check Out",
    description:
      "We offer Express Checkout service with breakfast box, early in the morning.",
  },
  {
    id: 8,
    title: "Dinner",
    description:
      "Dinner is served in our buffet-style indoor diner with extra charge.",
  },
  {
    id: 9,
    title: "Room Service",
    description: "Rοοm service: 24 hours with extra charge.",
  },
  {
    id: 10,
    title: "Housekeeping",
    description:
      "The Housekeeping team is at your disposal. All the common spaces are cleaned everyday with careful hygiene standards. All the rooms are cleaned and arranged every day until 15:00. If you need any extra towel, extra pillow or ironing board, please let us know. For additional cleaning services, please contact Front Desk. Housekeeping service is also available during night time as turndown service, providing our guests an extra room check. Turndown service is available with extra charge",
  },
  {
    id: 11,
    title: "No Smoking Rooms",
    description:
      "All the rooms in the hotel are NON-SMOKING. Therefore, we ask you kindly to smoke only at your balcony.",
  },
  {
    id: 12,
    title: "Dry Cleaning",
    description:
      "Offering – with extra charge- service of dry cleaning, washing and ironing.",
  },
  {
    id: 13,
    title: "Selection of Pillows",
    description:
      "We offer selection for 3 types of pillows. (hypoallergenic pillow is available upon request)",
  },
  {
    id: 14,
    title: "Hotel Towels",
    description:
      "Guests are kindly requested NOT to use the white bathroom towels to the beach. We have to inform you that in case that you will lose them you will have to pay the equivalent.",
  },
  {
    id: 15,
    title: "Air Condition & Heater",
    description:
      "All rooms are equipped with air conditioning for your comfort. Use the remote control to adjust the air condition. If you need help or have questions about the system, please contact with Reception.",
    important:
      "IMPORTANT NOTICE: You must keep the balcony door closed to make the A/C in operation.",
  },
  {
    id: 16,
    title: "Do not Disturb Sign",
    description:
      "Please hang the provided “Do NOT Disturb” sign outside your door if you need so. Notice only that if you wish that your room has to be cleaned you have to remove this card not later than 14:00 If you want not to receive any telephone calls in your room, please contact with Reception.",
    important:
      "IMPORTANT NOTICE: Please turn off the lights and the air conditions before you leave the room and leave your key at the reception.",
  },
  {
    id: 17,
    title: "Safe Deposit Boxes",
    description:
      "The hotel does not accept any responsibility for the loss of any valuables. We therefore advise all our guests to use the safe deposit boxes which are available in the Reception, free of charge.",
  },
  {
    id: 18,
    title: "Internet",
    description:
      "Each room has wireless internet access as well as all common areas of the hotel and is free of charge. If you are having problems with your connection, please contact with Reception.",
  },
  {
    id: 19,
    title: "Ironing Service",
    description: "Please contact with Reception for more information.",
  },
  {
    id: 20,
    title: "Aiport - Transfer",
    description:
      "MAKEDONIA Airport is approximately 80km from the hotel and takes 1hour by car. If you wish to organize a transfer from the airport, the Reception team is happy to assist you in this matter.",
  },
  {
    id: 21,
    title: "Bus Timetable",
    description: "Please contact with Reception for bus time and schedules.",
  },
  {
    id: 22,
    title: "Car Rental",
    description: "Please contact with Reception for more information.",
  },
  {
    id: 23,
    title: "Credit Cards",
    description:
      "The credit cards that are accepted are MasterCard and VISA at Reception (not in other departments). If you have questions about payment methods, please contact with Reception.",
  },
  {
    id: 24,
    title: "Check Out Time",
    description:
      "The departure time is 11:00am. Reception will help you to save your luggage if you want to spend more time in Paralia before leaving and make your departure shorter with the Quick Departure on request. Guests who wish to extend the checkout time should ask Reception one day before their departure with extra charge.",
  },
  {
    id: 25,
    title: "Business Center",
    description:
      "If you want to send a fax or make a copy, please contact your Reception to help you. There is shared computer and printing, faxing, copying and scanning for our customers.",
  },
  {
    id: 26,
    title: "Elevator",
    description:
      "Hotel has one (1) lift which connects the ground floor with the various other floors. We ask you to respect its weight and capacity limitations for your own safety and to ensure that they remain in good working order. For safety reasons please do not allow children under 12 years old to use the lift without be accompanied by an adult.",
  },
  {
    id: 27,
    title: "Tablet & Laptop",
    description:
      "Laptop and Tablet are available upon request in our Reception.",
  },
  {
    id: 28,
    title: "Newspapers & Magazines",
    description: "Daily newspapers and magazines are available.",
  },
  {
    id: 29,
    title: "Lost & Found",
    description: "Please contact the reception",
  },
  {
    id: 30,
    title: "Luggage",
    description:
      "For luggage storage please contact with Reception. Luggage room is available next to Reception.",
  },
  {
    id: 31,
    title: "Pets",
    description:
      "Pets are not allowed at the hotel, because there isn’t any suitable place for their stay.",
  },
  {
    id: 32,
    title: "First Aid & Doctor",
    description:
      "At the Reception there is a First Aid kit, with most vital medical supplies. There is also a possibility to arrange for a doctor visit at your room.",
  },
  {
    id: 33,
    title: "Voltage",
    description: "220 Volt",
  },
  {
    id: 34,
    title: "Pharmacy",
    description:
      "Our Reception will give you information concerning the pharmacies.",
  },
  {
    id: 35,
    title: "Hotel Guide",
    description: "Guide to hotel services in at least two languages (printed).",
  },
  {
    id: 35,
    title: "Customer Complaint Management System",
    description:
      "Customer complaint management system: Please send us your complaints to info@hotel-gl.r with the aim of independently investigating any issue. The hotel manager will send you a message within 72 hours and will contact you to manage your request. All correspondence and actions will exist in a related registry.",
  },
  {
    id: 36,
    title: "Fire Extinguishers & Danger Plan",
    description:
      "In case of a fire DO NOT panic. Call the reception from your room. Press the Fire Alarm button situated in the corridor. You will find Fire extinguishers on each floor. In case of fire do NOT use the elevator.",
  },
];

const rules = [
  {
    id: 1,
    title: "Swimming",
    description:
      "Please for your own safety do not swim to the sea if you have consumed food and alcohol. Wait at least 3 hours for safety reasons.",
  },
  {
    id: 2,
    title: "Road Accidents",
    description:
      "Please do not forget that a car accident can happen to anybody in any part of the world. If you hire a car or a motorbike, we strongly recommend you driving safely and certainly not after consuming alcohol. Please follow the road circulation code and use always helmet when drive motorbikes.",
  },
  {
    id: 3,
    title: "Earthquake",
    description:
      "Greece frequently suffers from earthquakes so if a such an earthquake appears when you are in your room, simply do not panic. Just lie on the floor next to the bed having the shape of embryo and wait there until the earthquake will pass. Do not use the elevator by any means.",
  },
];

const AboutPage = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <section className="container mt-10 mb-10">
        <div className="mb-10">
          <Image
            src="/paralia1.avif"
            alt="about-img"
            width={700}
            height={500}
            className="w-full h-[400px] object-contain"
          />
        </div>
        <div>
          <h1 className="pb-8 text-4xl">About Our Hotels</h1>
          <div className="leading-loose">
            <p className="text-[14px]">
              Welcome to our family-run hotels in the heart of Paralia Katerini,
              Greece, where warm hospitality meets professional service to
              ensure your stay is truly memorable. Situated just 100 meters from
              the sun-kissed beaches of this vibrant tourist destination, our
              three-star renovated hotel offers the perfect blend of comfort and
              convenience.
            </p>

            <p className="pt-4 text-[14px] ">
              With 23 in Hotel Hellas and 20 in Hotel GL thoughtfully designed
              rooms, including single, double, triple, and family
              accommodations,we cater to the diverse needs of our guests. Each
              room is equipped with modern amenities such as a 32-inch
              flat-screen TV, air conditioning, a fully equipped
              kitchenette(only in Hotel Hellas), and complimentary high-speed
              WiFi, ensuring a comfortable and enjoyable stay.
            </p>
            <p className="pt-4 text-[14px]">
              But our hospitality extends beyond the walls of our rooms. Start
              your day with a delicious breakfast served in our cozy restaurant,
              where you can also indulge in traditional Greek cuisine for
              dinner, arranged with our friendly reception staff. And when you
              need a break from the sun, our onsite cafeteria offers a relaxing
              atmosphere to enjoy coffee or other refreshing beverages
              throughout the day.
            </p>
            <p className="pt-4 text-[14px]">
              As a family-run business, we take pride in creating a welcoming
              environment where every guest feels like part of our extended
              family. Our dedicated team is committed to ensuring your holiday
              experience is nothing short of exceptional. While we prioritize
              comfort and familiarity, we continuously strive for excellence,
              seeking ways to enhance your stay and create unforgettable
              memories.
            </p>
            <p className="pt-4 text-[14px]">
              Whether you're seeking a relaxing beach getaway, exploring the
              rich history and culture of the region, or simply looking for a
              home away from home, we invite you to join our family at our
              Hotels.
            </p>
            <p className="pt-4 text-[14px]">
              Nestled in the heart of Paralia Katerini, Greece, our hotel serves
              as the perfect base for discovering the treasures of this
              enchanting country. Beyond the sun-drenched shores just steps away
              from our doorstep, there are numerous destinations nearby waiting
              to be explored.
            </p>
            <p className="pt-4 text-[14px]">
              Embark on a journey to the awe-inspiring monasteries of Meteora,
              where ancient cliff-top sanctuaries offer breathtaking views and a
              glimpse into the spiritual heritage of Greece. Or set sail to the
              idyllic island of Skiathos, renowned for its crystal-clear waters,
              pristine beaches, and charming villages.
            </p>
            <p className="pt-4 text-[14px]">
              For those with a penchant for urban adventures, the vibrant city
              of Thessaloniki beckons with its bustling markets, historical
              landmarks, and lively cultural scene. Immerse yourself in the
              rhythm of city life as you wander through its winding streets,
              sampling delectable Greek cuisine and soaking in the vibrant
              atmosphere.
            </p>
            <p className="pt-4 text-[14px]">
              Book your stay with us today and embark on a journey of
              relaxation, discovery, and genuine hospitality. We look forward to
              welcoming you to Paralia Katerini, where every moment is an
              opportunity to create lasting memories.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl">Some of the services that we offer</h1>
          {services.map((service) => (
            <div className="pt-4" key={service.id}>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <h2 className="text-xl text-primary"> {service.title}</h2>
              </div>
              <p className="pt-2 text-slate-400/70">{service.description}</p>
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
          {rules.map((rule) => (
            <div className="pt-4" key={rule.id}>
              <h2 className="text-xl text-red-500">{rule.title}</h2>
              <p className="pt-2 text-slate-400/70">{rule.description}</p>
              <div className="h-[1px] bg-slate-300 w-full mt-4"></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
