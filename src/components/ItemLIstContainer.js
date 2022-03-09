import React, { useEffect, useState } from "react";
import getData from "../helpers/getData";
import { ItemList } from "./ItemList";

const res = getData(9);

export const ItemLIstContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    res.then((x) => {
      setData(x);
    });
  }, [data]);

  return <ItemList data={data} />;
};
