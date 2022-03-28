import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = ({ categories }) => {
  return (
    <div className="flex flex-col gap-size-0 flex-shrink flex-grow-0 bg-orange-500 rounded-tr p-size-0 min-h-screen">
      {categories.map((category) => (
        <div key={category}>
          <NavLink
            to={`/category/${category}`}
            className={({ isActive }) =>
              isActive ? "font-bold text-light" : "font-thin opacity-80 text-light"
            }
          >
            {category}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
