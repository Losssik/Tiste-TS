import { useEffect } from "react";
import { useWeatherContext } from "../hooks/useWeatherContext";

const FetchWeather = ({ lat, lng }) => {
  const { dispatch } = useWeatherContext();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );

        const data = await response.json();

        if (response.ok) {
          dispatch({ type: "GET_WEATHER", payload: data });
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, [lat, lng, dispatch]);
};

export default FetchWeather;
