import React, { useEffect, useState } from "react";
import db from "🔥base/db";
import { getCategories } from "🔥base/helpers/getCategories";
import { SideBar } from "./SideBar";

export const SideBarContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const thisCategories = await getCategories(db);
      setCategories(thisCategories);
    })();
  }, []);
  return <SideBar categories={categories} />;
};
