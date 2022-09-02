import React from "react";

const Button: React.FC<Props> = ({
  bcolor,
  text,
  height,
  onClick,
  fontSize,
  radius,
  width,
  color,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bcolor,
        border: "1px solid",
        borderRadius: radius,
        height,
        color: color,
        width,
        cursor: "pointer",
        fontSize: fontSize,
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
  fontSize: string;
  radius: string;
  width: string;
  color: string;
}
