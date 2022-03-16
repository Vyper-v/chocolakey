import React from "react";
import { useCounter } from "hooks/useCounter";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";

export const ItemCount = ({
  initial = 1,
  stock = Math.floor(40 * Math.random()),
}) => {
  const { counter, increment, decrement } = useCounter(initial, 0, stock);
  return (
    <div className="buttons">
      <button type="button" data-type="icon" onClick={() => decrement()}>
        <MinusCircleIcon className="icon" />
      </button>
      <span className="counter">{counter}</span>
      <button type="button" data-type="icon" onClick={() => increment()}>
        <PlusCircleIcon className="icon" />
      </button>
    </div>
  );
};
