import { useEffect, useState } from "react";
import FetchFavoriteList from "./FetchFavoriteList";
import { useWeatherContext } from "../hooks/useWeatherContext";
import RemoveFavorite from "./RemoveFavorite";
import FetchAstronomyDetails from "./FetchAstronomyDetails";
import ProbabilityCalculator from "./ProbabilityCalculator";

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
          <FetchAstronomyDetails lat={fav.lat} lon={fav.lon} />
        </div>
      ))}

      <div className="mt-4">
        <h3 className="font-bold mb-2">Your favorite places:</h3>
        {favoriteCities.map((city, i) => {
          const iconCode = city.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

          return (
            <div key={i} className="flex items-center gap-6 border-b py-2">
              <img
                src={iconUrl}
                alt={city.weather[0].description}
                className="w-10 h-10"
              />
              <p>
                {city.name} — {Math.round(city.main.temp)}°C
              </p>
              <p>Wind: {city.wind.speed} km/h</p>
              <p>Gust: {city.wind.gust} km/h</p>
              <RemoveFavorite lat={city.coord.lat} lon={city.coord.lon} />
              <ProbabilityCalculator city={city} mode="probability" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetFavorites;
