import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="/">Chocolakey</a>
      </h1>
      <ul>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
