import React from "react";

function Display() {
  return (
    <div className="container-display">
      <input type="text" readOnly id="display" className="display-top" />
      <div>
        <input type="text" readOnly className="display-bottom"  value={125}/>
      </div>
    </div>
  );
}

export default Display;
