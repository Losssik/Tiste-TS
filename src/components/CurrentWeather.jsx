import { useWeatherContext } from "../hooks/useWeatherContext";

const CurrentWeather = () => {
  const { city } = useWeatherContext();
  return (
    <div>
      <p className=" bg-slate-50">
        City name:
        {city ? city.name : "loading"}
      </p>
    </div>
  );
};

export default CurrentWeather;
