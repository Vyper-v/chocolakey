import { ItemDetailContainer } from "components/Item/ItemDetailContainer";
import { ItemLIstContainer } from "components/Item/ItemLIstContainer";
import { Navbar } from "components/NavBar";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <header className="wrapper">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<ItemLIstContainer />} />
        <Route path="/category/:id" element={<ItemLIstContainer />} />
        <Route path="/products" element={<ItemLIstContainer />} />
        <Route
          path="/item/:id"
          element={
            <div className="flex justify-center p-size-3">
              <ItemDetailContainer />
            </div>
          }
        />
      </Routes>
    </>
  );
};
