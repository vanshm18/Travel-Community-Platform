import { useEffect, useState } from "react";

const HeroImage = () => {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const pexelsApi = "Vfg5G7fjwdEzYcqMMZz4Z5HzNGkXKqsbRps0pqN8fTvbqA16NhmL3mGy";
  const url = "https://api.pexels.com/v1/search?query=travel&orientation=square&per_page=20"

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: pexelsApi,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data = await response.json();

        setPhotos(data.photos);
      } 
      catch (error) {
        console.error("Pexels error:", error);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    if (photos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);      // stops/deletes the timer, then useEffect creates another timer
  }, [photos]);

  return (
    <div className="w-full h-200 sm:h-160 md:h-120 flex justify-center items-center mt-4 pt-4">
      <div className="w-9/10 h-full m-4 flex flex-col sm:flex-row gap-4 rounded-lg bg-green-500 p-4 sm:p-8">
        {/* Image */}
        <div className="w-full h-1/2 sm:w-1/2 sm:h-full bg-black overflow-hidden rounded-lg">
          {photos.length > 0 && (
            <img
              src={photos[currentIndex].src.large}
              alt={photos[currentIndex].alt || "Travel"}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>

        {/* */}
        <div className="sm:ml-4 w-full h-1/2 sm:w-1/2 sm:h-full flex flex-col justify-center items-center text-center sm:border-l sm:border-t-0 border-t gap-10">
          <h1 className="text-black text-5xl md:text-6xl sm:text-6xl font-bold font-sans">EXPLORE JOURNEYS CURATED FOR YOU</h1>
          <button className="w-35 h-14 bg-black text-white text-2xl rounded-4xl hover:bg-gray-900 cursor-pointer">Browse</button>
        </div>
      </div>
    </div>
  )
}

export default HeroImage