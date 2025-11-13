import type { WeatherData } from "../types/weather";
import DisplayProbability from "./DisplayProbability";

type ProbabilityCalculatorProps = {
  city: WeatherData;
};

const ProbabilityCalculator = ({ city }: ProbabilityCalculatorProps) => {
  let probability = 50;

  const temperature = city?.main.temp as number;
  const hpa = city?.main.pressure as number;
  const clouds = city?.clouds.all as number;
  const wind_speed = city?.wind.speed as number;
  const wind_gust = city?.wind.gust as number;
  const wind_direction = city.wind.deg as number;
  const rain = city?.rain;
  const rain_amount = rain?.["1h"] ?? 0;
  const snow = city?.snow;
  const snow_amount = snow?.["1h"] ?? 0;
  // temp
  if (temperature < 0) {
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
    probability += 10;
  } else if (clouds <= 90) {
    probability += 5;
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
    probability -= 50;
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
    probability -= 5;
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

  return <DisplayProbability probability={probability} />;
};

export default ProbabilityCalculator;
