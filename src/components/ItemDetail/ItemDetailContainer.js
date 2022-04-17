import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getItemDetails } from "🔥base/helpers/getItemDetails";
import db from "🔥base/db";

import { ItemContext } from "context/ItemContext";
import { Loading } from "components/Loading";
import { ItemDetail } from "./ItemDetail";

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

  return !loading ? <ItemDetail {...itemDetailProps} /> : <Loading />;
};
