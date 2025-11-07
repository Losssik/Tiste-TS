import { useEffect } from "react";
import { useWeatherContext } from "../hooks/useWeatherContext";

type FetchWeatherProps = {
  lat: number;
  lng: number;
};

const FetchFavoriteList = ({ lat, lng }: FetchWeatherProps) => {
  const { dispatch, favorites } = useWeatherContext();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );

        const data = await response.json();

        // checking if location is already in localstorage
        const alreadyExists = favorites.some(
          (fav) =>
            fav.coord.lat === data.coord.lat && fav.coord.lon === data.coord.lon
        );

        if (!alreadyExists) {
          dispatch({ type: "ADD_FAVORITE", payload: data });
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lng, dispatch]);

  return null;
};

export default FetchFavoriteList;
