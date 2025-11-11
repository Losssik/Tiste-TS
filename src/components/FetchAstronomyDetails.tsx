import { useEffect } from "react";
import { useWeatherContext } from "../hooks/useWeatherContext";

type FetchWeatherProps = {
  lat: number;
  lon: number;
};

const FetchAstronomyDetails = ({ lat, lon }: FetchWeatherProps) => {
  const { dispatch } = useWeatherContext();
  useEffect(() => {
    const fetchAstronomy = async () => {
      try {
        const response = await fetch(
          `https://api.ipgeolocation.io/astronomy?apiKey=${
            import.meta.env.VITE_ASTRONOMY_API_KEY
          }&lat=${lat}&long=${lon}`
        );

        const data = await response.json();

        if (response.ok) {
          const moonData = {
            lat,
            lon,
            moon_phase: data.moon_phase,
            moon_illumination_percentage: data.moon_illumination,
            sunrise: data.sunrise,
            sunset: data.sunset,
          };

          dispatch({ type: "GET_MOON_PHASE", payload: moonData });
          console.log(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAstronomy();
  }, [dispatch, lat, lon]);

  return null;
};

export default FetchAstronomyDetails;
