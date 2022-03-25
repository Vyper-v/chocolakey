import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { CartContext } from "context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(cart.length);

  useEffect(() => {
    setTotal(cart.length);
  }, [cart]);

  return (
    <Link to="/cart" className="carticon">
      <ShoppingBagIcon />
      <span className="count">{total}</span>
    </Link>
  );
};
