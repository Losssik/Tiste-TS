import { useWeatherContext } from "../hooks/useWeatherContext";
import AddToFavorites from "./AddToFavorites";
import GetPositionButton from "./GetPositionButton";
import ProbabilityCalculator from "./ProbabilityCalculator";
import WindCompass from "./WindCompass";
import DisplayWeatherDetails from "./DisplayWeatherDetails";

const CurrentWeather = () => {
  const { city } = useWeatherContext();

  if (!city) return;

  // GETTING WEATHER ICON
  const iconCode = city?.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className=" mt-10 flex flex-col justify-center items-center gap-2">
      <p className=" text-xl">Location: {city?.name ?? ""}</p>
      <img
        src={iconUrl}
        alt={city?.weather[0].description}
        className="w-12 h-12"
      />
      <GetPositionButton />
      <ProbabilityCalculator city={city} />
      <DisplayWeatherDetails />
      <AddToFavorites />
      <WindCompass />
    </div>
  );
};

export default CurrentWeather;
