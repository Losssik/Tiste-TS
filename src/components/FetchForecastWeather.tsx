import { useEffect } from "react";
import { useWeatherContext } from "../hooks/useWeatherContext";

type FetchWeatherProps = {
  lat: number;
  lng: number;
};

const FetchForecastWeather = ({ lat, lng }: FetchWeatherProps) => {
  const { dispatch } = useWeatherContext();
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );

        const data = await response.json();

        if (response.ok) {
          console.log(data);
          dispatch({ type: "GET_FORECAST", payload: data });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchForecast();
  }, [lat, lng, dispatch]);

  return null;
};

export default FetchForecastWeather;
