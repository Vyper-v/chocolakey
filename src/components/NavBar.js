import React from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import { CartWidget } from "./CartWidget";

const listItems = [
  { url: "/products", data: "Products" },
  { url: "/news", data: "News" },
  { url: "/about", data: "About" },
  { url: "/contact", data: "Contact" },
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
