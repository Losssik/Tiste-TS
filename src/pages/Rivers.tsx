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
      } catch (err) {
        console.log(err);
      }
    };
    fetch_rivers();
  }, []);

  const handleScrap = async () => {
    const res = await fetch("http://localhost:4000/rivers");
    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <h2>rivers page</h2>
      <button className=" bg-slate-700 p-6" onClick={handleScrap}>
        scrap
      </button>
      <DisplayRivers rivers={rivers} />
    </div>
  );
};

export default Rivers;
