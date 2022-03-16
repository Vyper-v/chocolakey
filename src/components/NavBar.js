import React from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import { CartWidget } from "./CartWidget";

const listItems = [
  { url: "/section/products", data: "Products" },
  { url: "/section/news", data: "News" },
  { url: "/section/about", data: "About" },
  { url: "/section/contact", data: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">Chocolakey</Link>
      </h1>
      <div className="flex gap-base items-center">
        <BurgerMenu listItems={listItems} />
        <CartWidget />
      </div>
    </nav>
  );
};
