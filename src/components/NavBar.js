import React from "react";
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
        <a href="/">Chocolakey</a>
      </h1>
      <div className="flex gap-base items-center">
        <BurgerMenu listItems={listItems} />
        <CartWidget />
      </div>
    </nav>
  );
};
