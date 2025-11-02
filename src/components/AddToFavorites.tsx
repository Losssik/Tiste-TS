import { useWeatherContext } from "../hooks/useWeatherContext";

const AddToFavorites = () => {
  type Favorite = { lat: number; lon: number };
  type Favorites = Favorite[];

  const { city } = useWeatherContext();

  const lat = city?.coord.lat;
  const lon = city?.coord.lon;

  const handleClick = (lat?: number, lon?: number) => {
    if (lat === undefined || lon === undefined) return;

    // get the list
    const stored = localStorage.getItem("favorites");
    const favorites: Favorites = stored ? JSON.parse(stored) : [];

    // if already exists
    const exists = favorites.some((fav) => fav.lat === lat && fav.lon === lon);
    if (exists) return;

    favorites.push({ lat, lon });

    localStorage.setItem("favorites", JSON.stringify(favorites));

    console.log("Dodano:", { lat, lon });
  };

  return (
    <button
      onClick={() => handleClick(lat, lon)}
      className="bg-blue-500 text-white p-2 rounded"
    >
      add to favorites
    </button>
  );
};

export default AddToFavorites;
