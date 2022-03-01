import React, { useEffect, useState } from "react";
import getData from "../helpers/getData";
import { Item } from "./Item";

const res = getData(9);

export const ItemLIstContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    res.then((x) => {
      setData(x);
    });
  }, [data]);

  return (
    <ul className="[ cluster justify-center ] [ mx-auto ]">
      {data.map((props,i) => (
        <Item key={i} {...props} />
      ))}
    </ul>
  );
};
