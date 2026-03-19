export const BUSINESS = {
  name: "United Sewer & Drains",
  legalName: "United Sewers and Drains Corp",
  phone: "773-250-4197",
  phoneAlt: "773-250-4343",
  phoneHref: "tel:+17732504197",
  phoneAltHref: "tel:+17732504343",
  email: "unitedsewer5@gmail.com",
  address: {
    street: "3824 W 63rd St",
    city: "Chicago",
    state: "IL",
    zip: "60629",
    full: "3824 W 63rd St, Chicago, IL 60629",
  },
  facebook: "https://www.facebook.com/sewerunited",
  hours: "24/7 Emergency Service",
  description:
    "UNITED Sewer & Drains provides professional plumbing, sewer, and drain services across Chicagoland. Over 20 years of experience in commercial and residential plumbing.",
  tagline: "Professional Plumbing, Sewer & Drain Services",
  domain: "sewerunited.com",
  url: "https://sewerunited.com",
};

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "plumbing-services",
    name: "Plumbing Services",
    shortName: "Plumbing",
    description:
      "Licensed and insured plumbing professionals for any kind of residential or commercial work your property needs.",
    longDescription:
      "We serve the entire Chicagoland area, specializing in Maintenance, Repair & Installations. With 24/7 Emergency Service and over 20 years of experience in commercial and residential plumbing, United Sewer & Drains is the team you can trust. From leaky faucets to full plumbing system overhauls, our licensed professionals deliver quality workmanship every time.",
    icon: "Wrench",
    features: [
      "24/7 Emergency Response",
      "Leak Detection & Repair",
      "Pipe Repair & Replacement",
      "Water Heater Services",
      "Fixture Installation",
      "Backflow Prevention",
      "Gas Line Services",
      "Commercial Plumbing",
    ],
  },
  {
    slug: "sewer-and-drain",
    name: "Sewer & Drain Services",
    shortName: "Sewer & Drain",
    description:
      "Expert sewer and drain cleaning, repair, and replacement services to keep your plumbing system running smoothly.",
    longDescription:
      "Sewers and drains are one of the most critical parts of any home or building plumbing system. Unfortunately, since they are not visible, most people don't think about them until a problem arises. United Sewer & Drains specializes in sewer line repair, drain cleaning, trenchless sewer replacement, and video camera inspections to diagnose issues fast.",
    icon: "PipetteIcon",
    features: [
      "Sewer Line Repair",
      "Drain Cleaning",
      "Trenchless Sewer Replacement",
      "Video Camera Inspection",
      "Root Removal",
      "Sewer Line Installation",
      "Emergency Sewer Service",
      "Preventive Maintenance",
    ],
  },
  {
    slug: "hydro-jetting",
    name: "Hydro Jetting & Cleaning",
    shortName: "Hydro Jetting",
    description:
      "High-pressure water jetting to remove all clogs, grease buildup, mineral scale, debris, and tree roots from drain lines.",
    longDescription:
      "Hydro jetting uses high-pressure, high-velocity water to clean the interior of plumbing pipes and remove buildup. This powerful process prevents clogs generally produced by grease, mineral scale, debris, or tree roots. Our state-of-the-art hydro jetting equipment can handle even the toughest blockages, restoring your pipes to near-original condition without chemicals or excavation.",
    icon: "Droplets",
    features: [
      "High-Pressure Pipe Cleaning",
      "Grease Removal",
      "Tree Root Clearing",
      "Mineral Scale Removal",
      "Preventive Drain Cleaning",
      "Commercial Kitchen Drains",
      "Main Sewer Line Jetting",
      "Eco-Friendly Process",
    ],
  },
  {
    slug: "flood-control",
    name: "Flood Control Systems",
    shortName: "Flood Control",
    description:
      "Protect your property from water damage with professional flood control system installation and maintenance.",
    longDescription:
      "Flash floods can occur with no warning and rapidly raise water levels into houses, especially in basement areas. To prevent the expensive damage to machinery and furniture, a properly installed flood control system is essential. United Sewer & Drains installs and maintains sump pumps, ejector pumps, overhead sewer systems, and battery backup systems to keep your property protected.",
    icon: "ShieldCheck",
    features: [
      "Sump Pump Installation",
      "Ejector Pump Systems",
      "Battery Backup Systems",
      "Overhead Sewer Conversion",
      "Check Valve Installation",
      "Basement Waterproofing",
      "Emergency Flood Response",
      "System Maintenance",
    ],
  },
  {
    slug: "installations",
    name: "Plumbing Installations",
    shortName: "Installations",
    description:
      "Professional installation and replacement of all plumbing appliances, fixtures, and systems.",
    longDescription:
      "Installing a new bathtub, shower, or bathroom accessories is not a simple project. You need the experience of professional plumbers, especially when remodeling older properties where existing systems require specialized knowledge. Our team handles complete installations of all plumbing fixtures, water heaters, garbage disposals, and more with precision and care.",
    icon: "Hammer",
    features: [
      "Bathtub & Shower Installation",
      "Toilet Installation",
      "Water Heater Installation",
      "Garbage Disposal Setup",
      "Faucet & Fixture Replacement",
      "Dishwasher Hookup",
      "Washing Machine Lines",
      "Full Bathroom Remodels",
    ],
  },
  {
    slug: "maintenance-and-inspections",
    name: "Maintenance & Inspections",
    shortName: "Maintenance",
    description:
      "Regular maintenance and inspections to catch small problems before they become costly emergencies.",
    longDescription:
      "Maintenance and inspection services help you stop small problems and prevent major plumbing emergencies in the future. In order to prolong the life of your plumbing system and avoid costly repairs, you need regular professional attention. United Sewer & Drains provides thorough plumbing inspections, preventive maintenance plans, and detailed reports to keep your system in top shape.",
    icon: "ClipboardCheck",
    features: [
      "Annual Plumbing Inspections",
      "Video Camera Diagnostics",
      "Preventive Maintenance Plans",
      "Water Pressure Testing",
      "Leak Detection Surveys",
      "Pipe Condition Assessment",
      "Compliance Inspections",
      "Detailed Reports",
    ],
  },
];

