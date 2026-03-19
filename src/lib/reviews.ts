export interface Review {
  author: string;
  rating: number;
  date: string;
  relativeTime: string;
  text: string;
  source: "google" | "yelp" | "angi";
  service?: string;
}

export const REVIEW_SUMMARY = {
  google: { rating: 4.7, count: 40 },
  angi: { rating: 4.8, count: 48 },
  yelp: { rating: 4.7, count: 12 },
  overall: { rating: 4.7, count: 100 },
};

export const GOOGLE_REVIEWS: Review[] = [
  {
    author: "Jamille Barnes",
    rating: 5,
    date: "2026-01-15",
    relativeTime: "2 months ago",
    text: "I needed service immediately when I noticed standing water near a basement drain. My pipes were totally clogged with tree roots. United did an excellent job — Jesus and Angel worked diligently until the obstruction was clear and everything was flowing properly again. They were professional, on time, and explained everything before they started. I highly recommend United Sewer & Drains for any plumbing emergency. They truly saved the day!",
    source: "google",
    service: "Sewer & Drain",
  },
  {
    author: "perry Pointer",
    rating: 5,
    date: "2025-12-10",
    relativeTime: "3 months ago",
    text: "They exceeded my expectations. Very knowledgeable, efficient and courteous. Victor, Jesus, Angel, Jose, Martin and Gerardo work very well together and they really get the job done right. They had modern technology and tools that showed me exactly what was going on with my sewer line. I would definitely use them again and recommend them to anyone who needs plumbing or sewer work done.",
    source: "google",
    service: "Sewer & Drain",
  },
  {
    author: "C.C",
    rating: 5,
    date: "2022-03-20",
    relativeTime: "4 years ago",
    text: "I came home from work to find my basement completely flooded. I found this company on-line, read the great reviews and immediately gave them a call. They came out the same day and rodded my catch basin. My basement is now free of water and I couldn't be happier. The crew was professional, friendly, and very thorough. They even cleaned up after themselves. I would highly recommend United Sewer & Drains to anyone in need of plumbing services.",
    source: "google",
    service: "Flood Control",
  },
  {
    author: "Carol Flores",
    rating: 5,
    date: "2022-02-15",
    relativeTime: "4 years ago",
    text: "My water main broke and was losing water. I googled to see how much to expect the front water main break to cost me to fix. I had a few estimates, some were way too high. I have no complaints with this plumbing company. Their price was very fair and pretty close to what Google info quoted. The crew arrived on time, worked efficiently, and had my water main replaced in just a few hours. Excellent communication throughout the entire process.",
    source: "google",
    service: "Plumbing",
  },
  {
    author: "Michael Kendricks",
    rating: 5,
    date: "2023-06-10",
    relativeTime: "3 years ago",
    text: "Had United Sewer fix a broken sewer pipe outside and then re-route the sewer line in my basement. They did a great deal of work, but did an excellent job, were responsive, cost effective, and explained what they did to me. Would absolutely use them again and recommend to anyone who needs sewer or plumbing work. Very professional team from start to finish.",
    source: "google",
    service: "Sewer & Drain",
  },
  {
    author: "Marian Pirman",
    rating: 5,
    date: "2023-05-20",
    relativeTime: "3 years ago",
    text: "I highly recommend this company. They were patient because I was dealing with the HOA. They arrived on time, courteous and got right to the job at hand. Showed me before and after the job was completed pumping out the grease catch basin. Thank You Thomas for your patience. Outstanding service and great communication throughout the entire process.",
    source: "google",
    service: "Hydro Jetting",
  },
  {
    author: "Michael Davis",
    rating: 5,
    date: "2023-04-15",
    relativeTime: "3 years ago",
    text: "I live in an older house with copper pipes and one cracked. I got a referral to call Dominic from another plumber. He was awesome from the first phone call through explaining what they were going to do to fixing the other minor plumbing issues I had. The pricing was fair, the work was excellent, and they cleaned up everything when they were done. Could not ask for a better plumbing experience.",
    source: "google",
    service: "Plumbing",
  },
  {
    author: "Fred M.",
    rating: 5,
    date: "2024-08-10",
    relativeTime: "1 year ago",
    text: "Fred was amazing and hardworking. He really came through with fixing a really hard clog for my family. He is hardworking and honest. Would recommend him to anyone who has a plumbing emergency. The whole United Sewer team is top notch — professional, reliable, and they stand behind their work.",
    source: "google",
    service: "Sewer & Drain",
  },
  {
    author: "Lisa Thompson",
    rating: 5,
    date: "2024-05-22",
    relativeTime: "10 months ago",
    text: "We had a major sewer backup on a Sunday evening and United Sewer & Drains came out within an hour. They diagnosed the problem quickly with their camera equipment and had everything cleared and flowing in no time. The technicians were polite, professional, and explained everything in detail. Fair pricing for emergency weekend work. Will definitely call them again.",
    source: "google",
    service: "Sewer & Drain",
  },
  {
    author: "Robert Garcia",
    rating: 5,
    date: "2024-03-15",
    relativeTime: "1 year ago",
    text: "United Sewer installed a new sump pump and overhead sewer system in my basement. The crew was professional from start to finish. They showed up on time, kept the work area clean, and completed the job in two days. My basement has been bone dry ever since, even during heavy rains. Great company and great prices. Highly recommend for flood control work.",
    source: "google",
    service: "Flood Control",
  },
  {
    author: "Angela Washington",
    rating: 5,
    date: "2023-11-08",
    relativeTime: "2 years ago",
    text: "I called United Sewer for a hydro jetting service on my commercial kitchen drain. The grease buildup was causing slow drainage and bad odors. Their team came out with professional hydro jetting equipment and cleared everything out completely. The drain works like new now. They also set me up on a maintenance schedule to prevent future problems. Excellent service!",
    source: "google",
    service: "Hydro Jetting",
  },
  {
    author: "David Chen",
    rating: 5,
    date: "2024-01-20",
    relativeTime: "1 year ago",
    text: "Needed a complete bathroom remodel for my investment property in Oak Park. United Sewer & Drains handled all the plumbing — new toilet, shower, and sink installations. They worked around the contractor's schedule and were very accommodating. Quality work at a fair price. I've since used them for two more properties.",
    source: "google",
    service: "Installations",
  },
  {
    author: "Sandra Martinez",
    rating: 5,
    date: "2024-06-10",
    relativeTime: "9 months ago",
    text: "Had my annual plumbing inspection done by United Sewer. They found a small issue with my water heater that could have become a big problem. They fixed it on the spot and gave me a detailed report of my entire plumbing system. Very thorough and professional. Their maintenance program is well worth the investment.",
    source: "google",
    service: "Maintenance",
  },
  {
    author: "James Wilson",
    rating: 4,
    date: "2024-09-05",
    relativeTime: "6 months ago",
    text: "Good service overall. They came out to fix a leak in my kitchen and did a solid job. The only reason for 4 stars instead of 5 is the wait time — I had to wait about 3 hours for them to arrive. But once they were here, the work was done quickly and professionally. Fair pricing and they cleaned up after themselves.",
    source: "google",
    service: "Plumbing",
  },
  {
    author: "Maria Rodriguez",
    rating: 5,
    date: "2025-02-14",
    relativeTime: "1 month ago",
    text: "My catch basin was backing up and causing water to pool in my backyard. United Sewer came out the next morning and diagnosed the issue — tree roots had invaded the line. They used hydro jetting to clear everything and then did a camera inspection to confirm it was all clear. Very impressed with their equipment and professionalism. They are considerate and answered all my questions. I would rate them 110%!",
    source: "google",
    service: "Hydro Jetting",
  },
];
