import { useWeatherContext } from "../hooks/useWeatherContext";
import ProbabilityCalculator from "./ProbabilityCalculator";

import RiverMap from "./RiverMap";
import Spinner from "./Spinner";

const DisplayRiver = () => {
  const { city, river } = useWeatherContext();

  if (!river || !city) return <Spinner />;

  return (
    <div className=" grid grid-cols-2 justify-center items-start">
      <div>
        <h2 className=" text-2xl">River name: {river?.river}</h2>
        <p>River length: {river?.river_length}</p>
        <p>Station name: {river.station_name}</p>
        <ProbabilityCalculator city={city} river={river} />
      </div>
      <RiverMap />
    </div>
  );
};

export default DisplayRiver;
