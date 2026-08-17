/**
 * Curated property listings for Dina Living.
 * Images are served from /public/assets.
 */

const ASSETS = "/assets/";

export const properties = [
  {
    id: 1,
    title: "The Horizon Villa",
    location: "Marina District, Lagos",
    type: "House",
    purpose: "For Sale",
    price: 485000000,
    beds: 5,
    baths: 6,
    sqft: 6800,
    featured: true,
    description:
      "A striking five-bedroom villa with floor-to-ceiling glass overlooking the marina. Designed for effortless entertaining, it pairs an open-plan living pavilion with a wraparound terrace, private pool, and smart-home automation throughout.",
    amenities: [
      "Swimming Pool",
      "Smart Home System",
      "Private Garden",
      "2-Car Garage",
      "Home Theater",
      "Staff Quarters",
    ],
    images: [
      ASSETS + "hero1.jpg",
      ASSETS + "prop_luxury_living.jpg",
      ASSETS + "prop_kitchen.jpg",
    ],
  },
  {
    id: 2,
    title: "Serene Park Residence",
    location: "Greenview Estate, Abuja",
    type: "House",
    purpose: "For Sale",
    price: 235000000,
    beds: 4,
    baths: 4,
    sqft: 4200,
    featured: true,
    description:
      "Set on a quiet tree-lined boulevard, this contemporary four-bedroom family home blends warm timber tones with crisp white finishes. A landscaped backyard, study, and walk-in closets complete a home built for growing families.",
    amenities: [
      "Landscaped Garden",
      "Study Room",
      "Walk-in Closets",
      "Borehole",
      "Solar Power",
      "Security",
    ],
    images: [
      ASSETS + "prop_exterior1.jpg",
      ASSETS + "prop_living.jpg",
      ASSETS + "prop_bedroom.jpg",
    ],
  },
  {
    id: 3,
    title: "Skyline Penthouse",
    location: "Victoria Island, Lagos",
    type: "Apartment",
    purpose: "For Rent",
    price: 18500000,
    rentPeriod: "year",
    beds: 3,
    baths: 3,
    sqft: 2900,
    featured: true,
    description:
      "An elevated three-bedroom penthouse with panoramic city views from a private rooftop terrace. Residents enjoy concierge service, a gym, and seamless access to the island's best dining and nightlife.",
    amenities: [
      "Rooftop Terrace",
      "Concierge Service",
      "Gym & Spa",
      "Elevator",
      "Backup Generator",
      "CCTV",
    ],
    images: [
      ASSETS + "hero3.jpg",
      ASSETS + "prop_balcony.jpg",
      ASSETS + "prop_interior1.jpg",
    ],
  },
  {
    id: 4,
    title: "Coastal Retreat Bungalow",
    location: "Eleko Beachfront, Lekki",
    type: "House",
    purpose: "For Sale",
    price: 120000000,
    beds: 3,
    baths: 3,
    sqft: 2600,
    featured: true,
    description:
      "Steps from the shoreline, this airy bungalow was designed around light and sea breezes. Shutters, open verandas, and a courtyard kitchen make it the perfect weekend escape from the city.",
    amenities: [
      "Sea View",
      "Courtyard Kitchen",
      "Veranda",
      "Solar Water Heating",
      "Rainwater Harvesting",
    ],
    images: [
      ASSETS + "prop_house1.jpg",
      ASSETS + "prop_kitchen2.jpg",
      ASSETS + "hero2.jpg",
    ],
  },
  {
    id: 5,
    title: "The Garden Duplex",
    location: "Karo Gardens, Lekki Phase 1",
    type: "House",
    purpose: "For Rent",
    price: 9500000,
    rentPeriod: "year",
    beds: 4,
    baths: 4,
    sqft: 3400,
    featured: false,
    description:
      "A bright, newly finished four-bedroom duplex with a private garden and modern fittings. Located within a gated community minutes from schools, markets, and major expressways.",
    amenities: [
      "Gated Community",
      "Private Garden",
      "Fitted Kitchen",
      "Water Heater",
      "Tiled Flooring",
    ],
    images: [
      ASSETS + "prop_interior1.jpg",
      ASSETS + "prop_bedroom.jpg",
      ASSETS + "prop_exterior1.jpg",
    ],
  },
  {
    id: 6,
    title: "Executive City Loft",
    location: "Central Business District, Abuja",
    type: "Apartment",
    purpose: "For Rent",
    price: 7200000,
    rentPeriod: "year",
    beds: 2,
    baths: 2,
    sqft: 1800,
    featured: false,
    description:
      "A sophisticated two-bedroom loft in the heart of the business district. High ceilings, exposed brick accents, and a chef's kitchen suit professionals who want everything within walking distance.",
    amenities: [
      "High Ceilings",
      "Chef's Kitchen",
      "Parking Space",
      "24/7 Power",
      "Laundry Room",
    ],
    images: [
      ASSETS + "prop_kitchen2.jpg",
      ASSETS + "prop_living.jpg",
      ASSETS + "prop_balcony.jpg",
    ],
  },
  {
    id: 7,
    title: "Oakwood Family Estate",
    location: "Maitama, Abuja",
    type: "House",
    purpose: "For Sale",
    price: 640000000,
    beds: 6,
    baths: 7,
    sqft: 8500,
    featured: true,
    description:
      "A landmark six-bedroom estate on a landscaped acre in Maitama. Grand reception halls, a double-height library, indoor pool, and fully staffed service wing make it one of the city's most distinguished addresses.",
    amenities: [
      "Indoor Pool",
      "Library",
      "Guest House",
      "Service Wing",
      "Landscaped Grounds",
      "4-Car Garage",
    ],
    images: [
      ASSETS + "prop_exterior2.jpg",
      ASSETS + "prop_luxury_living.jpg",
      ASSETS + "prop_bedroom.jpg",
    ],
  },
  {
    id: 8,
    title: "Riverside Studio",
    location: "Ogudu GRA, Lagos",
    type: "Apartment",
    purpose: "For Rent",
    price: 3200000,
    rentPeriod: "year",
    beds: 1,
    baths: 1,
    sqft: 850,
    featured: false,
    description:
      "A smartly designed studio apartment ideal for young professionals. Compact kitchen, built-in storage, and a balcony with river views prove that thoughtful design beats square footage every time.",
    amenities: [
      "Balcony",
      "Built-in Storage",
      "Intercom",
      "Elevator",
      "CCTV",
    ],
    images: [
      ASSETS + "prop_balcony.jpg",
      ASSETS + "prop_kitchen.jpg",
      ASSETS + "prop_interior1.jpg",
    ],
  },
  {
    id: 9,
    title: "Highland Modern Cottage",
    location: "Jos Plateau, Plateau State",
    type: "House",
    purpose: "For Sale",
    price: 78000000,
    beds: 3,
    baths: 2,
    sqft: 2200,
    featured: false,
    description:
      "A charming modern cottage in the cool highlands, framed by pine forests and rolling hills. Stone cladding, a fireplace lounge, and wide windows capture the plateau's legendary light.",
    amenities: [
      "Fireplace",
      "Stone Cladding",
      "Mountain View",
      "Backup Power",
      "Farm Plot",
    ],
    images: [
      ASSETS + "prop_house1.jpg",
      ASSETS + "prop_living.jpg",
      ASSETS + "prop_kitchen.jpg",
    ],
  },
];

/** All unique filter values. */
export const filterOptions = {
  types: [...new Set(properties.map((p) => p.type))],
  purposes: [...new Set(properties.map((p) => p.purpose))],
  locations: [...new Set(properties.map((p) => p.location))],
};

/** Format naira amounts like ₦485,000,000. */
export function formatPrice(price) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
}
