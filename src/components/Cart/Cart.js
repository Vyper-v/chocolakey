import { TrashIcon } from "@heroicons/react/solid";
import { CartContext } from "context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, actions } = useContext(CartContext);

  const handleIncrement = (idMeal) =>
    actions.updateItem(idMeal, (item) => ({
      ...item,
      quantity: item.quantity + 1,
    }));

  const handleDecrement = (idMeal) =>
    actions.updateItem(idMeal, (item) => {
      if (item.quantity - 1 === 0) return actions.removeFromCart(idMeal);
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    });

  const handleRemove = (idMeal) => actions.removeFromCart(idMeal);

  return (
    <div className="space-y-4">
      <h2>Cart</h2>

      <div className="cluster min-h-[70vh] bg-gray-200">
        {cart &&
          cart.map(({ idMeal, strMeal, price, quantity, stock }) => (
            <CartItem
              key={idMeal}
              data={{
                idMeal,
                strMeal,
                price,
                quantity,
                stock,
                handleDecrement,
                handleIncrement,
                handleRemove,
              }}
            />
          ))}

        {cart.length === 0 && (
          <p>
            Your cart is empty. Back to{" "}
            <Link to="/" replace className="">
              Home
            </Link>
          </p>
        )}
      </div>

      {cart && <h3>Total: {actions.getTotalPrice()}</h3>}
      <button onClick={() => actions.clear()}>
        <TrashIcon />
      </button>
    </div>
  );
};
