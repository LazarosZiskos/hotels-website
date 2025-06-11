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
    title: "Free Wifi",
    description: "Free high-speed internet access throughout the hotel.",
  },
  {
    icon: Package,
    title: "Luggage Storage",
    description: "Secure luggage storage service for your convenience.",
  },
  {
    icon: Clock,
    title: "Reception 24/7",
    description: "Round the clock front desk service and assistance.",
  },
  {
    icon: Shield,
    title: "Safety Box",
    description: "Safety deposit box availabe in the facilities.",
  },
  {
    icon: Coffee,
    title: "Cafeteria",
    description: "Cozy cafeteria and bar services, ideal for a hot summer day.",
  },
  {
    icon: Utensils,
    title: "Restaurant",
    description:
      "On-site buffet restaurant serving delicious local and international cuisine (for group bookings).",
  },
];
