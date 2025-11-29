import { useWeatherContext } from "../hooks/useWeatherContext";

const DisplayRiver = () => {
  const { river } = useWeatherContext();

  return <div>{river?.river ?? "brak"}</div>;
};

export default DisplayRiver;
