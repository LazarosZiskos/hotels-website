import { Clock, Coffee, Package, Shield, Utensils, Wifi } from "lucide-react";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Hotel Hellas",
    href: "/hellas",
  },
  {
    id: 3,
    title: "Hotel GL",
    href: "/gl",
  },
  {
    id: 4,
    title: "Destinations",
    href: "/destinations",
  },
  {
    id: 5,
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

export const images = [
  {
    src: "/gl1.jpeg",
    alt: "gl1",
  },
  {
    src: "/hellas1.jpg",
    alt: "hellas1",
  },
  {
    src: "/logo.png",
    alt: "hellas1",
  },
  {
    src: "/meteora1.avif",
    alt: "hellas1",
  },
  {
    src: "/paralia1.avif",
    alt: "hellas1",
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
