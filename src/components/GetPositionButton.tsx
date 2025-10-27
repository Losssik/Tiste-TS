import { useWeatherContext } from "../hooks/useWeatherContext";

const GetPositionButton = () => {
  const { dispatch } = useWeatherContext();
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        dispatch({
          type: "SET_COORDS",
          payload: { lat: latitude, lon: longitude },
        });
      });
    }
  };

  return (
    <button onClick={handleClick} className=" bg-slate-500">
      get my position
    </button>
  );
};

export default GetPositionButton;
