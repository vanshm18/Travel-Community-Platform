import Navbar from "../components/Navbar/Navbar"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Listing = () => {
  const { id } = useParams();

  const [listing, setListing] = useState(null);

  console.log(id);

  useEffect(() => {
  fetch(`https://travel-community-platform-backend.onrender.com/listings/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setListing(data);
    });
}, [id]);

if (!listing) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-96">
          <p className="text-gray-500">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="w-9/10 max-w-6xl mx-auto py-8">

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            {listing.title}
          </h1>

          <p className="text-gray-600 mt-1">
            {listing.destination}
          </p>
        </div>

        {/* Main Image */}
        <div className="w-full h-75 sm:h-125 overflow-hidden rounded-xl">
          <img
            src={listing.image.url}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-medium mb-3">
              About this trip
            </h2>

            <p className="text-gray-600 leading-7">
              {listing.description}
            </p>
          </div>

          {/* Trip Details */}
          <div className="border rounded-xl p-6 h-fit">
            <h2 className="text-xl font-medium mb-5">
              Trip Details
            </h2>

            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Destination</span>
              <span>{listing.destination}</span>
            </div>

            <div className="flex justify-between py-3 border-b">
              <span className="text-gray-500">Duration</span>
              <span>{listing.duration} days</span>
            </div>

            <div className="flex justify-between py-3">
              <span className="text-gray-500">Budget</span>
              <span className="font-medium">
                ₹{listing.budget}
              </span>
            </div>

            <button className="w-full mt-5 bg-green-600 text-black font-medium py-3 rounded-lg hover:opacity-90">
              Plan This Trip
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};


export default Listing;
