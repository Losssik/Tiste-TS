type River = {
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
      {rivers.map((river) => (
        <div>
          <p>{river.station}</p>
          <p>{river.river}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayRivers;
