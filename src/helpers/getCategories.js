import API_URLS from "utilities/API_URLS";

export default async function getCategories() {
  const res = await fetch(API_URLS.categoryNames);
  const data = await res.json();
  if (!data) throw new Error("No data");

  const { meals } = data;
  const categoryNames = meals.map(({ strCategory }) => strCategory);

  return categoryNames;
}
