import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./index.module.css";
import Logo from "../../assets/images/logo.svg";
import CartImg from "../../assets/images/basket_empty.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { basketSelector } from "../../store/slices/cartSlice";
import NavBar from "../../@UI/reused/navbar";

export default function Header() {
  const nav = [
    { name: "Main Page", path: "/" },
    { name: "Categories", path: "CategoriesPage" },
    { name: "All products", path: "AllProducts" },
    { name: "All sales", path: "AllSales" },
  ];

  const [open, setOpen] = useState(false);
  const { basket: basketProducts } = useSelector(basketSelector);

  return (
    <header className={styles.header_container}>
      <Link to="/">
        <img className={styles.nav_logo} src={Logo} />
      </Link>
      <div
        className={!open ? `${styles.links_navbar}` : `${styles.header_nav}`}
      >
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
      <div className={styles.cart_icon}>
        <NavLink to={"Cart"}>
          <img className={styles.cart} src={CartImg} />
        </NavLink>
        <div className={styles.cart_count}>{basketProducts.length}</div>
        <NavBar open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}
