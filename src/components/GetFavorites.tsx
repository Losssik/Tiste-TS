import { useEffect, useState } from "react";
import FetchFavoriteList from "./FetchFavoriteList";
import { useWeatherContext } from "../hooks/useWeatherContext";
import RemoveFavorite from "./RemoveFavorite";

type Favorites = {
  lat: number;
  lon: number;
}[];

const GetFavorites = () => {
  const [favorites, setFavorites] = useState<Favorites>([]);
  const { favorites: favoriteCities } = useWeatherContext();

  useEffect(() => {
    const storedList = localStorage.getItem("favorites");
    const parsedList = storedList ? JSON.parse(storedList) : [];
    setFavorites(parsedList);
  }, []);

  return (
    <div>
      {favorites.map((fav, index) => (
        <div key={index}>
          <FetchFavoriteList lat={fav.lat} lng={fav.lon} />
        </div>
      ))}

      <div className="mt-4">
        <h3 className="font-bold">Twoje ulubione miasta:</h3>
        {favoriteCities.map((city, i) => (
          <div key={i}>
            <p>
              {city.name} — {Math.round(city.main.temp)}°C
            </p>
            <RemoveFavorite lat={city.coord.lat} lon={city.coord.lon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetFavorites;
