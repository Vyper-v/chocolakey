import { ItemLIstContainer } from "components/Item/ItemLIstContainer";
import { SideBarContainer } from "components/SideBarContainer";
import React from "react";

export const ProductsScreen = () => {
  return (
    <div className="sidebar">
      <SideBarContainer />
      <ItemLIstContainer />
    </div>
  );
};
