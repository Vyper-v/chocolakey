import React, { useEffect, useState } from "react";
import getData from "../helpers/getData";
import { ItemList } from "./ItemList";

const res = getData(9);
function isEmpty(array) {
  return array.length === 0;
}
export const ItemLIstContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    res
      .then((x) => {
        setData(x);
      })
      .catch((err) => {
        setData([]);
        throw err;
      });
  }, [data]);

  return !isEmpty(data) ? <ItemList data={data} /> : <div>Loading...</div>;
};
