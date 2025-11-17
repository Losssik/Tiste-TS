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
    <button
      onClick={handleClick}
      className="bg-[#FFD700] text-[#1A1A1A] hover:bg-[#E6C200] transition-colors duration-200 px-2 py-1 rounded-lg font-bold"
    >
      get my position
    </button>
  );
};

export default GetPositionButton;
