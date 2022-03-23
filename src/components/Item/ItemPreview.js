import { ArrowsExpandIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const ItemPreview = ({ idMeal, strMeal, strMealThumb, price }) => {
  return (
    <div className="item">
      <header>
        <img src={strMealThumb} alt={strMeal} loading="lazy" />
        <Link to={`/item/${idMeal}`} className="flex gap-4 absolute top-2 right-2 text-secondary has-tooltip">
          <span className="tooltip text-sm -ml-10 bg-light rounded px-1">View</span>
          <ArrowsExpandIcon className="hover:drop-shadow"/>
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
