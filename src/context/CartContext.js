import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartStorage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(cartStorage || []);

  const actions = {
    isInCart(idMeal) {
      const existingItem = cart.find((i) => i.idMeal === idMeal);
      return existingItem ? true : false;
    },
    addToCart(item) {
      const newCart = this.isInCart(item.idMeal)
        ? this.updateItem(item.idMeal, item.quantity + 1)
        : [...cart, item];
      setCart(newCart);
    },
    removeFromCart(idMeal) {
      const newCart = cart.filter((item) => item.idMeal !== idMeal);
      setCart(newCart);
    },
    updateItem(idMeal, quantity) {
      if (quantity <= 0) {
        return this.removeFromCart(idMeal);
      }

      const newCart = cart.map((item) => {
        return item.idMeal === idMeal ? { ...item, quantity } : item;
      });
      setCart(newCart);
    },
    clear() {
      setCart([]);
    },
    getTotal() {
      return cart.reduce((acc, { price, quantity }) => {
        return acc + price * quantity;
      }, 0);
    },
  };

  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartStorage !== null) {
      setCart(cartStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, actions }}>
      {children}
    </CartContext.Provider>
  );
};
