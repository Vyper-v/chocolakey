import { ShoppingBagIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
export const CartWidget = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/cart");
  };
  return (
    <button
      onClick={handleNavigate}
      type="button"
      data-type="icon"
      className="carticon"
    >
      <ShoppingBagIcon />
      <span className="count">{0}</span>
    </button>
  );
};
