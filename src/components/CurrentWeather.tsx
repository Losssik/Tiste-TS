import { useWeatherContext } from "../hooks/useWeatherContext";

const CurrentWeather = () => {
  const { city } = useWeatherContext();
  return (
    <div>
      <div className=" bg-slate-50">
        <div className="bg-slate-50">
          <p>Location: {city?.name ?? ""}</p>
          <p>Temperature: {city?.main.temp ?? "-"}</p>
          <p>Clouds: {city?.clouds.all ?? "-"}%</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
