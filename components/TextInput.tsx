import React from "react";
import classes from "../styles/TextField.module.css";

const TextInput = ({ onChange, name, ...rest }: TextFieldProps) => {
  return (
    <input
      className={classes.textField}
      name={name}
      onChange={(event) => onChange(event.target)}
      {...rest}
    />
  );
};

interface TextFieldProps {
  value?: string;
  onChange: (event: any) => void;
  className?: string;
  placeholder?: string;
  name: string;
  type?: "email" | "password" | "text" | "button";
}

export default TextInput;
