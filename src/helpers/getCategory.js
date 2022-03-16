import shuffle from "utilities/shuffle";
import API_URLS from "utilities/API_URLS";

async function getCategory(category, size = 8) {
  const response = await fetch(API_URLS.filterByCategory(category));
  const data = await response.json();
  const { meals } = data;

  if (!meals) {
    throw new Error("No data");
  }
  const partition = shuffle(meals).slice(0, size);
  return partition;
}

export default getCategory;
