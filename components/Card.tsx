import React from "react";
import classes from '../styles/Card.module.css'
import Button from "./Button";
const Card: React.FC<Props> = ({ btncolor, heading, paragraph, onClick }) => {
  return (
    <div className={classes.card}>
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
      <Button
          text="Click"
          width="80px"
          height="45px"
          radius="5px"
          fontSize="16px"
          onClick={onClick}
          bcolor={btncolor}
          color="white"
        />
        </div>
      <div style={{ margin: "0px 20px" }}>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
export default Card;

interface Props {
  btncolor: string;
  heading: string;
  paragraph: string;
  onClick: () => void;
}
