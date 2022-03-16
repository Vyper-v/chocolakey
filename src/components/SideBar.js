import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = ({ categories }) => {
  return (
    <div className="flex flex-col gap-2 flex-shrink flex-grow-0">
      {categories.map((category) => (
        <div key={category}>
          <NavLink
            to={`/category/${category}`}
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal opacity-40"
            }
          >
            {category}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
