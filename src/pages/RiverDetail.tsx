import { useParams } from "react-router-dom";
import { useEffect } from "react";
import DisplayRiver from "../components/DisplayRiver";
import { useWeatherContext } from "../hooks/useWeatherContext";
import Spinner from "../components/Spinner";

const RiverDetail = () => {
  const { river, dispatch } = useWeatherContext();
  const { id } = useParams();

  useEffect(() => {
    const fetchRiver = async () => {
      try {
        const response = await fetch(`http://localhost:4000/rivers/${id}`);
        const data = await response.json();
        dispatch({ type: "GET_RIVER", payload: data });
      } catch (err) {
        console.log(err);
      }
    };

    fetchRiver();
  }, [id, dispatch]);

  if (!river) return <Spinner />;

  return <DisplayRiver />;
};

export default RiverDetail;
