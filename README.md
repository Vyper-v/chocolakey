# useSpices( 🍲 ) | Ecommerce Store

> This project is only a prototype for studying ReactJS in [Coderhouse](https://coderhouse.com)<br>
> If you liked the idea, contact me to <davidgomez2924@gmail.com><br>

## Documentation

### `<CartContext/>`

Provides the cart state and actions to its children. And also saves the cart in localStorage when this is changed.

#### Usage

```js
<CartContext>
  <ConsumerComponent />
  ...
</CartContext>
```

### `<ItemContext/>`

Provides props of the `ItemPreview` component to its children. Used to pass props to the `ItemDetail` component.

#### Usage

```js
<ItemContext>
  <ConsumerComponent />
  ...
</ItemContext>
```

### `useCart`

Receive an optional `Array` as parameter. If it is passed, it will be used as the cart state, otherwise it will use an empty array.

#### Return value

- `cart`: The cart state
- `addToCart`: A function to add an item to the cart
- `removeFromCart`: A function to remove an item from the cart
- `updateItem`: A function to update an item in the cart
  - `idMeal`: The id of the meal
  - `callback`: A function to update the item in the cart
- `clear`: A function to clear the cart
- `getTotalPrice`: A function to get the total price of the cart
- `isInCart`: A function to check if an item is in the cart

#### Usage

```js
const cartJSON = localStorage.getItem("cart"); // optional
const cartStorage = JSON.parse(cartJSON); // optional
const {
  cart,
  isInCart,
  addToCart,
  removeFromCart,
  updateItem,
  clear,
  getTotalPrice,
} = useCart(cartStorage);
```

### `useCounter`

Return a count number, and functions to increment, decrement and reset the count.

#### Parameters

- `initial`: The initial count number.
- `leftLimit`: Optional. The minimum value of the count number.
- `rightLimit`: Optional. The maximum value of the count number.
- `condition`: Extra condition to check if the count number can be incremented or decremented.

#### Return value

- `counter`: The count number
- `increment`: Function to increment the count. Can be passed an increment factor and a callback function to be executed when the count is incremented.
- `decrement`: Function to decrement the count. Can be passed an decrement factor and a callback function to be executed when the count is decremented.
- `reset`: Function to reset the count

#### Example

```js
export const PairCounter = () => {
  const { counter, increment, decrement, reset } = useCounter({
    initial: 2,
    leftLimit: -3,
    rightLimit: 11,
    condition: counter % 2 === 0,
  });

  const customIncrement = () => {
    increment((counterIncremented) => {
      console.log(`Incremented: ${counterIncremented}`);
    }, 2);
  };

  const customDecrement = () => {
    decrement((counterDecremented) => {
      console.log(`Decremented: ${counterDecremented}`);
    }, 2);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={customIncrement}>Increment</button>
      <button onClick={customDecrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```
