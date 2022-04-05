import React, { createContext, useEffect, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [itemProps, setItemProps] = useState(
    JSON.parse(localStorage.getItem("itemProps")) || {}
  );
  useEffect(() => {
    localStorage.setItem("itemProps", JSON.stringify(itemProps));
  }, [itemProps]);

  return (
    <ItemContext.Provider value={[itemProps, setItemProps]}>
      {children}
    </ItemContext.Provider>
  );
};
