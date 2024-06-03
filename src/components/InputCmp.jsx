import React from "react";

function InputCmp(type = "text", label) {
  return (
    <input type={type} label={label}>
      {label}
    </input>
  );
}
export default InputCmp;
