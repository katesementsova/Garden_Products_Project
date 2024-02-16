import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import Logo from "../../assets/images/logo.svg";
import CartImg from "../../assets/images/basket_empty.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { basketSelector } from "../../store/slices/cartSlice";
import NavBar from "../../@UI/reused/navbar";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Header({ open, navClassName }) {
  const nav = [
    { name: "Main Page", path: "/" },
    { name: "Categories", path: "CategoriesPage" },
    { name: "All products", path: "AllProducts" },
    { name: "All sales", path: "AllSales" },
  ];

  const [isOpen, setOpen] = useState();
  const { basket: basketProducts } = useSelector(basketSelector);
  const { width } = useWindowSize();

  return (
    <header className={styles.header_container}>
      <NavLink to="/">
        <img className={styles.nav_logo} src={Logo} />
      </NavLink>
      <div className={styles.header_nav}>
        <ul className={open ? `${navClassName}` : `${styles.nav_list}`}>
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
        <button
          className={styles.nav_menu_btn}
          onClick={() => setOpen(!isOpen)}
        ></button>
      </div>
      <div className={styles.cart_icon}>
        <NavLink to={"Cart"}>
          <img className={styles.cart} src={CartImg} />
        </NavLink>
        <div className={styles.cart_count}>{basketProducts.length}</div>
        {/* {width < 768 && <NavBar />} */}
      </div>
    </header>
  );
}
