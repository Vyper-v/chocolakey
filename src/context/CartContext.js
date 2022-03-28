import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartStorage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(cartStorage || []);

  const actions = {
    isInCart(idMeal) {
      return !!cart.find((i) => i.idMeal === idMeal);
    },
    addToCart(item) {
      const { idMeal, quantity } = item;
      // si el item existe en el carro, actualizar la cantidad
      if (this.isInCart(idMeal)) {
        return this.updateItem(idMeal, (i) => ({
          ...i,
          quantity: i.quantity + quantity,
        }));
      }
      // si no existe, agregarlo al carro
      const newCart = [...cart, item];
      setCart(newCart);
    },
    removeFromCart(idMeal) {
      const newCart = cart.filter((item) => item.idMeal !== idMeal);
      setCart(newCart);
    },
    updateItem(idMeal, callback) {
      // busca el item en el carro, y retorna un arreglo con el item actualizado

      // callback es la funcion que modificara el item

      const newCart = cart.map((item) => {
        return item.idMeal === idMeal ? callback(item) : item;
      });
      setCart(newCart);
    },
    clear() {
      setCart([]);
    },
    getTotalPrice() {
      return cart.reduce((acc, { price, quantity }) => {
        return acc + price * quantity;
      }, 0);
    },
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    // cart.forEach(({ quantity, idMeal }) => {
    //   if (quantity === 0) {
    //     actions.removeFromCart(idMeal);
    //   }
    // });
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, actions }}>
      {children}
    </CartContext.Provider>
  );
};
