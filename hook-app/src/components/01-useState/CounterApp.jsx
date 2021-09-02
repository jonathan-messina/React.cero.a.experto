import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [state, setState] = useState({
    //puede usarse la desestructuracion dentro del hook, pero no se recomienda
    counter1: 10,
    counter2: 20,
  });

  const { counter1, counter2 } = state;
  //al desestructurar perdemos la referencia a state y no podremos usarlo
  //para por ej usar el operador spread
  //por lo que lo ideal es no desestructurar el hook y en su lugar
  //crear una nueva const desestructurarla e igualarla al state

  return (
    <div>
      <h1>Counter 1 {counter1} </h1>
      <h1>Counter 2 {counter2} </h1>
      <hr />
      <button
        onClick={() => {
          setState({
            ...state,
            counter1: counter1 + 1,
            //para sobreescribir valores, deben colocarse luego del copiado del spread
          });
        }}
        className="btn btn-primary">
        +1
      </button>
    </div>
  );
};
