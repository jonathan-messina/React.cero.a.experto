import { useState } from "react";

export const useCounter = (initialState = 0) => {
  const [state, setState] = useState(initialState);

  const increment = (factor = 1) => {
    setState(state + factor);
  };

  const decrement = (factor = 1) => {
    return state <= 0 ? state : setState(state - factor);
  };
  //ternary to verify that state wont turn into a negative number.

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
