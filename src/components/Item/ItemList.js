import React from "react";
import { ItemPreview } from "./ItemPreview";


export const ItemList = ({ data }) => {
  return (
    <div className="[ cluster justify-center ] [ mx-auto px-size-0 pb-size-0 ] ">
      {data.map((props) => (
        <ItemPreview key={props.idMeal} {...props} />
      ))}
    </div>
  );
};
