import { TrashIcon } from "@heroicons/react/solid";
import { ItemCount } from "components/Item/ItemCount";

export const CartItem = ({ data }) => {
  const {
    idMeal,
    strMeal,
    price,
    stock,
    quantity,
    handleDecrement,
    handleIncrement,
    handleRemove,
  } = data;
  return (
    <div className="p-size-0 flex justify-between flex-wrap items-center">
      <div className="flex flex-col items-center grow">
        <button data-type="icon" onClick={() => handleRemove(idMeal)}>
          <TrashIcon className="fill-red-600" />
        </button>
        <ItemCount
          initial={quantity}
          stock={stock}
          onDecrement={() => handleDecrement(idMeal)}
          onIncrement={() => handleIncrement(idMeal)}
          condition={stock !== 0}
        />
      </div>
      <div className="flex flex-col items-start gap-size-0">
        <h3>{strMeal}</h3>
        <span className="item-price rounded-full px-3 py-1 capitalize font-semibold text-size-0 text-light text-center">
          $ {price}
        </span>
      </div>
    </div>
  );
};
