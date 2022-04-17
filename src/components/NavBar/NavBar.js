import React from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import { CartWidget } from "../Cart/CartWidget";

const listItems = [
  { url: "/section/products", data: "Products" },
  { url: "/section/news", data: "News" },
  { url: "/section/about", data: "About" },
  { url: "/section/contact", data: "Contact" },
];

export const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">useSpices(🍲)</Link>
      </h1>
      <div className="flex gap-base items-center">
        <BurgerMenu listItems={listItems} />
        <CartWidget />
      </div>
    </nav>
  );
};

