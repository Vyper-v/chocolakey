const API_URLS = {
  categoryNames: "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
  allMealCategories: "https://www.themealdb.com/api/json/v1/1/categories.php",
  areaNames: "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
  ingredientNames: "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
  searchMeal: (s) =>
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`,
  mealDetails: (id) =>
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  filterByCategory: (category) =>
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  filterByArea: (area) =>
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
  filterByIngredient: (ingredient) =>
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
};
export default API_URLS;
