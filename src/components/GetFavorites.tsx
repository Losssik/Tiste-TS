import { useEffect, useState } from "react";

type Favorites = {
  lat: number;
  lon: number;
}[];

const GetFavorites = () => {
  const [favorites, setFavorites] = useState<Favorites>([]);

  useEffect(() => {
    const storedList = localStorage.getItem("favorites");
    const parsedList = storedList ? JSON.parse(storedList) : [];
    setFavorites(parsedList);
  }, []);

  return (
    <div>
      {favorites.map((fav, index) => (
        <div key={index}>
          <div>
            Lat: {fav.lat}, Lon: {fav.lon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetFavorites;
