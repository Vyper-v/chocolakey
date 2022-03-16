import { ArrowSmLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({
  strMeal,
  strMealThumb,
  strDrinkAlternate,
  strCategory,
  strArea,
  strInstructions,
  price
}) => {
  const navigate = useNavigate();

  return (
    <div className="item">
      <header>
        <ItemCount />
        <img src={strMealThumb} alt={strMeal} loading="lazy" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 right-5 text-sm font-semibold border-gray-300 text-gray-300 drop-shadow"
        >
          <ArrowSmLeftIcon className="w-5 h-5 " />
        </button>
      </header>
      <footer>
        <span className="item-name">{strMeal}</span>
        <span className="item-price">$ {price}</span>
      </footer>
    </div>
  );
};
