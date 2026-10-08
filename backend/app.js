const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());

const Listing = require("./schemas/listingSchema");
const connectDB = require("./database/db");

connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/listings", async (req,res) => {
  const listings = await Listing.find({});
  res.json(listings);
})

app.get("/listings/:id", async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.json(listing);
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})