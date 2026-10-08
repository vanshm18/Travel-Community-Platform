const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true
  },

  destination: {
    type: String,
    required: true,
  },

  image: {
    filename: { type: String, default: "listingimage" },
    url: {
        type: String,
        default: "https://images.unsplash.com/photo-1571896349842-33c89424de2d...",
        set: (v) => v === "" 
        ? "https://images.unsplash.com/photo-1571896349842-33c89424de2d..."
        : v
        }
    },

  budget: {
    type: Number,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;