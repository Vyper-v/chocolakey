import { ArrowsExpandIcon, ArrowSmLeftIcon } from "@heroicons/react/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ strMeal, strMealThumb, idMeal, price }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const myPath = `/item/${idMeal}`;

  return (
    <div key={idMeal} className="item">
      <header>
        <img src={strMealThumb} alt={strMeal} loading="lazy" />
        {pathname === myPath ? (
          <button
            onClick={() => navigate(-1)}
            className="absolute top-2 right-5 text-sm font-semibold border-gray-300 text-gray-300 drop-shadow"
          >
            <ArrowSmLeftIcon className="w-5 h-5 " />
          </button>
        ) : (
          <>
            <Link to={myPath} className="absolute top-2 right-2 text-gray-300">
              <ArrowsExpandIcon className="w-5 h-5 drop-shadow" />
            </Link>
            <ItemCount />
          </>
        )}
      </header>
      <footer>
        <span className="item-name">{strMeal}</span>
        <span className="item-price">$ {price}</span>
      </footer>
    </div>
  );
};
