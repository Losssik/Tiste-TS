import { useWeatherContext } from "../hooks/useWeatherContext";
import AddToFavorites from "./AddToFavorites";
import GetPositionButton from "./GetPositionButton";
import ProbabilityCalculator from "./ProbabilityCalculator";
import WindCompass from "./WindCompass";

const CurrentWeather = () => {
  const { city } = useWeatherContext();

  if (!city) return;

  // GETTING WEATHER ICON
  const iconCode = city?.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // TIME FOR SUNRISE
  const unix_timestamp_of_sunrise = city?.sys.sunrise as number;
  const date = new Date(unix_timestamp_of_sunrise * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedSunriseTime = `${hours}:${minutes}`;

  return (
    <div className=" mt-10 flex flex-col justify-center items-center gap-2">
      <p>Location: {city?.name ?? ""}</p>
      <img
        src={iconUrl}
        alt={city?.weather[0].description}
        className="w-12 h-12"
      />
      <GetPositionButton />
      <ProbabilityCalculator city={city} />
      <p className="mt-2">Temperature: {city?.main.temp ?? "-"} °C</p>
      <p>Wind speed: {city.wind.speed} m/s</p>
      <p>Wind gust: {city.wind.gust} m/s</p>
      <p>Pressure: {city.main.pressure} hpa</p>
      <p>Cloudiness: {city?.clouds.all ?? "-"}%</p>
      <p>Sunrise {formattedSunriseTime}</p>
      <AddToFavorites />
      <WindCompass />
    </div>
  );
};

export default CurrentWeather;
