import { useWeatherContext } from "../hooks/useWeatherContext";
import { HiArrowUp } from "react-icons/hi2";

const WindCompass = () => {
  const { city } = useWeatherContext();
  const windDirection = city?.wind.deg ?? 0;

  return (
    <div className="flex border-2 border-blue-500  rounded-full w-32 h-32 items-center justify-center">
      <div style={{ transform: `rotate(${windDirection - 180}deg)` }}>
        <HiArrowUp className="animate-pulse text-[30px]" />
      </div>
    </div>
  );
};

export default WindCompass;
