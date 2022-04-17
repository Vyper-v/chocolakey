import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "context/CartContext";

import { Info } from "./Info";
import { Recipe } from "./Recipe";
import { Checkout } from "./Checkout";

export const ItemDetail = ({
  idMeal,
  strMeal,
  strMealThumb,
  strCategory,
  strArea,
  instructions,
  tags,
  price,
  stock,
  ingredients,
  measures,
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

  const handleCount = (counter) =>
    setCartData({ ...cartData, quantity: counter });

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
        <Info
          strMeal={strMeal}
          strMealThumb={strMealThumb}
          strCategory={strCategory}
          strArea={strArea}
          tags={tags}
        />
        {stock === 0 && <h2>Out of stock</h2>}
        {stock > 0 && (
          <Checkout
            handleAddToCart={handleAddToCart}
            handleCount={handleCount}
            stock={stock}
            price={price}
            handleBuyNow={handleBuyNow}
          />
        )}
      </div>

      <Recipe
        instructions={instructions}
        ingredients={ingredients}
        measures={measures}
      />
    </div>
  );
};
