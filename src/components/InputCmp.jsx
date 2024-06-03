import React, { useId } from "react";
import "../css/InputCmp.css";

function InputCmp({ type = "text", label, ...props }) {
  const id = useId();
  return (
    <>
      {/* <label htmlFor={id} className="text-sm text-gray-900">
        {label}
      </label> */}
      <input id={id} type={type} placeholder={label} {...props} />
    </>
  );
}
export default InputCmp;
