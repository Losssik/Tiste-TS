import { GrStatusWarning, GrStatusWarningSmall } from "react-icons/gr";
import { PiMinus } from "react-icons/pi";

type StatusProps = {
  status:
    | "Powyżej stanu alarmowego"
    | "Powyżej stanu ostrzegawczego"
    | "Strefa stanów wysokich"
    | "Strefa stanów średnich"
    | "Strefa stanów niskich"
    | "Poniżej minimum okresowego"
    | "Brak danych stanu wody"
    | "Brak stanów charakt./ umownych";
};

const DisplayStatus = ({ status }: StatusProps) => {
  switch (status) {
    case "Powyżej stanu alarmowego":
      return <GrStatusWarning className="text-red-600 text-xl" />;
    case "Powyżej stanu ostrzegawczego":
      return <GrStatusWarning className="text-red-500 text-xl" />;
    case "Strefa stanów wysokich":
      return <GrStatusWarning className="text-yellow-500 text-xl" />;
    case "Strefa stanów średnich":
      return <GrStatusWarningSmall className="text-green-500 text-xl" />;
    case "Strefa stanów niskich":
      return <GrStatusWarningSmall className="text-yellow-500 text-xl" />;
    case "Poniżej minimum okresowego":
      return <GrStatusWarningSmall className="text-red-500 text-xl" />;
    case "Brak danych stanu wody":
    case "Brak stanów charakt./ umownych":
      return <PiMinus className="text-xl" />;
    default:
      return <p>{status}</p>;
  }
};

export default DisplayStatus;
