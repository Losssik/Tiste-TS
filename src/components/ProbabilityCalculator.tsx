import { useWeatherContext } from "../hooks/useWeatherContext";
import type { WeatherData } from "../types/weather";
import DisplayProbability from "./DisplayProbability";
import ProbabilityMessage from "./ProbabilityMessage";

type ProbabilityCalculatorProps = {
  city: WeatherData;
};

const ProbabilityCalculator = ({ city }: ProbabilityCalculatorProps) => {
  const { moon } = useWeatherContext();

  let probability = 50;

  const temperature = city?.main.temp as number;
  const hpa = city?.main.pressure as number;
  const clouds = city?.clouds.all as number;
  const wind_speed = city?.wind.speed as number;
  const wind_gust = city?.wind.gust as number;
  const wind_direction = city.wind.deg ?? 0;
  const rain = city?.rain;
  const rain_amount = rain?.["1h"] ?? 0;
  const snow = city?.snow;
  const snow_amount = snow?.["1h"] ?? 0;
  const country = city.sys.country;
  const sunrise = city.sys.sunrise;
  const sunset = city.sys.sunset;
  const now = new Date();
  const current_unix_time = Math.floor(now.getTime() / 1000);
  const current_time = new Date(current_unix_time * 1000);

  // best fishing months
  const date = new Date();
  let month_index = date.getMonth();
  // its 0 based so now january = 1 instead of 0
  month_index += 1;
  const good_months = [3, 4, 5];
  const best_months = [6, 7, 8];
  const september = [9];
  const bad_months = [10, 11, 12, 1, 2];

  if (good_months.includes(month_index)) {
    probability += 3;
  } else if (best_months.includes(month_index)) {
    probability += 5;
  } else if (september.includes(month_index)) {
    probability += 0;
  } else if (bad_months.includes(month_index)) {
    probability -= 30;
  }

  // countries
  if (country === "PL") {
    probability -= 6;
  }

  if (
    country === "DK" ||
    country === "FIN" ||
    country === "NO" ||
    country === "SE" ||
    country === "IE"
  ) {
    probability += 25;
  }

  // temp

  if (temperature < -3) {
    probability -= 33;
  } else if (temperature < 0) {
    probability -= 10;
  } else if (temperature < 5) {
    probability -= 5;
  } else if (temperature < 10) {
    probability += 5;
  } else if (temperature < 22) {
    probability += 10;
  } else if (temperature < 25) {
    probability += 5;
  } else if (temperature > 25) {
    probability -= 5;
  }
  // pressure
  if (hpa < 995) {
    probability -= 10;
  } else if (hpa < 1005) {
    probability -= 5;
  } else if (hpa <= 1020) {
    probability += 10;
  } else if (hpa <= 1030) {
    probability += 5;
  } else if (hpa > 1030) {
    probability -= 5;
  }

  // clouds
  if (clouds < 20) {
    probability -= 5;
  } else if (clouds < 30) {
    probability += 5;
  } else if (clouds <= 70) {
    probability += 7;
  } else if (clouds <= 90) {
    probability += 4;
  } else if (clouds > 90) {
    probability -= 5;
  }

  // wind speed based on F. Beaufort
  if (wind_speed < 0.2) {
    probability -= 5;
  } else if (wind_speed < 3.3) {
    probability += 10;
  } else if (wind_speed < 5.4) {
    probability += 5;
  } else if (wind_speed < 7.9) {
    probability += 1;
  } else if (wind_speed < 14) {
    probability -= 13;
  } else if (wind_speed > 14) {
    probability -= 25;
  } else if (wind_speed > 17) {
    probability -= 45;
  } else if (wind_speed > 20) {
    probability -= 55;
  }

  // wind gust
  if (wind_gust < 3.3) {
    probability += 2;
  } else if (wind_gust < 5.4) {
    probability += 1;
  } else if (wind_gust < 7.9) {
    probability += 0;
  } else if (wind_gust < 10.7) {
    probability -= 8;
  } else if (wind_gust < 13.8) {
    probability -= 25;
  } else if (wind_gust > 13.8) {
    probability -= 60;
  }

  // wind direction
  if (wind_direction > 180 && wind_direction < 270) {
    probability += 5;
  } else if (wind_direction > 270 && wind_direction < 325) {
    probability += 1;
  } else if (wind_direction < 180 && wind_direction > 135) {
    probability += 1;
  } else if (wind_direction < 135 && wind_direction > 45) {
    probability -= 7;
  } else {
    probability += 0;
  }

  // rain
  if (rain_amount === 0) {
    probability += 5;
  } else if (rain_amount < 2) {
    probability += 10;
  } else if (rain_amount < 5) {
    probability += 5;
  } else if (rain_amount >= 5) {
    probability -= 10;
  }

  //snow
  if (snow_amount === 0) {
    probability += 0;
  } else if (snow_amount < 2) {
    probability -= 5;
  } else if (snow_amount < 5) {
    probability -= 12;
  } else if (snow_amount < 8) {
    probability -= 16;
  } else if (snow_amount > 8) {
    probability -= 22;
  }

  //moon
  if (moon === "NEW_MOON") {
    probability += 10;
  } else if (moon === "WAXING_CRESCENT") {
    probability += 6;
  } else if (moon === "FIRST_QUARTER") {
    probability += 4;
  } else if (moon === "WAXING_GIBBOUS") {
    probability += 6;
  } else if (moon === "FULL_MOON") {
    probability -= 6;
  } else if (moon === "WANING_GIBBOUS") {
    probability -= 6;
  } else if (moon === "THIRD_QUARTER" || moon === "LAST_QUARTER") {
    probability -= 8;
  } else if (moon === "WANING_CRESCENT") {
    probability -= 10;
  }

  // best sunrise hours to catch a fish
  const sunrise_time = new Date(sunrise * 1000); // changing to ms
  const sunrise_time_plus_2hours = new Date(sunrise_time);
  sunrise_time_plus_2hours.setHours(sunrise_time_plus_2hours.getHours() + 2); // adding 2 hours

  if (current_time > sunrise_time && current_time < sunrise_time_plus_2hours) {
    probability += 10;
  }

  // best sunset hours to catch a fish
  const sunset_time = new Date(sunset * 1000);
  const sunset_time_minus_1hour = new Date(sunset_time);
  sunset_time_minus_1hour.setHours(sunset_time_minus_1hour.getHours() - 1);
  const sunset_time_plus_2hours = new Date(sunset_time);
  sunset_time_plus_2hours.setHours(sunset_time_plus_2hours.getHours() + 2);

  if (
    current_time > sunset_time_minus_1hour &&
    current_time < sunset_time_plus_2hours
  ) {
    probability += 10;
  }

  // worst hours
  if (
    current_time > sunrise_time_plus_2hours &&
    current_time < sunset_time_minus_1hour
  ) {
    probability -= 5;
  } else {
    probability += 0;
  }

  // min chance 0, max chance 100
  probability = probability >= 100 ? 99 : probability <= 0 ? 1 : probability;

  return (
    <>
      <DisplayProbability probability={probability} />
      <ProbabilityMessage probability={probability} />
    </>
  );
};

export default ProbabilityCalculator;
