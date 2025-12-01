import { useWeatherContext } from "../hooks/useWeatherContext";
import ChartClouds from "./ChartClouds";
import ChartPressure from "./ChartPressure";
import ChartTemperature from "./ChartTemperature";
import DisplayStatus from "./DisplayStatus";
import ProbabilityCalculator from "./ProbabilityCalculator";

import RiverMap from "./RiverMap";
import Spinner from "./Spinner";

const DisplayRiver = () => {
  const { city, river } = useWeatherContext();
  const icon = city?.weather[0].icon;
  const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  if (!river || !city) return <Spinner />;

  return (
    <div>
      <div className=" grid grid-cols-[0.3fr_0.7fr] gap-5 justify-center items-stretch">
        <div className=" flex flex-col gap-1 ">
          <div className=" flex items-center gap-2 mb-2 relative ">
            <h2 className=" text-2xl">River name: {river?.river}</h2>
            <img
              src={icon_url}
              alt={city?.weather[0].description}
              className="w-12 h-12"
            />
            <div className=" absolute right-0">
              <DisplayStatus status={river.river_status} />
            </div>
          </div>
          <p className=" border-t-2 border-blue-900 py-1">
            Station name: {river.station_name}
          </p>
          <p className=" border-t-2 border-blue-900 py-1">
            Water level: {river.water_level} cm
          </p>
          <p className=" border-t-2 border-blue-900 py-1">
            Previous water level: {river.previous_water_level} cm
            <span className=" ml-2 italic text-sm">
              ({river.previous_water_level_time})
            </span>
          </p>
          <p className=" border-t-2 border-blue-900 py-1">
            River length: {river?.river_length} km
          </p>
          <p className=" border-t-2 border-blue-900 py-1">
            History maximum: {river.history_maximum}
          </p>
          <p className=" border-t-2 border-b-2 border-blue-900 py-1">
            History minimum: {river.history_minimum}
          </p>

          <ProbabilityCalculator city={city} river={river} />
        </div>
        <RiverMap />
      </div>
      <ChartTemperature />
      <ChartClouds />
      <ChartPressure />
    </div>
  );
};

export default DisplayRiver;
