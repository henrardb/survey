import React from "react";
import "../css/ButtonCmp.css";

function ButtonCmp({ value }) {
  return <button value={value}>{value}</button>;
}

export default ButtonCmp;
