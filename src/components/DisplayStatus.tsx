import { GrStatusWarning, GrStatusWarningSmall } from "react-icons/gr";
import { PiMinus } from "react-icons/pi";
import Tooltip from "./Tooltip";

type StatusProps = {
  status:
    | "Powyżej stanu alarmowego"
    | "Powyżej stanu ostrzegawczego"
    | "Strefa stanów wysokich"
    | "Strefa stanów średnich"
    | "Strefa stanów niskich"
    | "Poniżej minimum okresowego"
    | "Brak danych stanu wody"
    | "Brak stanów charakterystycznych"
    | "Brak stanów charakterystycznych i umownych"
    | string;
};

const DisplayStatus = ({ status }: StatusProps) => {
  switch (status) {
    case "Powyżej stanu alarmowego":
      return (
        <Tooltip text={status}>
          <GrStatusWarning className="text-red-600 text-xl" />
        </Tooltip>
      );
    case "Powyżej stanu ostrzegawczego":
      return (
        <Tooltip text={status}>
          <GrStatusWarning className="text-red-500 text-xl" />
        </Tooltip>
      );
    case "Strefa stanów wysokich":
      return (
        <Tooltip text={status}>
          <GrStatusWarning className="text-yellow-500 text-xl" />
        </Tooltip>
      );
    case "Strefa stanów średnich":
      return (
        <Tooltip text={status}>
          <GrStatusWarningSmall className="text-green-500 text-xl" />
        </Tooltip>
      );
    case "Strefa stanów niskich":
      return (
        <Tooltip text={status}>
          <GrStatusWarningSmall className="text-yellow-500 text-xl" />
        </Tooltip>
      );
    case "Poniżej minimum okresowego":
      return (
        <Tooltip text={status}>
          <GrStatusWarningSmall className="text-red-500 text-xl" />
        </Tooltip>
      );
    case "Brak danych stanu wody":
    case "Brak stanów charakterystycznych":
    case "Brak stanów charakterystycznych i umownych":
      return (
        <Tooltip text={status}>
          <PiMinus className="text-xl" />
        </Tooltip>
      );

    default:
      return <p>{status}</p>;
  }
};

export default DisplayStatus;
