import { useWeatherContext } from "../hooks/useWeatherContext";

const CurrentWeather = () => {
  const { city } = useWeatherContext();

  // GETTING WEATHER ICON
  const iconCode = city?.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // TIME FOR SUNRISE
  const unix_timestamp_of_sunrise = city?.sys.sunrise as number;
  const date = new Date(unix_timestamp_of_sunrise * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getMinutes();
  const formattedSunriseTime = `${hours}:${minutes}:${seconds}`;

  return (
    <div className=" mt-10 flex flex-col justify-center items-center gap-1">
      <p>Location: {city?.name ?? ""}</p>
      <img src={iconUrl} alt={city?.weather[0].description} />
      <p>Temperature: {city?.main.temp ?? "-"}</p>
      <p>Clouds: {city?.clouds.all ?? "-"}%</p>
      <p>Sunrise {formattedSunriseTime}</p>
    </div>
  );
};

export default CurrentWeather;
