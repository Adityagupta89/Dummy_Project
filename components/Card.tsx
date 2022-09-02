import React from "react";
import classes from "../styles/Card.module.css";

const Card: React.FC<Props> = ({ className, childern }) => {
  return <div className={`${classes.card} ${className}`}>{childern}</div>;
};
export default Card;

interface Props {
  childern: any;
  className: string;
}
