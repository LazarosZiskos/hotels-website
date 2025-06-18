import { Clock, Coffee, Package, Shield, Utensils, Wifi } from "lucide-react";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Hotel Hellas",
    href: "/hellas",
  },
  {
    id: 4,
    title: "Hotel GL",
    href: "/gl",
  },
  {
    id: 5,
    title: "Destinations",
    href: "/destinations",
  },
  {
    id: 6,
    title: "Contact",
    href: "/contact",
  },
];

export const paraliaImages = [
  {
    src: "/paralia1.avif",
    alt: "paralia-photo",
  },
  {
    src: "/paralia3.jpg",
    alt: "paralia-photo",
  },
  {
    src: "/paralia4.jpg",
    alt: "paralia-photo",
  },
  {
    src: "/paralia5.jpg",
    alt: "paralia-photo",
  },
  {
    src: "/paralia2.jpg",
    alt: "paralia-photo",
  },
];

export const imagesGL = [
  {
    src: "/gl-reception1.jpg",
    alt: "gl-reception",
  },
  {
    src: "/gl-double1.jpg",
    alt: "gl-double1",
  },
  {
    src: "/gl-double2.jpg",
    alt: "gl-double2",
  },
  {
    src: "/gl-double3.jpg",
    alt: "gl-double3",
  },
  {
    src: "/gl-double4.jpg",
    alt: "gl-double4",
  },
  {
    src: "/gl-double5.jpg",
    alt: "gl-double",
  },
  {
    src: "/gl-double6.jpg",
    alt: "gl-double",
  },
  {
    src: "/gl-double7.jpg",
    alt: "hellas-quadruple6",
  },
  {
    src: "/gl-general1.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-general2.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-general3.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-general5.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-general6.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-general7.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-general7.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-single1.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-triple1.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-triple2.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-triple3.jpg",
    alt: "gl-room",
  },
  {
    src: "/gl-out1.jpg",
    alt: "gl-outside",
  },
  {
    src: "/gl-out2.jpg",
    alt: "gl-outside",
  },
];

export const imagesHellas = [
  {
    src: "/hellasdouble1.jpg",
    alt: "hellas-double1",
  },
  {
    src: "/hellasdouble2.jpg",
    alt: "hellas-double2",
  },
  {
    src: "/hellasquad1.jpg",
    alt: "hellas-quadruple1",
  },
  {
    src: "/hellasquad2.jpg",
    alt: "hellas-quadruple2",
  },
  {
    src: "/hellasquad3.jpg",
    alt: "hellas-quadruple3",
  },
  {
    src: "/hellasquad5.jpg",
    alt: "hellas-quadruple5",
  },
  {
    src: "/hellasquad6.jpg",
    alt: "hellas-quadruple6",
  },
  {
    src: "/hellasquad7.jpg",
    alt: "hellas-quadruple7",
  },
  {
    src: "/hellasquad8.jpg",
    alt: "hellas-quadruple8",
  },
  {
    src: "/hellasquad9.jpg",
    alt: "hellas-quadruple9",
  },
  {
    src: "/hellassingle1.jpg",
    alt: "hellas-single1",
  },
  {
    src: "/hellastriple1.jpg",
    alt: "hellas-triple1",
  },
  {
    src: "/hellastriple2.jpg",
    alt: "hellas-triple2",
  },
  {
    src: "/hellastriple3.jpg",
    alt: "hellas-triple3",
  },
  {
    src: "/hellas-bathroom2.jpg",
    alt: "hellas-wc2",
  },
  {
    src: "/hellas1.jpg",
    alt: "hellas-wc2",
  },
];

export const amenities = [
  {
    icon: Wifi,
    key: "wifi",
  },
  {
    icon: Package,
    key: "storage",
  },
  {
    icon: Clock,
    key: "reception",
  },
  {
    icon: Shield,
    key: "safetyBox",
  },
  {
    icon: Coffee,
    key: "cafeteria",
  },
  {
    icon: Utensils,
    key: "restaurant",
  },
];

