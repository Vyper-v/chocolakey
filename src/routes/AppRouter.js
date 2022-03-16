import { ItemDetailContainer } from "components/Item/ItemDetailContainer";
import { ItemLIstContainer } from "components/Item/ItemLIstContainer";
import { Navbar } from "components/NavBar";
import { SideBarContainer } from "components/SideBarContainer";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <div className="flow">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="sidebar">
              <SideBarContainer />
              <ItemLIstContainer />
            </div>
          }
        >
          <Route path="category/:id" element={<ItemLIstContainer />} />
        </Route>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
};
