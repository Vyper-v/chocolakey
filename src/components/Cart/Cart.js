import { TrashIcon } from "@heroicons/react/solid";
import { CartContext } from "context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCheckout } from "./CartCheckout";
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
    <div className="flex flex-col md:flex-row h-full min-h-full">
      <div className="cluster grow bg-gray-200 content-start">
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
      <div className="p-size-0 space-y-size-0">
        <div className="flex gap-size-0 text-red-500 items-center capitalize">
          <button
            onClick={() => clear()}
            className="border-red-500 bg-red-200 "
          >
            <TrashIcon />
          </button>
          <p>empty cart</p>
        </div>
        {cart && <h3>Total: {getTotalPrice()}</h3>}
        {cart.length !== 0 && <CartCheckout />}
      </div>
    </div>
  );
};
