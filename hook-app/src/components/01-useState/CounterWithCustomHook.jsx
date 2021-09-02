import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Counter with Hook: {counter} </h1>
      <hr />
      <button onClick={() => increment(1)}>+ 1</button>
      <button onClick={reset}>Reset</button>
      {/* reset no necesita valores */}
      <button onClick={() => decrement(1)}>- 1</button>
    </div>
  );
};
