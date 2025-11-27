import DisplayStatus from "./DisplayStatus";
import DisplayWaterLevel from "./DisplayWaterLevel";
import GetRiverDetails from "./GetRiverDetails";
import Spinner from "./Spinner";

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
    | "Brak stanów charakterystycznych"
    | "Brak stanów charakterystycznych i umownych";
  water_level: string;
  water_level_in_3hours: string;
  trend: "bez zmian" | "malejący" | "rosnący" | "brak danych";
};

type RiverProps = {
  rivers: River[];
};
const DisplayRivers = ({ rivers }: RiverProps) => {
  return (
    <div>
      {rivers.length === 0 ? (
        <Spinner />
      ) : (
        <div className=" overflow-x-hidden">
          <div className="grid grid-cols-6 gap-2 justify-items-center text-xl bg-yellow-500 text-black italic sticky top-0 z-50">
            <h4>station</h4>
            <h4>river</h4>
            <h4>status</h4>
            <h4>water level</h4>
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
              <div className=" text-nowrap flex justify-center items-center gap-2">
                <p>{river.river.substring(0, river.river.lastIndexOf(" "))}</p>
                <GetRiverDetails station_key={river.station_key} />
              </div>
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
