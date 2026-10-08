const express = require("express");
const app = express();

const port = 8080;

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const Listing = require("./schemas/listingSchema");
const connectDB = require("./database/db");
const dotenv = require("dotenv");

dotenv.config();

connectDB();

app.use(express.json());

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

app.listen(port, (req,res) => {
    console.log(`App is listening on port ${port}`);
})