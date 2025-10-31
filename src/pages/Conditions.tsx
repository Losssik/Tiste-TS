import Map from "../components/Map";
import GetPositionButton from "../components/GetPositionButton";

import ChartPressure from "../components/ChartPressure";
import ChartTemperature from "../components/ChartTemperature";

const Conditions = () => {
  return (
    <div>
      <GetPositionButton />
      <ChartTemperature />
      <ChartPressure />
      <Map />
    </div>
  );
};

export default Conditions;
