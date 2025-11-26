import { FaTemperatureEmpty, FaCloudscale } from "react-icons/fa6";
import { GiWindsock, GiWindSlap } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsSunrise } from "react-icons/bs";

import { useWeatherContext } from "../hooks/useWeatherContext";

const DisplayWeatherDetails = () => {
  const { city } = useWeatherContext();
  if (!city) return;

  // TIME FOR SUNRISE
  const unix_timestamp_of_sunrise = city?.sys.sunrise as number;
  const sunrise_time = new Date(
    unix_timestamp_of_sunrise * 1000
  ).toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className=" flex justify-center items-start flex-col gap-2 ml-2">
      <div className="mt-2 flex justify-center items-center gap-3">
        <FaTemperatureEmpty className=" text-sm" />
        Temperature: {city?.main.temp.toFixed(1) ?? "-"} °C
      </div>
      <div className="flex justify-center items-center gap-3">
        <GiWindsock className=" text-sm" />
        Wind speed: {city.wind.speed} m/s
      </div>
      <div className="flex justify-center items-center gap-3">
        <GiWindSlap className=" text-sm" />
        Wind gust: {city.wind.gust} m/s
      </div>
      <div className="flex justify-center items-center gap-3">
        <IoSpeedometerOutline className="text-sm" />
        Pressure: {city.main.pressure} hPa
      </div>
      <div className="flex justify-center items-center gap-3">
        <FaCloudscale className="text-sm" />
        Cloudiness: {city?.clouds.all ?? "-"}%
      </div>
      <div className="flex justify-center items-center gap-3">
        <BsSunrise className="text-sm" />
        Sunrise {sunrise_time}
      </div>
    </div>
  );
};

export default DisplayWeatherDetails;
