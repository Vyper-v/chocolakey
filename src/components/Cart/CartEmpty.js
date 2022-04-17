import React from "react";
import { Link } from "react-router-dom";

export const CartEmpty = () => (
  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-size-2 text-center align-middle">
    Your cart is empty. Back to{" "}
    <Link to="/" replace className="underline">
      Home
    </Link>
  </p>
);
