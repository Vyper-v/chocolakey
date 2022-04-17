export function Recipe({ instructions, measures, ingredients }) {
  return (
    <div className="item-recipe">
      <div className="instructions">
        <h2>Cook it yourself</h2>
        <ol className="list-decimal list-inside flow">
          {instructions.map((p) => (
            <li key={crypto.randomUUID()}>{p}</li>
          ))}
        </ol>
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <div className="cluster">
          {ingredients.map((ingredient, i) => (
            <div key={crypto.randomUUID()}>
              <p className="rounded-full px-3 py-1 capitalize font-semibold bg-gray-300 ">
                {ingredient}:{" "}
                <span className="font-normal">{measures.at(i)}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
