import PropTypes from "prop-types";

import desserts from "./desserts.json"; // temporal data
import shuffle from "./shuffle";
const { meals } = desserts;
const getData = async (size = 3) => {
  // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`;
  // const response = await fetch(url);
  // const data = await response.json();
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(shuffle(meals).slice(0, size));
    }, 2000);
  });
};

getData.propTypes = {
  size: PropTypes.number,
};

getData.defaultProps = {
  size: 3,
};

export default getData;
