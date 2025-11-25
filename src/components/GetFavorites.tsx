import { useEffect, useState } from "react";
import FetchFavoriteList from "./FetchFavoriteList";
import { useWeatherContext } from "../hooks/useWeatherContext";
import RemoveFavorite from "./RemoveFavorite";
import FetchAstronomyDetails from "./FetchAstronomyDetails";
import ProbabilityCalculator from "./ProbabilityCalculator";
import DisplayFavorites from "./DisplayFavorites";

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
          return (
            <div
              key={i}
              className="grid grid-cols-9 justify-items-start items-center gap-2 border py-2 pl-2 pr-2 mb-2"
            >
              <DisplayFavorites city={city} />
              <div>
                <ProbabilityCalculator city={city} mode="probability" />
              </div>
              <div className="justify-self-end">
                <RemoveFavorite lat={city.coord.lat} lon={city.coord.lon} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetFavorites;
