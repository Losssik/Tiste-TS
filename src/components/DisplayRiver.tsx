import { useWeatherContext } from "../hooks/useWeatherContext";

import RiverMap from "./RiverMap";
import Spinner from "./Spinner";

const DisplayRiver = () => {
  const { river } = useWeatherContext();
  console.log(river);

  if (!river) return <Spinner />;

  return (
    <div className=" grid grid-cols-2">
      <div>
        {river?.river}
        {river?.river_length}
        {river.station_name}
      </div>

      <RiverMap />
    </div>
  );
};

export default DisplayRiver;
