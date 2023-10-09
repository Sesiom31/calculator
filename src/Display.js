import React from "react";

function Display({ operacion, solve }) {
  return (
    <div className="container-display">
      <input
        type="text"
        readOnly
        className="display-top"
        value={solve}
      />
      <div>
        <input
          type="text"
          id="display"  
          readOnly
          className="display-bottom"
          value={operacion}
        />
      </div>
    </div>
  );
}

export default Display;
