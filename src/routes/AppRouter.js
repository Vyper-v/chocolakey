import { InProduction } from "./../components/InProduction";
import { ItemDetailContainer } from "components/ItemDetail/ItemDetailContainer";
import { NavBar } from "components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { ProductsScreen } from "../components/ProductsScreen";
import { Cart } from "components/Cart/Cart";
import { CartProvider } from "context/CartContext";
import { ItemProvider } from "context/ItemContext";

export const AppRouter = () => {
  return (
    <CartProvider>
      <ItemProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductsScreen />} />
          <Route path="/category/:id" element={<ProductsScreen />} />
          <Route path="/section">
            <Route path="products" element={<ProductsScreen />} />
            <Route path=":section" element={<InProduction />} />
          </Route>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ItemProvider>
    </CartProvider>
  );
};
