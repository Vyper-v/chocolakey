import desserts from "./desserts.json";
const { meals } = desserts;

const getDataByID = async (idMeal) =>
  meals.find((meal) => meal.idMeal === idMeal);

export default getDataByID;
