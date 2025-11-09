import { useWeatherContext } from "../hooks/useWeatherContext";
import DisplayProbability from "./DisplayProbability";

const ProbabilityCalculator = () => {
  const { city } = useWeatherContext();
  let probability = 0;

  const temperature = city?.main.temp as number;

  if (temperature > 10) {
    probability += 10;
  } else if (temperature > 5) {
    probability += 5;
  }

  return <DisplayProbability probability={probability} />;
};

export default ProbabilityCalculator;
