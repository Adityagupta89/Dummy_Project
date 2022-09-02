import React from "react";

const Footer: React.FC<Props> = ({ color, children, className }) => {
  return (
    <div className={`layout-footer ${className}`} style={{ color: color }}>
      {children}
    </div>
  );
};

interface Props {
  children: JSX.Element | JSX.Element[];
  className: string;
  color: string;
}

export default Footer;
