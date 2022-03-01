import { useState } from "react";

export function useCounter(initial = 0, leftLimit = false, rightLimit = false) {
  const [counter, setCounter] = useState(initial);
  function increment(factor = 1) {
    if (rightLimit === false || counter < rightLimit)
      setCounter(counter + factor);
  }
  function decrement(factor = 1) {
    if (leftLimit === false || counter > leftLimit)
      setCounter(counter - factor);
  }
  const resetCounter = () => setCounter(initial);
  return { counter, increment, decrement, resetCounter };
}
