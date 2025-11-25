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

    const storedList = localStorage.getItem("favorites");
    const parsedList: RemoveFavoriteProps[] = storedList
      ? JSON.parse(storedList)
      : [];

    const updatedList = parsedList.filter(
      (fav) => !(fav.lat === lat && fav.lon === lon)
    );

    localStorage.setItem("favorites", JSON.stringify(updatedList));
  };

  return (
    <button onClick={handleRemove} className="bg-red-500 py-1 px-8 w-full">
      delete
    </button>
  );
};

export default RemoveFavorite;
