import React, { useEffect } from "react";
import Button from "./Button";

let counter = 0;
let igualUse = false;

function GroupButton({ operacion, setOperacion, setSolve }) {
  useEffect(() => {
    console.log(operacion);
  }, [operacion]);

  const solveOperation = (operacion) => {
    if (operacion.includes("(")) {
      let apertura = operacion.match(/\(/g).length;
      let cierre = operacion.match(/\)/g) ? operacion.match(/\)/g).length : 0;
      while (cierre < apertura) {
        operacion += ")";
        cierre++;
      }
    }
    operacion = operacion.replace(/(\d)\(/g, `$1*(`);
    operacion = operacion.replace(/\)(\d)/g, `)*$1`);
    operacion = operacion.replace(/\b0+(\d+)/g, `$1`);

    return eval(operacion);
  };

  const handleClickNumber = (value) => {
    if (operacion === "0" || igualUse === true) {
      setOperacion(value);
      setSolve(value);
    } else {
      setOperacion(operacion + value);
      setSolve(solveOperation(operacion + value));
    }

    value === "0" &&
      /\d.?[+\-*/()]0$/.test(operacion) &&
      setOperacion(operacion);

    igualUse = false;
  };

  const handleClickOperator = (value) => {
    igualUse = false;
    if (value === "(") {
      /[0-9+\-*/)(.]$/.test(operacion) && setOperacion(operacion + value);
      counter++;
      return operacion === "0" && setOperacion(value);
    } else if (value === ")") {
      if (counter > 0 && /[0-9.)]$/.test(operacion)) {
        setOperacion(operacion + value);
        counter > 0 && counter--;
      } else {
        setOperacion(operacion);
      }
    } else if ("*/".includes(value)) {
      /[0-9.]$/.test(operacion) && setOperacion(operacion + value);
      /[/*+\-(]$/.test(operacion) &&
        setOperacion(operacion.slice(0, -1) + value);
      (operacion.at(-2) === value || /[+\-*/]-$/.test(operacion)) &&
        setOperacion(operacion.slice(0, -2) + value);
    } else if ("+-".includes(value)) {
      if (value === "-") {
        operacion.at(-1) === "-"
          ? setOperacion(operacion)
          : setOperacion(operacion + value);
      } else if (value === "+") {
        /[+\-*/]-$/.test(operacion)
          ? setOperacion(operacion.slice(0, -2) + value)
          : setOperacion(operacion + value);
      }
    } else if (value === ".") {
      /\.\d*?$/.test(operacion)
        ? setOperacion(operacion)
        : setOperacion(operacion + value);
    }
  };

  const handleClickEqual = () => {
    try {
      setSolve("");
      setOperacion(String(solveOperation(operacion)));
      igualUse = true;
    } catch (error) {
      setSolve("Error de sintaxis");
    }
  };

  const clearDisplay = () => {
    setOperacion("0");
    setSolve("");
    counter = 0;
    igualUse = false;
  };

  const handleClickDelete = () => {
    operacion.at(-1) === "(" && counter--;
    operacion.at(-1) === ")" && counter++;
    igualUse = false;

    setOperacion(operacion.slice(0, -1));
    try {
      setSolve(solveOperation(operacion.slice(0, -1)));
    } catch (error) {
      setSolve("Error de sintaxis");
    }
    operacion.length <= 1 && setOperacion("0");
  };

  return (
    <div className="group-btn">
      <Button onClick={clearDisplay} id="clear" value={"AC"} />
      <Button
        onClick={() => {
          handleClickOperator("(");
        }}
        id={"parentesis-left"}
        value={"("}
      />
      <Button
        onClick={() => {
          handleClickOperator(")");
        }}
        id={"parentesis-right"}
        value={")"}
      />
      <Button
        onClick={() => {
          handleClickOperator("*");
        }}
        id={"multiply"}
        value={"*"}
      />
      <Button
        onClick={() => {
          handleClickNumber("7");
        }}
        id={"seven"}
        value={"7"}
      />
      <Button
        onClick={() => {
          handleClickNumber("8");
        }}
        id={"eight"}
        value={"8"}
      />
      <Button
        onClick={() => {
          handleClickNumber("9");
        }}
        id={"nine"}
        value={"9"}
      />
      <Button
        onClick={() => {
          handleClickOperator("/");
        }}
        id={"divide"}
        value={"/"}
      />
      <Button
        onClick={() => {
          handleClickNumber("4");
        }}
        id={"four"}
        value={"4"}
      />
      <Button
        onClick={() => {
          handleClickNumber("5");
        }}
        id={"five"}
        value={"5"}
      />
      <Button
        onClick={() => {
          handleClickNumber("6");
        }}
        id={"six"}
        value={"6"}
      />
      <Button
        onClick={() => {
          handleClickOperator("-");
        }}
        id={"subtract"}
        value={"-"}
      />
      <Button
        onClick={() => {
          handleClickNumber("1");
        }}
        id={"one"}
        value={"1"}
      />
      <Button
        onClick={() => {
          handleClickNumber("2");
        }}
        id={"two"}
        value={"2"}
      />
      <Button
        onClick={() => {
          handleClickNumber("3");
        }}
        id={"three"}
        value={"3"}
      />
      <Button
        onClick={() => {
          handleClickOperator("+");
        }}
        id={"add"}
        value={"+"}
      />
      <Button
        onClick={() => {
          handleClickNumber("0");
        }}
        id={"zero"}
        value={"0"}
      />
      <Button
        onClick={() => {
          handleClickOperator(".");
        }}
        id={"decimal"}
        value={"."}
      />
      <Button
        onClick={() => {
          handleClickDelete();
        }}
        id={"delete"}
        value={"DEL"}
      />
      <Button
        onClick={() => {
          handleClickEqual("=");
        }}
        id={"equals"}
        value={"="}
      />
    </div>
  );
}

export default GroupButton;
