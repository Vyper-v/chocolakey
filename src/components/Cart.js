import { TrashIcon } from "@heroicons/react/solid";
import { CartContext } from "context/CartContext";
import { useContext } from "react";
import { ItemCount } from "./Item/ItemCount";

export const Cart = () => {
  const { cart, actions } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>

      <ul>
        {cart &&
          cart.map(({ idMeal, strMeal, price, quantity }) => (
            <li key={idMeal + strMeal}>
              {strMeal} - {quantity} x {price}
              <ItemCount
                initial={quantity}
                onDecrement={() => actions.updateItem(idMeal, quantity - 1)}
                onIncrement={() => actions.updateItem(idMeal, quantity + 1)}
              />
              <button onClick={() => actions.removeFromCart(idMeal)}>
                remove
              </button>
            </li>
          ))}
      </ul>

      {cart && <h1>Total: {actions.getTotal()}</h1>}
      <button onClick={() => actions.clear()}>
        <TrashIcon />
      </button>
    </div>
  );
};
