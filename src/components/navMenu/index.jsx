import React from "react";
import styles from "./index.module.css";
import Line from "../../assets/images/line.svg";
import { Link } from "react-router-dom";

export default function NavMenu({ current, categoryName }) {
  return (
    <div className={styles.navMenu_container}>
      <Link className={styles.navMenu_link} to={"/"}>
        <p>Main page</p>
      </Link>
      <img className={styles.line} src={Line} />
      <Link className={styles.navMenu_link} to={"/CategoriesPage"}>
        <p>{current}</p>
      </Link>

      {categoryName && (
        <>
          <img className={styles.line} src={Line} />
          <Link className={styles.navMenu_link} to={"/CategoriesPage"}>
            <p className={styles.previous}>{categoryName}</p>
          </Link>
        </>
      )}
    </div>
  );
}
