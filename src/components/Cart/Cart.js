import { CartPanel } from "./CartPanel";
import { CartContext } from "context/CartContext";
import { useContext } from "react";
import { CartEmpty } from "./CartEmpty";
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
    <div className="sidebar" data-direction="rtl">
      <div className="cluster | items">
        {cart?.map((itemCart) => (
          <CartItem
            key={itemCart.idMeal}
            {...{
              ...itemCart,
              handleDecrement,
              handleIncrement,
              handleRemove,
            }}
          />
        ))}
      </div>
      {cart?.length !== 0 ? (
        <CartPanel clear={clear} getTotalPrice={getTotalPrice} />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};
