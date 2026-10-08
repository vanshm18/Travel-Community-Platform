import { useEffect, useState } from "react";
import Card from "../Card/Card"


const Featured = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full h-100 flex justify-center items-center mt-4 pt-4">
      <div className="w-9/10 h-full m-4 flex flex-col gap-4 pt-4">
        <h1 className="h-[20%] text-4xl font-semibold">Featured</h1>
        <div className="h-full flex flex-row gap-8 sm:justify-between overflow-x-auto md:shrink-0">
            {listings.slice(3,7).map((listing) => (
              <Card key={listing._id} listing={listing} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Featured
