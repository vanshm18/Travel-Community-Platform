require("dotenv").config();

const Listing = require("./schemas/listingSchema");
const connectDB = require("./database/db");

const listings = [
  {
    title: "Trekking in Kasol",
    description: "Explore the scenic Parvati Valley with a peaceful trek through forests, rivers, and mountain villages.",
    destination: "Kasol, Himachal Pradesh",
    image: {
      filename: "kasol",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
    },
    budget: 5000,
    duration: 3
  },
  {
    title: "Weekend in Rishikesh",
    description: "Experience river rafting, camping, yoga, and the peaceful atmosphere of the Ganga.",
    destination: "Rishikesh, Uttarakhand",
    image: {
      filename: "rishikesh",
      url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1"
    },
    budget: 4500,
    duration: 3
  },
  {
    title: "Manali Adventure Trip",
    description: "A fun-filled mountain getaway with sightseeing, adventure activities, and beautiful Himalayan views.",
    destination: "Manali, Himachal Pradesh",
    image: {
      filename: "manali",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2"
    },
    budget: 7000,
    duration: 4
  },
  {
    title: "Exploring Jaipur",
    description: "Discover royal palaces, historic forts, colorful markets, and traditional Rajasthani culture.",
    destination: "Jaipur, Rajasthan",
    image: {
      filename: "jaipur",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245"
    },
    budget: 4000,
    duration: 3
  },
  {
    title: "Valley of Flowers Trek",
    description: "Trek through one of India's most beautiful Himalayan valleys filled with alpine flowers and dramatic landscapes.",
    destination: "Valley of Flowers, Uttarakhand",
    image: {
      filename: "valley-of-flowers",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    },
    budget: 8500,
    duration: 5
  },
  {
    title: "Goa Beach Escape",
    description: "Relax on beautiful beaches, explore local markets, and enjoy the laid-back atmosphere of Goa.",
    destination: "Goa",
    image: {
      filename: "goa",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2"
    },
    budget: 8000,
    duration: 4
  },
  {
    title: "Spiti Valley Road Trip",
    description: "Take an unforgettable road trip through high-altitude deserts, remote villages, and dramatic Himalayan landscapes.",
    destination: "Spiti Valley, Himachal Pradesh",
    image: {
      filename: "spiti",
      url: "https://images.unsplash.com/photo-1486911278844-a81c5267e227"
    },
    budget: 15000,
    duration: 7
  },
  {
    title: "Udaipur Heritage Tour",
    description: "Explore magnificent lakes, palaces, old streets, and the rich heritage of the City of Lakes.",
    destination: "Udaipur, Rajasthan",
    image: {
      filename: "udaipur",
      url: "https://images.unsplash.com/photo-1602643163986-7f4f6f9b5f2e"
    },
    budget: 6000,
    duration: 3
  },
  {
    title: "Chandrashila Trek",
    description: "A rewarding Himalayan trek offering spectacular mountain views from the summit of Chandrashila.",
    destination: "Chopta, Uttarakhand",
    image: {
      filename: "chandrashila",
      url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1"
    },
    budget: 5500,
    duration: 3
  },
  {
    title: "Meghalaya Explorer",
    description: "Discover waterfalls, living root bridges, caves, and the lush landscapes of Meghalaya.",
    destination: "Meghalaya",
    image: {
      filename: "meghalaya",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
    },
    budget: 12000,
    duration: 6
  },
  {
    title: "Ladakh Bike Trip",
    description: "Ride through some of the world's highest motorable roads and experience the rugged beauty of Ladakh.",
    destination: "Ladakh",
    image: {
      filename: "ladakh",
      url: "https://images.unsplash.com/photo-1533130061792-64b345e4a833"
    },
    budget: 18000,
    duration: 7
  },
  {
    title: "Jim Corbett Wildlife Trip",
    description: "Explore India's famous national park with jungle safaris and opportunities to spot wildlife.",
    destination: "Jim Corbett, Uttarakhand",
    image: {
      filename: "corbett",
      url: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b"
    },
    budget: 6500,
    duration: 3
  },
  {
    title: "Hampi Backpacking Trip",
    description: "Explore ancient ruins, temples, boulders, and the unique landscapes surrounding historic Hampi.",
    destination: "Hampi, Karnataka",
    image: {
      filename: "hampi",
      url: "https://images.unsplash.com/photo-1600100397608-f010e91f6a04"
    },
    budget: 5500,
    duration: 4
  },
  {
    title: "Sikkim Mountain Escape",
    description: "Experience snow-covered mountains, monasteries, scenic valleys, and peaceful Himalayan towns.",
    destination: "Sikkim",
    image: {
      filename: "sikkim",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa"
    },
    budget: 11000,
    duration: 6
  },
  {
    title: "Bir Billing Paragliding",
    description: "Experience paragliding over the Himalayan foothills and explore the peaceful town of Bir.",
    destination: "Bir Billing, Himachal Pradesh",
    image: {
      filename: "bir-billing",
      url: "https://images.unsplash.com/photo-1521336575822-6da63fb45455"
    },
    budget: 6500,
    duration: 3
  }
];

const initDB = async () => {
  try {
    await connectDB();

    await Listing.deleteMany({});
    await Listing.insertMany(listings);

    console.log("Data was initialized");
  } catch (error) {
    console.error(error);
  }
};

initDB();