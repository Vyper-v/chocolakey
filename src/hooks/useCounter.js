import { useState } from "react";

export function useCounter({
  initial = 1,
  leftLimit = false,
  rightLimit = false,
  condition = true,
}) {
  const [counter, setCounter] = useState(initial);
  function increment(customFn = () => {}, factor = 1) {
    if ((rightLimit === false || counter < rightLimit) && condition) {
      customFn(counter + factor);
      setCounter(counter + factor);
    }
  }
  function decrement(customFn = () => {}, factor = 1) {
    if ((leftLimit === false || counter > leftLimit) && condition) {
      customFn(counter - factor);
      setCounter(counter - factor);
    }
  }
  const reset = () => setCounter(initial);
  return { counter, increment, decrement, reset };
}
