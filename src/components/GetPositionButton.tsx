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
      className="bg-[#FFD700] text-black hover:bg-[#E6C200] transition-colors duration-200 px-4 py-1 rounded-full font-semibold  "
    >
      get my position
    </button>
  );
};

export default GetPositionButton;
