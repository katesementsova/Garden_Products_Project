import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import styles from "./index.module.css";
import Mainpage from "../../pages/mainPage/index";
import Categories from "../../pages/categories/index";
import AllProducts from "../../pages/allProducts";
import AllSales from "../../pages/allSales/index";
import Cart from "../../pages/cart/index";
import Logo from "../../assets/images/logo.svg";
import CartImg from "../../assets/images/basket_empty.svg";

export default function Navbar() {
  const nav = [
    { name: "Main Page", path: "Mainpage" },
    { name: "Categories", path: "Categories" },
    { name: "All products", path: "AllProducts" },
    { name: "All sales", path: "AllSales" },
  ];

  return (
    <header>
      <nav className={styles.nav_container}>
        <NavLink to={"/"}>
          <img className={styles.nav_logo} src={Logo} />
        </NavLink>
        <div>
          <ul className={styles.nav_list}>
            {nav.map((el) => (
              <NavLink
                className={styles.nav_link}
                key={el.name}
                to={`${el.path}`}
              >
                <li>{el.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <NavLink to={"/"}>
          <img className={styles.cart} src={CartImg} />
        </NavLink>
      </nav>
    </header>
  );
}