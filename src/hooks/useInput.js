import { useState } from "react";

export const useInput = () => {
  const [item, setItem] = useState({});

  const getInputValue = (e) => {
    if (e.target.type === "number") {
      setItem({ ...item, [e.target.name]: parseInt(e.target.value) });
    } else {
      setItem({ ...item, [e.target.name]: e.target.value });
    }
  };

  return [item, getInputValue];
};
