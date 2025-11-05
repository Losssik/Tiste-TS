type RemoveFromFavoritesProps = {
  lat: number;
  lon: number;
  onRemoved?: (lat: number, lon: number) => void;
};

const RemoveFromFavorites = ({
  lat,
  lon,
  onRemoved,
}: RemoveFromFavoritesProps) => {
  const handleRemove = (lat: number, lon: number) => {
    console.log("usunięto:", lat, lon);

    const storedList = localStorage.getItem("favorites");
    const parsedList: RemoveFromFavoritesProps[] = storedList
      ? JSON.parse(storedList)
      : [];

    const updatedList = parsedList.filter(
      (fav) => !(fav.lat === lat && fav.lon === lon)
    );

    localStorage.setItem("favorites", JSON.stringify(updatedList));
    if (onRemoved) onRemoved(lat, lon);
  };

  return (
    <button
      onClick={() => handleRemove(lat, lon)}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      Remove
    </button>
  );
};

export default RemoveFromFavorites;
