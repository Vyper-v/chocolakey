import React from "react";
import { ItemDetailContainer } from "./ItemDetailContainer";

export const ItemList = ({ data }) => {
  return (
    <div className="[ cluster justify-center ] [ mx-auto ]">
      {data.map((id, i) => (
        <ItemDetailContainer key={i} idMeal={id} />
      ))}
    </div>
  );
};
