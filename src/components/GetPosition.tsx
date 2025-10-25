import { useEffect, useState } from "react";
import FetchWeather from "./FetchWeather";

const GetPosition = () => {
  const [lat, setLat] = useState(54.605);
  const [lon, setLon] = useState(18.2355);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLat(latitude);
        setLon(longitude);
      });
    }
  }, []);

  return (
    <div>
      <p>my position is</p>
      <FetchWeather lat={lat} lng={lon} />
    </div>
  );
};

export default GetPosition;
