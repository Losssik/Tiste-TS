import { useWeatherContext } from "../hooks/useWeatherContext";

type Props = {
  lat: number;
  lon: number;
};

const DisplayAstrologyDetails = ({ lat, lon }: Props) => {
  const { moonPhases } = useWeatherContext();

  const moonData = moonPhases.find((m) => m.lat === lat && m.lon === lon);

  if (!moonData) return <p>loading</p>;

  return (
    <div className="flex gap-3">
      <p> {moonData.moon_phase}</p>
      <p> {moonData.moon_illumination_percentage}%</p>
      <p> {moonData.sunrise}</p>
      <p> {moonData.sunset}</p>
    </div>
  );
};

export default DisplayAstrologyDetails;
