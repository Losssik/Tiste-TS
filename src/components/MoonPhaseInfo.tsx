import { useWeatherContext } from "../hooks/useWeatherContext";

const MoonPhaseInfo = () => {
  const { moonPhase } = useWeatherContext();
  return (
    <div>
      {moonPhase ? (
        <>
          <p>Faza Księżyca: {moonPhase.moon_phase}</p>
          <p>Oświetlenie: {moonPhase.moon_illumination_percentage}%</p>
          <p>sunset: {moonPhase.sunset}</p>
        </>
      ) : (
        <p>Ładowanie danych astronomicznych...</p>
      )}
    </div>
  );
};

export default MoonPhaseInfo;
