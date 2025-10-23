import { useWeatherContext } from "../hooks/useWeatherContext";

const CurrentWeather = () => {
  const { city } = useWeatherContext();
  return (
    <div>
      <div className=" bg-slate-50">
        <div className="bg-slate-50">
          <p>Location: {city?.name ?? ""}</p>
          <p>Temperature: {city?.main.temp ?? "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
