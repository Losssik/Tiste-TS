type Props = {
  station_key: string;
};

const GetRiverDetails = ({ station_key }: Props) => {
  const handleRiverDetails = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/rivers/${id}`);

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={() => handleRiverDetails(station_key)}
      className="bg-red-400 ml-2"
    >
      more
    </button>
  );
};

export default GetRiverDetails;
