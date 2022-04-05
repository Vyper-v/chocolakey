import { useState } from "react";

export const useCart = (cartStorage) => {
  const [cart, setCart] = useState(cartStorage || []);

  function isInCart(idMeal) {
    return !!cart.find((i) => i.idMeal === idMeal);
  }
  function addToCart(item) {
    const { idMeal, quantity } = item;
    // si el item existe en el carro, actualizar la cantidad
    if (isInCart(idMeal)) {
      return updateItem(idMeal, (i) => ({
        ...i,
        quantity: i.quantity + quantity,
      }));
    }
    // si no existe, agregarlo al carro
    const newCart = [...cart, item];
    setCart(newCart);
  }
  function removeFromCart(idMeal) {
    const newCart = cart.filter((item) => item.idMeal !== idMeal);
    setCart(newCart);
  }
  function updateItem(idMeal, callback) {
    // busca el item en el carro, y retorna un arreglo con el item actualizado

    // callback es la funcion que modificara el item

    const newCart = cart.map((item) => {
      return item.idMeal === idMeal ? callback(item) : item;
    });
    setCart(newCart);
  }
  function clear() {
    setCart([]);
  }
  function getTotalPrice() {
    const total =cart.reduce((acc, { price, quantity }) => {
      return acc + price * quantity;
    }, 0); 
    return parseFloat(total.toFixed(2)) 
  }

  return {
    cart,
    isInCart,
    addToCart,
    removeFromCart,
    updateItem,
    clear,
    getTotalPrice,
  };
};
