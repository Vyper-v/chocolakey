import { useCounter } from "hooks/useCounter";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";

export const ItemCount = ({
  initial = 1,
  min = 1,
  stock = Math.floor(40 * Math.random()),
  onIncrement = () => {},
  onDecrement = () => {},
  condition = true,
}) => {
  const { counter, increment, decrement } = useCounter({
    initial,
    min,
    stock,
    condition,
  });
  return (
    <div className="buttons">
      <button
        type="button"
        data-type="icon"
        onClick={() => {
          decrement();
          onDecrement(counter);
        }}
      >
        <MinusCircleIcon className="icon" />
      </button>
      <span className="counter">{counter}</span>
      <button
        type="button"
        data-type="icon"
        onClick={() => {
          increment();
          onIncrement(counter);
        }}
      >
        <PlusCircleIcon className="icon" />
      </button>
    </div>
  );
};
