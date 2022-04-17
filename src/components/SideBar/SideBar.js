import React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = ({ categories }) => {
  return (
    <div className="flex flex-col gap-size-0 flex-shrink flex-grow-0 bg-primary rounded-tr overflow-hidden min-h-screen md:sticky left-0 top-0">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.id}`}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-light p-size-0 hover:bg-orange-400 bg-orange-600"
              : "font-normal opacity-80 text-light hover:bg-orange-400  p-size-0"
          }
        >
          {category.id}
        </NavLink>
      ))}
    </div>
  );
};
