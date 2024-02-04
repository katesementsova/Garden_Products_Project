import React from "react";
import styles from "./index.module.css";
import Line from "../../assets/images/line.svg";
import { Link } from "react-router-dom";

export default function NavMenu({ previous, current }) {
  return (
    <div className={styles.navMenu_container}>
      <Link className={styles.navMenu_link} to={"/"}>
        <p className={styles.previous}>{previous}</p>
      </Link>
      <img className={styles.line} src={Line} />
      <Link className={styles.navMenu_link} to={"/CategoriesPage"}>
        <p className={styles.previous}>{current}</p>
      </Link>
      {/* {categoryName && (
        <Link className={styles.navMenu_link} to={"/CategoriesPage"}>
          <p className={styles.previous}>{categoryName}</p>
        </Link>
      )} */}
    </div>
  );
}
