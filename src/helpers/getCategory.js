import { API_URLS, randomNumber } from "utilities";

async function getCategory(category, size = 8) {
  const response = await fetch(API_URLS.filterByCategory(category));
  const data = await response.json();
  const { meals } = data;

  if (!meals) {
    throw new Error("No data");
  }

  const modifiedMeals = meals.map((meal) => {
    // generate random price
    const price = randomNumber(5, 15, true);
    // generate random stock
    const stock = randomNumber(0, 10, true);
    const modMeal = { ...meal, price, stock };
    return modMeal;
  });
  const partition = modifiedMeals.slice(0, size);

  return partition;
}

export default getCategory;
