import desserts from "./desserts.json";

const { meals } = desserts;

const getDataByThumb = (strMealThumb) =>
  meals.filter(
    (meal) =>
      meal.strMealThumb === strMealThumb ||
      meal.strMealThumb.includes(strMealThumb)
  );

export default getDataByThumb;
