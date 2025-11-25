import { useWeatherContext } from "../hooks/useWeatherContext";

type Probability = {
  probability: number;
};

const ProbabilityMessage = ({ probability }: Probability) => {
  const { city } = useWeatherContext();

  const temp = city?.main.temp as number;

  if (probability <= 15 && temp < -7) {
    return (
      <p className="text-red-500 italic">
        bruuuh, STAY HOME!!! water is freezing!!!
      </p>
    );
  }

  if (probability <= 15) {
    return <p className="text-red-500 italic">bruuuh, STAY HOME!!!</p>;
  }

  if (probability <= 30) {
    return (
      <p className="text-orange-500 italic">better clean the house or sth...</p>
    );
  }

  if (probability <= 44) {
    return (
      <p className="text-amber-400 italic">meeeeh, maybe if you lucky ;)</p>
    );
  }

  if (probability <= 59) {
    return <p className="text-yellow-500 italic">"FLIP A COIN FLIP A COIN!"</p>;
  }

  if (probability <= 70) {
    return <p className="text-yellow-300">OMG!</p>;
  }

  if (probability <= 90) {
    return <p className="text-green-300">BROOOO! NOW OR NEVER!</p>;
  }

  if (probability <= 100) {
    return (
      <p className="text-purple-400">
        IF YOU WON'T CATCH THEN FIND A NEW HOBBY
      </p>
    );
  }

  return <p>no data</p>;
};

export default ProbabilityMessage;
