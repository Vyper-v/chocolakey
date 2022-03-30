import { TrashIcon } from "@heroicons/react/solid";
import { CartContext } from "context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, updateItem, removeFromCart, getTotalPrice, clear } =
    useContext(CartContext);

  const handleIncrement = (idMeal) =>
    updateItem(idMeal, (item) => ({
      ...item,
      quantity: item.quantity + 1,
    }));

  const handleDecrement = (idMeal) =>
    updateItem(idMeal, (item) => {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    });

  const handleRemove = (idMeal) => removeFromCart(idMeal);

  return (
    <div className="space-y-4">
      <h2>Cart</h2>

      <div className="cluster min-h-[70vh] bg-gray-200 items-start">
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
          <p className="mx-auto shrink self-center">
            Your cart is empty. Back to{" "}
            <Link to="/" replace className="underline">
              Home
            </Link>
          </p>
        )}
      </div>

      {cart && <h3>Total: {getTotalPrice()}</h3>}
      <button onClick={() => clear()}>
        <TrashIcon />
      </button>
    </div>
  );
};
