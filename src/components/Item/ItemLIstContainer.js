import React, { useEffect, useState } from "react";
import getData from "helpers/getData";
import { ItemList } from "./ItemList";

const isEmpty = (array) => array.length === 0;
// const res = getData(8);

export const ItemLIstContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // res
    getData(8)
      .then((meals) => {
        setData(meals);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return !isEmpty(data) ? <ItemList data={data} /> : <div>Loading...</div>;
};
