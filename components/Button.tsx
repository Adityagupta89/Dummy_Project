import React from "react";

const Button: React.FC<Props> = ({
  bcolor,
  text,
  height,
  onClick,
  radius,
  width,
  color,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bcolor,
        borderRadius: radius,
        height,
        color: color,
        width,
        cursor: "pointer",
        fontSize: "1.4rem",
      }}
    >
      {text}
    </button>
  );
};
export default Button;

interface Props {
  bcolor: string;
  text: string;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  color: string;
}
