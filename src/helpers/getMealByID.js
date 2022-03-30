import { API_URLS, randomNumber } from "utilities";

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
  const strTagsArray = strTags?.split(",");
  // generate random price
  const price = randomNumber(5, 15);
  // generate random stock
  const stock = randomNumber(0, 10);

  return {
    idMeal,
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strInstructionsArray,
    strTagsArray,
    strMealThumb,
    ingredients,
    price,
    stock,
  };
};

export default getMealByID;
