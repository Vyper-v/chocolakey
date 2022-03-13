import React, { useEffect, useState } from "react";
import getDataByID from "helpers/getDataByID";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ({ idMeal = false }) => {
  const { id } = useParams();
  const [price, setPrice] = useState(0);
  const [itemProps, setItemProps] = useState(null);

  useEffect(() => {
    const contextID = idMeal === false ? id : idMeal;
    getDataByID(contextID).then((mealsID) => {
      setPrice(Math.floor(Math.random() * 40));
      setItemProps({ ...mealsID, price });
    });
  }, [price, id, idMeal]);
  return <ItemDetail {...itemProps} />;
};
