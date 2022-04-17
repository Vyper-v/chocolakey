import { TrashIcon } from "@heroicons/react/solid";
import { ItemCount } from "components/ItemCount";
import { Link } from "react-router-dom";

export const CartItem = ({
  idMeal,
  strMeal,
  price,
  stock,
  quantity,
  handleDecrement,
  handleIncrement,
  handleRemove,
}) => {
  return (
    <div className="cart-item">
      <div className="buttons">
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
        <h3>
          <Link to={`/item/${idMeal}`}>{strMeal}</Link>
        </h3>
        <span className="item-price rounded-full px-3 py-1 capitalize font-semibold text-size-0 text-light text-center">
          $ {(price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};
