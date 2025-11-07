import { useEffect } from "react";
import { useWeatherContext } from "../hooks/useWeatherContext";

type FetchWeatherProps = {
  lat: number;
  lng: number;
};

const FetchFavoriteList = ({ lat, lng }: FetchWeatherProps) => {
  const { dispatch } = useWeatherContext();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );

        if (!response.ok) throw new Error("Błąd pobierania danych pogodowych");

        const data = await response.json();

        // Dodaj miasto do kontekstu
        dispatch({ type: "ADD_FAVORITE", payload: data });
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchWeather();
  }, [lat, lng, dispatch]);

  return null; // ten komponent tylko fetchuje, nie renderuje
};

export default FetchFavoriteList;
