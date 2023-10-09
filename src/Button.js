import React from "react";

function Button({ id, value, onClick }) {
  return (
    <button id={id} value={value} className="btn" type="button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
