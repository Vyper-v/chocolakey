import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ strMeal, strMealThumb, idMeal, price }) => {

  return (
    <li key={idMeal} className="item">
      <header>
        <img src={strMealThumb} alt={strMeal} loading="lazy" />
        <ItemCount stock={4}/>
      </header>
      <footer>
        <span className="item-name">{strMeal}</span>
        <span className="item-price">$ {price}</span>
      </footer>
    </li>
  );
};
