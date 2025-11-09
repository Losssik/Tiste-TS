type ProbabilityProp = {
  probability: number;
};

const DisplayProbability = ({ probability }: ProbabilityProp) => {
  return <p>Probability: {probability}</p>;
};

export default DisplayProbability;
