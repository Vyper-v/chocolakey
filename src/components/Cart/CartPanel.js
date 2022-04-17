import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { CartCheckout } from "./CartCheckout";
export function CartPanel({ clear, getTotalPrice }) {
  return (
    <div className="panel">
      <div className="emptyCart">
        <button onClick={() => clear()}>
          <TrashIcon />
        </button>
        <p>Empty Cart</p>
      </div>
      <h3>Total: $ {getTotalPrice()}</h3>
      <CartCheckout />
    </div>
  );
}
