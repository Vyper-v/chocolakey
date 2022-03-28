import { useCounter } from "hooks/useCounter";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/solid";

export const ItemCount = ({
  initial = 1,
  leftLimit = -1,
  stock = 0,
  onIncrement = () => {},
  onDecrement = () => {},
  condition = true,
}) => {
  const { counter, increment, decrement } = useCounter({
    initial,
    leftLimit,
    rightLimit: stock,
    condition,
  });
  return (
    <div className="buttons">
      <button
        type="button"
        data-type="icon"
        onClick={() => {
          decrement(onDecrement);
        }}
      >
        <MinusCircleIcon className="icon" />
      </button>
      <span className="counter">{counter}</span>
      <button
        type="button"
        data-type="icon"
        onClick={() => {
          increment(onIncrement);
        }}
      >
        <PlusCircleIcon className="icon" />
      </button>
    </div>
  );
};
