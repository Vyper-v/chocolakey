import { ArrowsExpandIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export const ItemPreview = ({
  idMeal,
  strMeal,
  strMealThumb,
  price,
  stock,
}) => {
  return (
    <div className="item">
      <header>
        <img
          src={strMealThumb}
          alt={strMeal}
          loading="lazy"
          className={stock <= 0 ? "grayscale" : ""}
        />
        <Link
          to={`/item/${idMeal}`}
          className="flex gap-4 absolute top-2 right-2 text-primary has-tooltip"
        >
          <span className="tooltip text-sm -ml-10 bg-light rounded px-1">
            View
          </span>
          <ArrowsExpandIcon className="hover:drop-shadow" />
        </Link>
      </header>
      <footer>
        <span className="item-name">{strMeal}</span>
        <span className="item-price">$ {price}</span>
      </footer>
    </div>
  );
};
