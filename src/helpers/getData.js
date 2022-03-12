import desserts from "./desserts.json"; // temporal data
import shuffle from "./shuffle";
const { meals } = desserts;

function asyncTimeOut(fn, time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      fn(res, rej);
    }, time);
  });
}

async function getData(size = 3) {
  // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`;
  // const response = await fetch(url);
  // const data = await response.json();
  if (!meals) {
    throw new Error("No data");
  }
  // solo para el desafio ***
  return asyncTimeOut((res) => {
    const partition = shuffle(meals).slice(0, size);
    res(partition.map((n) => n.idMeal));
  }, 2000);
  // ***
  // return partition;
}

export default getData;
