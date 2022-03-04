import { useState } from "react";
import { ItemCount } from "./ItemCount";

export const Item = ({ strMeal, strMealThumb, idMeal }) => {
  const price = useState(Math.floor(5 + Math.random() * 10));

  return (
    <li key={idMeal} className="item">
      <header>
        <img src={strMealThumb} alt={strMeal} />
        <ItemCount stock={4}/>
      </header>
      <footer>
        <span className="item-name">{strMeal}</span>
        <span className="item-price">$ {price}</span>
      </footer>
    </li>
  );
};
