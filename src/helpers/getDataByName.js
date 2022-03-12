import desserts from "./desserts.json";

const { meals } = desserts;

const getDataByName = (strMeal) =>
  meals.filter(
    (meal) => meal.strMeal === strMeal || meal.strMeal.includes(strMeal)
  );

export default getDataByName;
