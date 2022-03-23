import API_URLS from "utilities/API_URLS";

const getMealByID = async (idMeal) => {
  const response = await fetch(API_URLS.mealDetails(idMeal));
  const data = await response.json();
  const meals = data.meals[0];
  const {
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
  } = meals;

  // parse instructions
  const strInstructionsArray = strInstructions
    .split(/\n/) // Split the string by new line
    .map((step) => step.replace(/\d\./, "")) // remove numbers from steps
    .filter((step) => step.trim() !== ""); // remove empty steps

  // parse ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const strIngredient = meals[`strIngredient${i}`];
    const strMeasure = meals[`strMeasure${i}`];
    if (isNaN(strIngredient)) {
      // "" and null is parsed to a number
      ingredients.push({
        ingredient: strIngredient,
        measure: strMeasure,
      });
    }
  }
  // parse tags
  const strTagsArray =  strTags?.split(",");
  // generate random price
  const price = Math.floor(Math.random() * 90 + 10);

  return {
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strInstructionsArray,
    strTagsArray,
    strMealThumb,
    ingredients,
    price,
  };
};

export default getMealByID;
