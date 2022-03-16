import { useEffect, useState } from "react";
import getMealByID from "helpers/getMealByID";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [itemProps, setItemProps] = useState({});

  useEffect(() => {
    setLoading(true);
    getMealByID(id)
      .then((data) => {
        const price = Math.floor(Math.random() * 40);
        setItemProps({ ...data, price });
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return !loading ? <ItemDetail {...itemProps} /> : <div>Loading...</div>;
};
