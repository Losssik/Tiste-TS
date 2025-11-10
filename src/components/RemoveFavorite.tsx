import { useWeatherContext } from "../hooks/useWeatherContext";
import { GoTrash } from "react-icons/go";

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
    <button onClick={handleRemove}>
      <GoTrash className=" text-red-500 text-xl " />
    </button>
  );
};

export default RemoveFavorite;
