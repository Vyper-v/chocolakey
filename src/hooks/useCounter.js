import { useState } from "react";

export function useCounter({
  initial = 1,
  leftLimit = false,
  rightLimit = false,
  condition = true,
}) {
  const [counter, setCounter] = useState(initial);
  function increment(factor = 1) {
    if ((rightLimit === false || counter < rightLimit) && condition)
      setCounter(counter + factor);
  }
  function decrement(factor = 1) {
    if ((leftLimit === false || counter > leftLimit) && condition)
      setCounter(counter - factor);
  }
  const resetCounter = () => setCounter(initial);
  return { counter, increment, decrement, resetCounter };
}
