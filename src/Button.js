import React from "react";

function Button({ id, value}) {
  return (
    <button id={id} value={value} className="btn" type="button">
      {value}{" "}
    </button>
  );
}

export default Button;
