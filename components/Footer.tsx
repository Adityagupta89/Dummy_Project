import React from "react";

const Footer: React.FC<Props> = ({ text, color }) => {
  return (
    <div className="layout-footer" style={{ color: color }}>
      {text}
    </div>
  );
};
export default Footer;

interface Props {
  text: string;
  color: string;
}
