import { useEffect, useState } from "react";
import DisplayRivers from "../components/DisplayRivers";

const Rivers = () => {
  const [rivers, setRivers] = useState([]);
  useEffect(() => {
    const fetch_rivers = async () => {
      try {
        const response = await fetch("http://localhost:4000/rivers");
        const data = await response.json();
        setRivers(data.results);
        console.log(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetch_rivers();
  }, []);

  return <DisplayRivers rivers={rivers} />;
};

export default Rivers;
