import React from "react";
import classes from "../styles/TextField.module.css";

const Dropdown = ({
  onChange,
  className,
  name,
  children,
  placeholder,
  ...rest
}: TextFieldProps) => {
  return (
    <select
      name={name}
      placeholder={placeholder}
      className={`${classes.textField} ${className}`}
      onChange={(event) => onChange(event.target)}
      {...rest}
    >
      {children}
    </select>
  );
};

interface TextFieldProps {
  value?: string;
  onChange: (event: any) => void;
  className?: string;
  placeholder?: string;
  name: string;
  children: JSX.Element | JSX.Element[];
}

export default Dropdown;
