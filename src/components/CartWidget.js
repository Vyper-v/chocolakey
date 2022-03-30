import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { CartContext } from "context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(cart.length);

  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotal(totalItems);
  }, [cart]);

  return (
    <Link to={`/cart`} className="carticon">
      <ShoppingBagIcon />
      <span className="count">{total}</span>
    </Link>
  );
};
