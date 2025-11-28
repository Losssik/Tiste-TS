import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type River = {
  station_id: string;
  water_level: string;
  station_name: string;
  previous_water_level: number;
};
const RiverDetail = () => {
  const { id } = useParams();
  const [river, setRiver] = useState<River | null>(null);

  useEffect(() => {
    const fetchRiver = async () => {
      try {
        const response = await fetch(`http://localhost:4000/rivers/${id}`);
        const data: River = await response.json();
        console.log(data);
        setRiver(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRiver();
  }, [id]);

  if (!river) return;

  return (
    <div>
      <div>river id {river.station_id}</div>
      <div>water level {river.water_level}</div>
      <div>station name: {river.station_name}</div>
      <div>previous water leverl: {river.previous_water_level}cm</div>
    </div>
  );
};

export default RiverDetail;
