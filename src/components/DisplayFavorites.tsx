import type { WeatherData } from "../types/weather";

type Props = {
  city: WeatherData;
};

const DisplayFavorites = ({ city }: Props) => {
  const iconCode = city.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // TIME FOR SUNRISE
  const unix_timestamp_of_sunrise = city?.sys.sunrise as number;
  const sunrise_time = new Date(
    unix_timestamp_of_sunrise * 1000
  ).toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" });
  // TIME FOR SUNSET
  const unix_timestamp_of_sunset = city.sys.sunset as number;
  const sunset_time = new Date(
    unix_timestamp_of_sunset * 1000
  ).toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      <p>{city.name}</p>
      <img
        src={iconUrl}
        alt={city.weather[0].description}
        className="w-10 h-10"
      />
      <p>{city.main.temp.toFixed(1)} °C</p>
      <p>{city.weather[0].description}</p>
      <p>wind speed: {city.wind.speed} m/s</p>
      <p>🌅 sunrise: {sunrise_time}</p>
      <p>🌇 sunset: {sunset_time}</p>
    </>
  );
};

export default DisplayFavorites;
