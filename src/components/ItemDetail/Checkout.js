import { ItemCount } from "components/ItemCount";

export function Checkout({
  handleAddToCart,
  handleCount,
  stock,
  price,
  handleBuyNow,
}) {
  return (
    <form className="buy-item" onSubmit={handleAddToCart}>
      <h2>Are you lazy to cook?</h2>
      <ItemCount
        onDecrement={handleCount}
        onIncrement={handleCount}
        condition={stock !== 0}
        stock={stock}
      />

      <div className="flex flex-wrap gap-size-0">
        <h3 className="item-price px-3 py-1 rounded text-gray-200 text-center">
          $ {price}
        </h3>
        <button
          type="submit"
          className="bg-secondary text-light border-none active:bg-black"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        <button
          className="bg-primary text-light border-none active:bg-black"
          onClick={handleBuyNow}
        >
          Buy now
        </button>
      </div>
    </form>
  );
}
