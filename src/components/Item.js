import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const Item = ({ strMeal, strMealThumb, idMeal }) => {
  const { counter, increment, decrement } = useCounter(1, 0, 10);
  const price = useState(Math.floor(5 + Math.random() * 10));

  return (
    <li key={idMeal} className="item">
      <header>
        <img src={strMealThumb} alt={strMeal} />

        <div className="buttons">
          <button type="button" data-type="icon" onClick={() => decrement()}>
            <MinusCircleIcon className="icon" />
          </button>
          <span className="counter">{counter}</span>
          <button type="button" data-type="icon" onClick={() => increment()}>
            <PlusCircleIcon className="icon" />
          </button>
        </div>
      </header>
      <footer>
        <span className="item-name">{strMeal}</span>
        <span className="item-price">$ {price}</span>
      </footer>
    </li>
  );
};
