import getCategories from "helpers/getCategories";
import React, { useEffect, useState } from "react";
import { SideBar } from "./SideBar";

export const SideBarContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return <SideBar categories={categories} />;
};
