import { useEffect } from "react";
import { useWeatherContext } from "../hooks/useWeatherContext";

type MoonProps = {
  lat: number;
  lon: number;
};

const FetchMoon = ({ lat, lon }: MoonProps) => {
  const { dispatch } = useWeatherContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.ipgeolocation.io/astronomy?apiKey=${
            import.meta.env.VITE_ASTRONOMY_API_KEY
          }&lat=${lat}&long=${lon}`
        );

        const data = await response.json();

        if (response.ok) {
          dispatch({ type: "GET_MOON", payload: data.moon_phase });
          console.log(data.moon_phase);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [lat, lon, dispatch]);

  return null;
};

export default FetchMoon;
