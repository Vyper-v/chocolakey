import React, { useEffect, useState } from "react";
import getCategory from "helpers/getCategory";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemLIstContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getCategory(id || "Dessert")
      .then((meals) => {
        setData(meals);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return !loading ? <ItemList data={data} /> : <div>Loading...</div>;
};
