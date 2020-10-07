import React from "react";
import "./Input.css";

const Input = ({ placeholder, onChange, value }) => {
  return (
    <input
      className="Input"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value = {value}
    ></input>
  );
};

export default Input;
