import { useWeatherContext } from "../hooks/useWeatherContext";

const DisplayLocation = () => {
  const { forecast } = useWeatherContext();

  return <h2 className=" text-2xl">Location: {forecast?.city.name}</h2>;
};

export default DisplayLocation;
