import { useState } from "react";

type ChildrenProp = {
  children: React.ReactNode;
};
type TextProp = {
  text: string;
};

type TooltipProps = ChildrenProp & TextProp;

const Tooltip = ({ children, text }: TooltipProps) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <div className="relative" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div>{children}</div>
      {hover && (
        <div className=" bg-red-500 px-2 py-1 z-20 absolute bottom-0 left-6 text-xs min-w-[100px]">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
