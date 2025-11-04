import { useState } from "react";

type RemoveFromFavoritesProps = {
  lat: number;
  lon: number;
};

const RemoveFromFavorites = ({ lat, lon }: RemoveFromFavoritesProps) => {
  const [message, setMessage] = useState<string | null>(null);

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
    setMessage("usunieto");
    setTimeout(() => setMessage(null), 1500);
  };

  return (
    <>
      <button
        onClick={() => handleRemove(lat, lon)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
      {message && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-4 py-2 rounded-xl shadow-lg text-lg font-semibold z-50 ">
          {message}
        </div>
      )}
    </>
  );
};

export default RemoveFromFavorites;
