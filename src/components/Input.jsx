import React from "react";

function Input(type = "text", label) {
  return (
    <input type={type} label={label}>
      {label}
    </input>
  );
}
export default Input;
