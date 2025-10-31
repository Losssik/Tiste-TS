import Map from "../components/Map";
import GetPositionButton from "../components/GetPositionButton";

import ChartPressure from "../components/ChartPressure";

const Conditions = () => {
  return (
    <div>
      <GetPositionButton />
      <ChartPressure />
      <Map />
    </div>
  );
};

export default Conditions;
