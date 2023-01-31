import React from "react";
import "../styles/button.css";

export const Button = (props) => {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={`button-container ${
        isOperator(props.children) ? "operator" : null
      }`}
      onClick={() => props.addInput(props.children)}
    >
      {props.children}
    </div>
  );
};
