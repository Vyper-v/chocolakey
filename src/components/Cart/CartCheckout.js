import { CartContext } from "context/CartContext";
import { doc, updateDoc } from "firebase/firestore";
import React, { useContext } from "react";
import db from "🔥base/db";
import { setPurchase } from "🔥base/helpers/setPurchase";

export const CartCheckout = () => {
  const { cart, clear } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.fromEntries(new FormData(e.target));
    setPurchase(db, user, cart);
    cart.forEach(async (item) => {
      const docRef = doc(db, "previews", item.idMeal);
      await updateDoc(docRef, { stock: item.stock - item.quantity });
    });
    clear();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="full-name">Name</label>
        <input type="text" name="name" id="full-name" required />
        <label htmlFor="email-user">Email</label>
        <input type="email" name="email" id="email-user" required />
        <label htmlFor="phone-user">Phone</label>
        <input type="tel" name="phone" id="phone-user" required />
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};
