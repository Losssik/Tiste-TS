import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw Error(
      "useWeatherContext must be used inside in WeatherCOntextProvider!!!!"
    );
  }

  return context;
};
