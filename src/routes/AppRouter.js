import { SectionContainer } from "components/SectionContainer";
import { ItemDetailContainer } from "components/Item/ItemDetailContainer";
import { ItemLIstContainer } from "components/Item/ItemLIstContainer";
import { Navbar } from "components/NavBar";
import { Route, Routes } from "react-router-dom";
import { ProductsScreen } from "./ProductsScreen";
import { Cart } from "components/Cart/Cart";
import { CartProvider } from "context/CartContext";
import { ItemProvider } from "context/ItemContext";

export const AppRouter = () => {
  return (
    <CartProvider>
      <ItemProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsScreen />}>
            <Route path="category/:id" element={<ItemLIstContainer />} />
          </Route>
          <Route path="/section/:section" element={<SectionContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ItemProvider>
    </CartProvider>
  );
};
