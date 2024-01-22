import "./App.css";
import Header from "./components/header/index";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainPage/index";
import CategoriesPage from "./pages/categoriesPage/index";
import Categories from "./components/categories/index";
import Allproducts from "./pages/allProducts/index";
import AllSales from "./pages/allSales/index";
import Tools from "./pages/tools/index";
import Item from "./pages/item/index";
// import Layouts from "./pages/Layouts/Layouts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategory } from "./store/slices/categorySlice";
import Cart from "./pages/cart/index";
import NotFound from "./pages/notFound/index";
import Footer from "./components/footer";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCategory());
  // }, [dispatch]);
  // const { CategoriesPage } = useSelector(
  //   ({ CategoriesPage }) => CategoriesPage
  // );
  // console.log(CategoriesPage);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
