import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItemDetails } from "🔥base/helpers/getItemDetails";
import db from "🔥base/db";
import { ItemContext } from "context/ItemContext";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemPreviewProps] = useContext(ItemContext);

  const [loading, setLoading] = useState(true);
  const [itemDetailProps, setItemDetailProps] = useState({});

  useEffect(() => {
    setLoading(true);
    getItemDetails(db, id)
      .then((itemDetails) => {
        setItemDetailProps({ idMeal: id, ...itemPreviewProps, ...itemDetails });
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, itemPreviewProps]);

  useEffect(() => {
    console.log(itemDetailProps);
  }, [itemDetailProps]);

  return !loading ? <ItemDetail {...itemDetailProps} /> : <div>Loading...</div>;
};
