type River = {
  station_key: string;
  station: string;
  river: string;
};

type RiverProps = {
  rivers: River[];
};
const DisplayRivers = ({ rivers }: RiverProps) => {
  return (
    <div>
      <h2>DISPLAY RIVERS</h2>

      {rivers.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {rivers.map((river) => (
            <div key={river.station_key}>
              <p>{river.station}</p>
              <p>{river.river}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayRivers;