export interface Location {
  slug: string;
  name: string;
  state: string;
  fullName: string;
  description: string;
  metaDescription: string;
  nearbyAreas: string[];
  zipCodes: string[];
}

export const LOCATIONS: Location[] = [
  {
    slug: "chicago",
    name: "Chicago",
    state: "IL",
    fullName: "Chicago, IL",
    description:
      "United Sewer & Drains is proud to serve the greater Chicago area with professional plumbing, sewer, and drain services. As a Chicago-based company, we understand the unique plumbing challenges that come with the city's aging infrastructure and harsh weather conditions.",
    metaDescription:
      "Professional plumbing, sewer & drain services in Chicago, IL. 24/7 emergency service. Over 20 years experience. Call 773-250-4197.",
    nearbyAreas: [
      "Lincoln Park",
      "Lakeview",
      "Logan Square",
      "Wicker Park",
      "Hyde Park",
      "Pilsen",
    ],
    zipCodes: ["60601", "60602", "60603", "60604", "60605", "60606"],
  },
  {
    slug: "oak-park",
    name: "Oak Park",
    state: "IL",
    fullName: "Oak Park, IL",
    description:
      "Serving Oak Park and the surrounding western suburbs with reliable plumbing, sewer, and drain services. Our team is familiar with the historic homes and unique plumbing systems common in Oak Park.",
    metaDescription:
      "Expert plumbing, sewer & drain services in Oak Park, IL. 24/7 emergency service. Trusted by homeowners. Call 773-250-4197.",
    nearbyAreas: [
      "River Forest",
      "Forest Park",
      "Berwyn",
      "Maywood",
      "Elmwood Park",
    ],
    zipCodes: ["60301", "60302", "60303", "60304"],
  },
  {
    slug: "evanston",
    name: "Evanston",
    state: "IL",
    fullName: "Evanston, IL",
    description:
      "United Sewer & Drains provides top-quality plumbing services to Evanston residents and businesses. From the lakefront properties to downtown commercial buildings, we handle it all.",
    metaDescription:
      "Trusted plumbing, sewer & drain services in Evanston, IL. 24/7 emergency service. Licensed & insured. Call 773-250-4197.",
    nearbyAreas: ["Skokie", "Wilmette", "Lincolnwood", "Morton Grove", "Niles"],
    zipCodes: ["60201", "60202", "60203", "60204", "60208", "60209"],
  },
  {
    slug: "oak-lawn",
    name: "Oak Lawn",
    state: "IL",
    fullName: "Oak Lawn, IL",
    description:
      "Count on United Sewer & Drains for all your plumbing needs in Oak Lawn. We provide fast, reliable service for residential and commercial properties throughout the southwest suburbs.",
    metaDescription:
      "Reliable plumbing, sewer & drain services in Oak Lawn, IL. 24/7 emergency service. Over 20 years experience. Call 773-250-4197.",
    nearbyAreas: [
      "Evergreen Park",
      "Alsip",
      "Chicago Ridge",
      "Worth",
      "Hometown",
    ],
    zipCodes: ["60453", "60454"],
  },
  {
    slug: "cicero",
    name: "Cicero",
    state: "IL",
    fullName: "Cicero, IL",
    description:
      "United Sewer & Drains is your trusted plumbing partner in Cicero. Our experienced team handles everything from simple repairs to complex sewer installations for homes and businesses.",
    metaDescription:
      "Professional plumbing, sewer & drain services in Cicero, IL. 24/7 emergency service. Licensed professionals. Call 773-250-4197.",
    nearbyAreas: [
      "Berwyn",
      "Stickney",
      "Lyons",
      "Riverside",
      "North Riverside",
    ],
    zipCodes: ["60804"],
  },
];
