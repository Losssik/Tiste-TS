import { useState } from "react";
import { useWeatherContext } from "../hooks/useWeatherContext";
import { RxThickArrowUp } from "react-icons/rx";

const WindCompass = () => {
  const { city } = useWeatherContext();
  const windDirection = city?.wind.deg ?? 0;

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="flex border-2 rounded-full w-40 h-40  items-center justify-center relative"
    >
      <span className=" absolute top-2 font-bold text-lg">N</span>
      <span className=" absolute bottom-2 font-bold text-lg ">S</span>
      <span className=" absolute right-2 font-bold text-lg">E</span>
      <span className=" absolute left-2 font-bold text-lg">W</span>
      <div style={{ transform: `rotate(${windDirection - 180}deg)` }}>
        <RxThickArrowUp className="animate-pulse text-[30px]" />
      </div>
      {hover && (
        <p className=" absolute bottom-1/4 left-1/3 bg-yellow-400 text-black p-1 text-sm font-bold">
          wind direction
        </p>
      )}
    </div>
  );
};

export default WindCompass;
