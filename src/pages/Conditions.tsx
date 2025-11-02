import Map from "../components/Map";
import GetPositionButton from "../components/GetPositionButton";

import ChartPressure from "../components/ChartPressure";
import ChartTemperature from "../components/ChartTemperature";
import ChartClouds from "../components/ChartClouds";

const Conditions = () => {
  return (
    <div>
      <GetPositionButton />
      <ChartTemperature />
      <ChartClouds />
      <ChartPressure />
      <Map />
    </div>
  );
};

export default Conditions;
