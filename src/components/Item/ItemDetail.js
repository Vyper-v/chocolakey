import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { CartContext } from "context/CartContext";

export const ItemDetail = ({
  idMeal,
  strMeal,
  strMealThumb,
  strCategory,
  strArea,
  strInstructionsArray,
  strTagsArray,
  price,
  stock,
  ingredients,
}) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState({
    idMeal,
    strMeal,
    price,
    quantity: 1,
    stock,
  });

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(cartData);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    addToCart(cartData);
    navigate("/cart");
  };

  return (
    <div className="item-detail">
      <div className="item-info">
        <div className="meal-info">
          <h1>{strMeal}</h1>
          <div>
            <img src={strMealThumb} alt={strMeal} loading="lazy" />
            <h3 className="info__name">Category</h3>
            <span>{strCategory}</span>
            <h3 className="info__name">Area</h3>
            <span>{strArea}</span>
            {strTagsArray && <h3 className="info__name">Tags</h3>}
            {strTagsArray &&
              strTagsArray.map((tag) => (
                <span key={tag} className="block">
                  {tag}
                </span>
              ))}
          </div>
        </div>
        <form className="buy-item" onSubmit={handleAddToCart}>
          <h2>Are you lazy to cook?</h2>
          <ItemCount
            onDecrement={(counter) =>
              setCartData({ ...cartData, quantity: counter })
            }
            onIncrement={(counter) =>
              setCartData({ ...cartData, quantity: counter })
            }
            condition={stock !== 0}
            stock={stock}
          />

          <div className="flex flex-wrap gap-size-0">
            <h3 className="item-price px-3 py-1 rounded text-gray-200 text-center">
              $ {price}
            </h3>
            <button
              type="submit"
              className="bg-secondary text-light border-none active:bg-black"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <button
              className="bg-primary text-light border-none active:bg-black"
              onClick={handleBuyNow}
            >
              Buy now
            </button>
          </div>
        </form>
      </div>

      <div className="item-recipe">
        <div className="instructions">
          <h2>Cook it yourself</h2>
          <ol className="list-decimal list-inside flow">
            {strInstructionsArray.map((p) => (
              <li key={crypto.randomUUID()}>{p}</li>
            ))}
          </ol>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <div className="cluster">
            {ingredients.map(({ ingredient, measure }) => (
              <div key={crypto.randomUUID()}>
                <p className="rounded-full px-3 py-1 capitalize font-semibold bg-gray-300 ">
                  {ingredient}: <span className="font-normal">{measure}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