export const destinations = [
  {
    key: "olympus",
    image: "/olymp1.jpg",
    distance: {
      hotelHellas: "2 hours drive",
      hotelGL: "2 hours drive",
    },
    activities: ["hiking", "climbing", "photography", "mythology"],
  },
  {
    key: "skiathos",
    image: "/skiathos1.jpg",
    distance: {
      hotelHellas: "Ferry access available",
      hotelGL: "Ferry access available",
    },
    activities: ["beach", "waterSports", "islandHopping", "seafood"],
  },
  {
    key: "meteora",
    image: "/meteora1.avif",
    distance: {
      hotelHellas: "3.5 hours drive",
      hotelGL: "3.5 hours drive",
    },
    activities: ["monastery", "rockClimbing", "sunset", "photography"],
  },
  {
    key: "thessaloniki",
    image: "/thessaloniki1.jpg",
    distance: {
      hotelHellas: "1 hour drive",
      hotelGL: "1 hour drive",
    },
    activities: ["history", "shopping", "culinary", "culture"],
  },
  {
    key: "athens",
    image: "/athens1.jpg",
    distance: {
      hotelHellas: "6 hours drive",
      hotelGL: "6 hours drive",
    },
    activities: ["archaeology", "museums", "urban", "dining"],
  },
  {
    key: "waterland",
    image: "/waterland1.jpg",
    distance: {
      hotelHellas: "1 hour drive",
      hotelGL: "1 hour drive",
    },
    activities: ["slides", "pools", "family", "relaxation"],
  },
];

export const facilities = [
  {
    text: "Free Wi-Fi",
  },
  {
    text: "32' TV",
  },
  { text: "En-suite Bathroom" },
  { text: "Large Bed" },
  { text: "Fully Equipped Kitchenette" },
  { text: "Hair Dryer" },
  { text: "Air Conditioning/Heating" },
  { text: "Satelite" },
  { text: "Balcony" },
];

export const roomTypesGL = [
  {
    src: "/gl-double4.jpg",
    title: "Single Room",
    btnTitle: "View more..",
    alt: "single-room",
    description:
      "Single room designed for solo travelers. Offers a cozy retreat with a large bed and calming atmosphere, ideal for resting after a full day of sun and sea.",

    href: "/gl/single",
  },
  {
    src: "/gl-double2.jpg",
    title: "Double Room",
    btnTitle: "View more..",
    alt: "double-room",
    description:
      "Double room ideal for couples or friends. It comes with either two single beds or one large bed, perfect for relaxing after a day of exploring or enjoying the sun.",

    href: "/gl/double",
  },
  {
    src: "/gl-triple3.jpg",
    title: "Triple Room",
    btnTitle: "View more..",
    alt: "triple-room",
    description:
      "Triple room designed for small groups or families. Features a combination of beds to suit your needs, offering space and comfort after a full day of seaside adventures.",
    href: "/gl/triple",
  },
  {
    src: "/gl-double3.jpg",
    title: "Family Room",
    btnTitle: "View more..",
    alt: "quadruple-room",
    description:
      "Spacious quadruple room perfect for families or groups of friends. With multiple beds and plenty of room to unwind, it is your ideal base for a fun-filled holiday together.",
    href: "/gl/quadruple",
  },
];

export const roomTypes = [
  {
    src: "/hellasdouble1.jpg",
    title: "Single Room",
    btnTitle: "View more..",
    alt: "single-room",
    description:
      "Single room designed for solo travelers. Offers a cozy retreat with a large bed and calming atmosphere, ideal for resting after a full day of sun and sea.",

    href: "/hellas/single",
  },
  {
    src: "/hellasdouble2.jpg",
    title: "Double Room",
    btnTitle: "View more..",
    alt: "double-room",
    description:
      "Double room ideal for couples or friends. It comes with either two single beds or one large bed, perfect for relaxing after a day of exploring or enjoying the sun.",

    href: "/hellas/double",
  },
  {
    src: "/hellastriple1.jpg",
    title: "Triple Room",
    btnTitle: "View more..",
    alt: "triple-room",
    description:
      "Triple room designed for small groups or families. Features a combination of beds to suit your needs, offering space and comfort after a full day of seaside adventures.",
    href: "/hellas/triple",
  },
  {
    src: "/hellasquad7.jpg",
    title: "Family Room",
    btnTitle: "View more..",
    alt: "quadruple-room",
    description:
      "Spacious quadruple room perfect for families or groups of friends. With multiple beds and plenty of room to unwind, it is your ideal base for a fun-filled holiday together.",
    href: "/hellas/quadruple",
  },
];

export const services = [
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
    id: 36,
    title: "Customer Complaint Management System",
    description:
      "Customer complaint management system: Please send us your complaints to info@hotel-gl.r with the aim of independently investigating any issue. The hotel manager will send you a message within 72 hours and will contact you to manage your request. All correspondence and actions will exist in a related registry.",
  },
  {
    id: 37,
    title: "Fire Extinguishers & Danger Plan",
    description:
      "In case of a fire DO NOT panic. Call the reception from your room. Press the Fire Alarm button situated in the corridor. You will find Fire extinguishers on each floor. In case of fire do NOT use the elevator.",
  },
];

export const rules = [
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
