import DisplayStatus from "./DisplayStatus";
import DisplayWaterLevel from "./DisplayWaterLevel";

type River = {
  station_key: string;
  station: string;
  river: string;
  status:
    | "Powyżej stanu alarmowego"
    | "Powyżej stanu ostrzegawczego"
    | "Strefa stanów wysokich"
    | "Strefa stanów średnich"
    | "Strefa stanów niskich"
    | "Poniżej minimum okresowego"
    | "Brak danych stanu wody"
    | "Brak stanów charakt./ umownych";
  water_level: string;
  water_level_in_3hours: string;
  trend: "bez zmian" | "malejący" | "rosnący" | "brak danych";
};

type RiverProps = {
  rivers: River[];
};
const DisplayRivers = ({ rivers }: RiverProps) => {
  const handleWaterLevel = () => {
    const sorted_rivers = rivers.sort((a, b) =>
      a.water_level.localeCompare(b.water_level)
    );
    console.log(sorted_rivers);
  };

  return (
    <div>
      {rivers.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="grid grid-cols-6 gap-2 justify-items-center text-xl bg-yellow-500 text-black italic sticky top-0">
            <h4>station</h4>
            <h4>river</h4>
            <h4>status</h4>
            <h4 onClick={handleWaterLevel}>water level</h4>
            <h4>trend</h4>
            <h4>change in 3h</h4>
          </div>
          {rivers.map((river) => (
            <div
              key={river.station_key}
              className="grid grid-cols-6 gap-2 justify-items-center items-center py-2 odd:bg-blue-950 "
            >
              <p>{river.station}</p>
              {/* removing station code - last word of string */}
              <p>{river.river.substring(0, river.river.lastIndexOf(" "))}</p>
              <DisplayStatus status={river.status} />
              <p>{river.water_level}</p>
              <DisplayWaterLevel trend={river.trend} />
              <p>{river.water_level_in_3hours}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayRivers;
