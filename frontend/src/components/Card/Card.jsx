import { Link } from "react-router-dom"

const Card = ({listing}) => {
  return (
    <Link to={`/listings/${listing._id}`} className="w-64 shrink-0 aspect-2/3 block">
      <div className="w-full h-full flex flex-col hover:opacity-90 cursor-pointer">
        <div className="aspect-square overflow-hidden rounded-lg mb-1">
          <img src={listing.image.url} className="object-cover scale-105 h-full w-full rounded-lg"></img>    
        </div>  
        <div className="h-auto">
          <h3 className="font-medium sm:text-lg">{listing.title}</h3>
          <p className="text-sm sm:text-[15px] text-gray-600">{listing.destination}</p>
          <p className="text-sm sm:text-[15px] text-gray-600">₹{listing.budget} per person</p>
          <p className="text-sm sm:text-[15px] text-gray-600">{listing.duration} days</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
