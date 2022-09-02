import React from "react";
import classes from "../styles/Button.module.css";

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`${classes.btn} ${className}`}>
      {children}
    </button>
  );
};

interface Props {
  children: string;
  className?: string;
  onClick: () => void;
}

export default Button;
