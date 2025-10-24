import { useEffect } from "react";
import { useWeatherContext } from "./hooks/useWeatherContext";
import CurrentWeather from "./components/CurrentWeather";
import type { WeatherData } from "./types/weather";
import Map from "./components/Map";

function App() {
  const { dispatch } = useWeatherContext();
  useEffect(() => {
    //promise <void> when no return keyword and async fnc
    const fetchCurrentWeather = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );
        const data: WeatherData = await response.json();

        if (response.ok) {
          console.log("done", data);
          dispatch({ type: "GET_WEATHER", payload: data });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrentWeather();
  }, [dispatch]);

  return (
    <>
      <CurrentWeather />
      <Map />
    </>
  );
}

export default App;
