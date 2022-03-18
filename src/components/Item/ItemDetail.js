import { ItemCount } from "./ItemCount";

export const ItemDetail = ({
  strMeal,
  strMealThumb,
  strCategory,
  strArea,
  strInstructions,
  price,
}) => {
  return (
    <div className="item-detail">
      <div className="space-y-2">
        <div className="info">
          <h2>{strMeal}</h2>
          <img src={strMealThumb} alt={strMeal} loading="lazy" />
          <h3 className="info__name">Category</h3>
          <span>{strCategory}</span>
          <h3 className="info__name">Area</h3>
          <span>{strArea}</span>
          <div className="clear-left space-y-4">
            <h3>Cook it yourself</h3>
            <ol className="list-decimal list-inside flow">
              {strInstructions
                .trim()
                .split(/\r\n/)
                .map((p) => (
                  <li>{p}</li>
                ))}
            </ol>
          </div>
        </div>
      </div>
      <form className="buy">
        <h2>Are you lazy to cook ?</h2>
        <h3 className="text-emerald-300">$ {price}</h3>
        <ItemCount />
        <button type="submit" className="px-3 py-1 hover:border-dotted">
          Add to cart
        </button>
      </form>
    </div>
  );
};
