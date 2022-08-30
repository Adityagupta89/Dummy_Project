import React from "react";

const Card: React.FC<Props> = ({ btncolor, heading, paragraph, onClick }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "250px",
        height: "260px",
        boxShadow: "#837d7d 0px 0px 10px 0px",
      }}
    >
      <button
        style={{
          backgroundColor: btncolor,
          marginTop: "20px",
          marginLeft: "20px",
          width: "50px",
          cursor: "pointer",
        }}
      >
        News
      </button>
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
