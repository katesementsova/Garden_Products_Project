import "./navbar.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "../pages/homepage/index";
import Categories from "../pages/categories/index";
import AllProducts from "../pages/allProducts/index";
import DiscountedItems from "../pages/discountedItems/index";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/src/pages/homepage/index.jsx")}>
        <img src="src/assets/images/logo.svg"></img>
      </button>
      <section className="navButtons">
        <button onClick={() => navigate("/src/pages/homepage/index.jsx")}>
          Main Page
        </button>
        <button onClick={() => navigate("/src/pages/categories/index.jsx")}>
          Categories
        </button>
        <button onClick={() => navigate("/src/pages/allProducts/index.jsx")}>
          All products
        </button>
        <button
          onClick={() => navigate("/src/pages/discountedItems/index.jsx")}
        >
          All sales
        </button>

        <Routes>
          <Route path="/src/pages/homepage/index.jsx" element={<Homepage />} />
          <Route
            path="/src/pages/categories/index.jsx"
            element={<Categories />}
          />
          <Route
            path="/src/pages/allProducts/index.jsx"
            element={<AllProducts />}
          />
          <Route
            path="/src/pages/discountedItems/index.jsx"
            element={<DiscountedItems />}
          />
        </Routes>
      </section>
      <button onClick={() => navigate("src/pages/cart/index.jsx")}>
        <img src="src/assets/images/basket_empty.svg"></img>
      </button>
    </nav>
  );
}

export default Navbar;
