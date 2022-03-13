import { Link, useLocation, useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ strMeal, strMealThumb, idMeal, price }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const myPath = `/item/${idMeal}`;

  return (
    <li key={idMeal} className="item">
      <header>
        <img src={strMealThumb} alt={strMeal} loading="lazy" />
        <ItemCount />
        {pathname === myPath ? (
          <button
            onClick={() => navigate(-1)}
            className="absolute top-2 right-5 text-sm font-semibold border-gray-200 text-gray-200"
          >
            back
          </button>
        ) : (
          <Link
            to={myPath}
            className="absolute top-2 right-5 text-sm text-gray-200"
          >
            View more
          </Link>
        )}
      </header>
      <footer>
        <span className="item-name">{strMeal}</span>
        <span className="item-price">$ {price}</span>
      </footer>
    </li>
  );
};
