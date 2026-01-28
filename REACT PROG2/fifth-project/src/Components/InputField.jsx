import React from "react";

function InputField({ type, placeholder, inputRef }) {
  return (
    <div>
      <input type={type} placeholder={placeholder} ref={inputRef} />
    </div>
  );
}

export default InputField;