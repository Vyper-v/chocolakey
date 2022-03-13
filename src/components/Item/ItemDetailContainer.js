import React, { useEffect, useState } from "react";
import getDataByID from "helpers/getDataByID";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = ({ id }) => {
  const [price, setPrice] = useState(0);
  const [itemProps, setItemProps] = useState(null);

  useEffect(() => {
    getDataByID(id).then((mealsID) => {
      setPrice(Math.floor(Math.random() * 40));
      setItemProps({ ...mealsID, price });
    });
  }, [price, id]);
  return <ItemDetail {...itemProps} />;
};
