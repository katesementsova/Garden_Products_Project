import React from "react";
import styles from "./index.module.css";
import Line from "../../assets/images/line.svg";
import { NavLink } from "react-router-dom";

export default function NavMenu({ previous, current }) {
  return (
    <div className={styles.navMenu_container}>
      <NavLink className={styles.navMenu_link} to={"/"}>
        <button className={styles.previous}>{previous}</button>
      </NavLink>
      <img className={styles.line} src={Line} />
      <NavLink className={styles.navMenu_link} to={"/CategoriesPage"}>
        <button className={styles.current}>{current}</button>
      </NavLink>
    </div>
  );
}
