import React, { useState } from "react";
import "./App.css";
import Display from "./Display";
import GroupButton from "./GroupButton";

function App() {
  const [operacion, setOperacion] = useState("0");
  const [solve, setSolve] = useState("");

  return (
    <div className="container">
      <Display operacion={operacion} solve={solve} />
      <GroupButton
        setOperacion={setOperacion}
        operacion={operacion}
        setSolve={setSolve}
        solve={solve}
      />
    </div>
  );
}

export default App;
