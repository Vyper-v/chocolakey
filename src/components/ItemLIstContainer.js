import React, { useEffect, useState } from "react";
import getData from "../helpers/getData";

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
      {data.map(({ strMeal, strMealThumb, idMeal }) => (
        <li
          key={idMeal}
          className="[ flex flex-col gap-size-0 justify-center items-center ] [ p-size-0 rounded shadow ] [ bg-gray-200 ]"
        >
          <img
            src={strMealThumb}
            alt={strMeal}
            className={"[ rounded w-full md:w-96 ]"}
          />
          <div className="[ flex justify-between ] [ self-start w-full ] [ text-size-1 ]">
            <span className="[ rounded-full px-3 py-1 ] [ capitalize text-size-0 bg-zinc-300 ]">
              {strMeal}
            </span>
            <span className="[ rounded-full px-3 py-1 ] [ capitalize text-size-0 bg-green-300 ]">
              $ {Math.floor(Math.random() * 10)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
