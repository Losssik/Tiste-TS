import { useWeatherContext } from "../hooks/useWeatherContext";

const ProbabilityCalculatorListTest = () => {
  const { favorites, moonPhases } = useWeatherContext();

  const favoriteData = favorites.map((item) => ({
    tem: item.main.temp,
  }));

  return;
};

export default ProbabilityCalculatorListTest;
