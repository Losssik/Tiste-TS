import Map from "../components/Map";
import GetPositionButton from "../components/GetPositionButton";
import { useWeatherContext } from "../hooks/useWeatherContext";
import ChartPressure from "../components/ChartPressure";

const Conditions = () => {
  const { city } = useWeatherContext();

  const location = city?.name;

  return (
    <div>
      <div className=" h-80">conditions weather for: {location}</div>
      <GetPositionButton />
      <ChartPressure />
      <Map />
    </div>
  );
};

export default Conditions;
