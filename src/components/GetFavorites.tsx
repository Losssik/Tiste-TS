import { useEffect, useState } from "react";
import RemoveFromFavorites from "./RemoveFromFavorites";
import FetchWeather from "./FetchWeather";
import { useWeatherContext } from "../hooks/useWeatherContext";

type Favorites = {
  lat: number;
  lon: number;
}[];

const GetFavorites = () => {
  const { city } = useWeatherContext();

  const [favorites, setFavorites] = useState<Favorites>([]);

  useEffect(() => {
    const storedList = localStorage.getItem("favorites");
    const parsedList = storedList ? JSON.parse(storedList) : [];
    setFavorites(parsedList);
  }, []);

  // to update ui state in get list component
  const handleRemoved = (lat: number, lon: number) => {
    setFavorites((prev) =>
      prev.filter((fav) => fav.lat !== lat && fav.lon !== lon)
    );
  };

  return (
    <div>
      {favorites.map((fav, index) => (
        <div key={index}>
          <FetchWeather lat={fav.lat} lng={fav.lon} />
          <RemoveFromFavorites
            onRemoved={handleRemoved}
            lat={fav.lat}
            lon={fav.lon}
          />
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default GetFavorites;
