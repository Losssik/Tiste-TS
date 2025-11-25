import type { WeatherData } from "../types/weather";

type Props = {
  city: WeatherData;
};

const DisplayFavorites = ({ city }: Props) => {
  const iconCode = city.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // TIME FOR SUNRISE
  const unix_timestamp_of_sunrise = city?.sys.sunrise as number;
  const sunrise_date = new Date(unix_timestamp_of_sunrise * 1000);
  const sunrise_hours = sunrise_date.getHours();
  const sunrise_minutes = sunrise_date.getMinutes();
  const formatted_sunrise_time = `${sunrise_hours}:${sunrise_minutes}`;

  // TIME FOR SUNSET
  const unix_timestamp_of_sunset = city.sys.sunset as number;
  const sunset_date = new Date(unix_timestamp_of_sunset * 1000);
  const sunset_hours = sunset_date.getHours();
  const sunset_minutes = sunset_date.getMinutes();
  const formated_sunset_time = `${sunset_hours}:${sunset_minutes}`;

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
      <p>🌅 sunrise: {formatted_sunrise_time}</p>
      <p>🌇 sunset: {formated_sunset_time}</p>
    </>
  );
};

export default DisplayFavorites;
