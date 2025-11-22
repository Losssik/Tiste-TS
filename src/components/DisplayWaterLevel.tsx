import { PiTrendUp, PiTrendDown, PiMinus } from "react-icons/pi";
import { MdOutlineTrendingFlat } from "react-icons/md";

type TrendProps = {
  trend: "bez zmian" | "malejący" | "rosnący" | "brak danych";
};

const DisplayWaterLevel = ({ trend }: TrendProps) => {
  switch (trend) {
    case "bez zmian":
      return <MdOutlineTrendingFlat className="text-accent text-xl" />;
    case "malejący":
      return <PiTrendDown className="text-red-500 text-xl" />;
    case "rosnący":
      return <PiTrendUp className=" text-green-500 text-xl" />;
    case "brak danych":
      return <PiMinus className=" text-xl" />;
    default:
      return <p>{trend}</p>;
  }
};

export default DisplayWaterLevel;
