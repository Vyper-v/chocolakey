import { ItemListContainer } from "components/ItemList/ItemListContainer";
import { SideBarContainer } from "components/SideBar/SideBarContainer";
import React from "react";

export const ProductsScreen = () => {
  return (
    <div className="sidebar">
      <SideBarContainer />
      <ItemListContainer />
    </div>
  );
};
