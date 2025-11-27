import { BsMenuButtonWideFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  station_key: string;
};

const GetRiverDetails = ({ station_key }: Props) => {
  return (
    <Link to={`/river-detail/${station_key}`}>
      <button>
        <BsMenuButtonWideFill className=" text-blue-500 "></BsMenuButtonWideFill>
      </button>
    </Link>
  );
};

export default GetRiverDetails;
