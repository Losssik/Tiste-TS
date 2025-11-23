import Map from "../components/Map";
import GetPositionButton from "../components/GetPositionButton";

import ChartPressure from "../components/ChartPressure";
import ChartTemperature from "../components/ChartTemperature";
import ChartClouds from "../components/ChartClouds";
import DisplayLocation from "../components/DisplayLocation";

const Conditions = () => {
  return (
    <div>
      <div className="flex gap-3  items-center">
        <GetPositionButton />
        <DisplayLocation />
      </div>
      <div className=" py-4 ">
        <Map />
      </div>
      <ChartTemperature />
      <ChartClouds />
      <ChartPressure />
    </div>
  );
};

export default Conditions;
