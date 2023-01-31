import React from "react";
import "../styles/clearButton.css";

export const ClearButton = (props) => {
  return (
    <div className="clear-button" onClick={props.handleClick}>
      Clear
    </div>
  );
};
