export function Info({ strMeal, strMealThumb, strCategory, strArea, tags }) {
  return (
    <div className="meal-info">
      <h1>{strMeal}</h1>
      <div>
        <img src={strMealThumb} alt={strMeal} loading="lazy" />
        <h3 className="info__name">Category</h3>
        <span>{strCategory}</span>
        <h3 className="info__name">Area</h3>
        <span>{strArea}</span>
        {tags && <h3 className="info__name">Tags</h3>}
        {tags &&
          tags.map((tag) => (
            <span key={tag} className="block">
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
}
