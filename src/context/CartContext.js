import { useCart } from "hooks/useCart";
import { createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartStorage = JSON.parse(localStorage.getItem("cart"));
  const CartHook = useCart(cartStorage);
  const { cart } = CartHook;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={CartHook}>{children}</CartContext.Provider>
  );
};
