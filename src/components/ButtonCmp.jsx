import React from "react";
import "../css/ButtonCmp.css";

function ButtonCmp({ value, ...props }) {
  return (
    <button value={value} {...props}>
      {value}
    </button>
  );
}

export default ButtonCmp;
