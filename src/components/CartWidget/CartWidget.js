import { ShoppingBagIcon } from '@heroicons/react/solid'
export const CartWidget = () => {
  return (
    <button type="button" data-type="icon" className="carticon">
      <ShoppingBagIcon/>
      <span className="count">{0}</span>
    </button>
  );
};
