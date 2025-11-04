import { useState } from "react";
import { useWeatherContext } from "../hooks/useWeatherContext";

type Favorite = { lat: number; lon: number };
type Favorites = Favorite[];

const AddToFavorites = () => {
  const [message, setMessage] = useState<string | null>(null);
  const { city } = useWeatherContext();

  const lat = city?.coord.lat;
  const lon = city?.coord.lon;

  const handleClick = (lat?: number, lon?: number) => {
    if (lat === undefined || lon === undefined) return;

    const stored = localStorage.getItem("favorites");
    const favorites: Favorites = stored ? JSON.parse(stored) : [];

    const exists = favorites.some((fav) => fav.lat === lat && fav.lon === lon);

    if (exists) {
      setMessage("❗already on your list!");
    } else {
      favorites.push({ lat, lon });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setMessage("✅ added");
    }

    setTimeout(() => setMessage(null), 1500);
  };

  return (
    <>
      <button
        onClick={() => handleClick(lat, lon)}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Add to favorites
      </button>

      {message && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-4 py-2 rounded-xl shadow-lg text-lg font-semibold z-50 ">
          {message}
        </div>
      )}
    </>
  );
};

export default AddToFavorites;
