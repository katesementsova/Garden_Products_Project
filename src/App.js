import "./App.css";
import Header from "./components/header/index";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainPage/index";
import CategoriesPage from "./pages/categoriesPage/index";
import AllProducts from "./pages/allProducts/index";
import AllSales from "./pages/allSales/index";
import ProductsOfCategory from "./pages/productsOfCategory/index";
import Item from "./pages/item/index";
import { useState } from "react";
import Cart from "./pages/cart/index";
import NotFound from "./pages/notFound/index";
import Footer from "./components/footer";
import CartIsEmpty from "./pages/cartIsEmpty/index";
import { ModalState } from "./pages/cart/index";
import ModalWindow from "./components/modalWindow/index";

function App() {
  const [isModal, setIsModal] = useState(false);

  return (
    <ModalState.Provider value={{ isModal, setIsModal }}>
      <div>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="CategoriesPage" element={<CategoriesPage />} />
            <Route
              path="ProductsOfCategory/:id"
              element={<ProductsOfCategory />}
            />
            <Route path="AllProducts" element={<AllProducts />} />
            <Route path="AllSales" element={<AllSales />} />
            <Route path="AllProducts/Item/:id" element={<Item />} />
            <Route path="AllSales/Item/:id" element={<Item />} />
            <Route path="Item/:id" element={<Item />} />
            <Route path="ProductsOfCategory/:id/Item/:id" element={<Item />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="CartIsEmpty" element={<CartIsEmpty />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
      {isModal && <ModalWindow />}
    </ModalState.Provider>
  );
}

export default App;
