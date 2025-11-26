import { FiMoreVertical } from "react-icons/fi";

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
    <button onClick={() => handleRiverDetails(station_key)}>
      <FiMoreVertical className=" text-white " />
    </button>
  );
};

export default GetRiverDetails;
