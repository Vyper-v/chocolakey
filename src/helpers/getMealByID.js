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
   } = meals;

  return {
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
  };
};

export default getMealByID;
