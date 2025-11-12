import { useWeatherContext } from "../hooks/useWeatherContext";
import DisplayProbability from "./DisplayProbability";

const ProbabilityCalculator = () => {
  const { city } = useWeatherContext();

  let probability = 50;

  const temperature = city?.main.temp as number;
  const hpa = city?.main.pressure as number;
  const clouds = city?.clouds.all as number;
  const wind_speed = city?.wind.speed as number;

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

  // wind

  if (wind_speed < 1) {
    probability -= 5;
  } else if (wind_speed < 3) {
    probability += 10;
  } else if (wind_speed < 6) {
    probability += 5;
  } else if (wind_speed < 9) {
    probability += 0;
  } else if (wind_speed > 9 || wind_speed < 14) {
    probability -= 10;
  } else if (wind_speed > 14) {
    probability -= 25;
  }
  return <DisplayProbability probability={probability} />;
};

export default ProbabilityCalculator;
