import { useWeatherContext } from "../hooks/useWeatherContext";

type RemoveFavoriteProps = {
  lat: number;
  lon: number;
};

const RemoveFavorite = ({ lat, lon }: RemoveFavoriteProps) => {
  const { dispatch } = useWeatherContext();

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: { lat, lon },
    });
  };

  return <button onClick={handleRemove}>REMOVE</button>;
};

export default RemoveFavorite;
