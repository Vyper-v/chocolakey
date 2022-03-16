import { ArrowsExpandIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const ItemPreview = ({ idMeal, strMeal, strMealThumb, price }) => {
  return (
    <div className="item">
      <header>
        <img src={strMealThumb} alt={strMeal} loading="lazy" />
        <Link to={`/item/${idMeal}`} className="absolute top-2 right-2 text-gray-300">
          <ArrowsExpandIcon className="w-5 h-5 drop-shadow" />
        </Link>
        <ItemCount />
      </header>
      <footer>
        <span className="item-name">{strMeal}</span>
        <span className="item-price">$ {price}</span>
      </footer>
    </div>
  );
};
