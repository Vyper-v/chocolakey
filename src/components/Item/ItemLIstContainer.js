import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { getCategory } from "🔥base/helpers/getCategory";
import db from "🔥base/db";

export const ItemLIstContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getCategory(db, id || "Dessert")
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
