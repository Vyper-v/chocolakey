import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = ({ categories }) => {
  return (
    <div className="flex flex-col gap-size-0 flex-shrink flex-grow-0 bg-orange-500 rounded-tr p-size-0 h-screen sticky left-0 top-0">
      {categories.map((category) => (
        <div key={category.id}>
          <NavLink
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-light"
                : "font-thin opacity-80 text-light"
            }
          >
            {category.id}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
