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

export const destinations = [
  {
    name: "Mount Olympus",
    description:
      "The legendary home of the Greek gods, Mount Olympus is Greece's highest mountain and a paradise for hikers and nature lovers. Explore ancient trails through diverse ecosystems and experience breathtaking views from the peaks that touch the clouds.",
    image: "/hellas1.jpg",
    distance: {
      hotelHellas: "3 hours drive",
      hotelGL: "2 hours drive",
    },
    activities: [
      "Hiking",
      "Mountain Climbing",
      "Nature Photography",
      "Mythology Tours",
    ],
  },
  {
    name: "Skiathos",
    description:
      "This stunning island in the Aegean Sea boasts some of Greece's most beautiful beaches with crystal-clear turquoise waters. Enjoy the perfect blend of relaxation and vibrant nightlife in this picturesque island paradise.",
    image: "/hellas1.jpg",
    distance: {
      hotelHellas: "Ferry access available",
      hotelGL: "30 minutes by boat",
    },
    activities: [
      "Beach Relaxation",
      "Water Sports",
      "Island Hopping",
      "Seafood Dining",
    ],
  },
  {
    name: "Meteora",
    description:
      "A UNESCO World Heritage site featuring spectacular monasteries perched atop massive rock formations. This geological wonder offers a unique spiritual experience combined with stunning natural beauty and rich history.",
    image: "/hellas1.jpg",
    distance: {
      hotelHellas: "4 hours drive",
      hotelGL: "3.5 hours drive",
    },
    activities: [
      "Monastery Tours",
      "Rock Climbing",
      "Sunset Viewing",
      "Photography",
    ],
  },
  {
    name: "Thessaloniki",
    description:
      "Greece's vibrant second city blends rich history with modern urban culture. Explore Byzantine landmarks, stroll along the beautiful waterfront promenade, and indulge in the city's renowned culinary scene and nightlife.",
    image: "/hellas1.jpg",
    distance: {
      hotelHellas: "1 hour drive",
      hotelGL: "1.5 hours drive",
    },
    activities: [
      "Historical Tours",
      "Shopping",
      "Culinary Experiences",
      "Cultural Events",
    ],
  },
  {
    name: "Athens",
    description:
      "The historic capital of Greece offers an unparalleled journey through ancient civilization. Visit the iconic Acropolis, explore world-class museums, and experience the dynamic contrast between ancient heritage and contemporary Greek life.",
    image: "/hellas1.jpg",
    distance: {
      hotelHellas: "45 minutes drive",
      hotelGL: "1 hour drive",
    },
    activities: [
      "Archaeological Sites",
      "Museum Visits",
      "Urban Exploration",
      "Traditional Dining",
    ],
  },
  {
    name: "Waterland",
    description:
      "Greece's premier water park offers refreshing fun for visitors of all ages. Enjoy thrilling water slides, relaxing pools, and family-friendly attractions in this perfect summer destination for cooling off and creating memories.",
    image: "/hellas1.jpg",
    distance: {
      hotelHellas: "20 minutes drive",
      hotelGL: "35 minutes drive",
    },
    activities: [
      "Water Slides",
      "Wave Pools",
      "Family Activities",
      "Relaxation Areas",
    ],
  },
];
