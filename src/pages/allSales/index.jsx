import React from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import Line from "../../assets/images/line.svg";
import FilterByPrice from "../../components/filterByPrice";
import Sorting from "../../components/sorting";
import SaleImage from "../../assets/images/sale_image.svg";

export default function AllSales() {
  return (
    <section className={styles.allSales}>
      <div className={styles.navigate_menu}>
        <NavLink className={styles.navigate_link} to={"/"}>
          <button className={styles.previous_section}>Main page</button>
        </NavLink>
        <img className={styles.navigate_line} src={Line} />
        <NavLink className={styles.navigate_link} to={"AllSales"}>
          <button className={styles.current_section}>All sales</button>
        </NavLink>
      </div>
      <h1 className={styles.allSales_title}>All sales</h1>
      <div className={styles.allSales_sorting_container}>
        <FilterByPrice />
        <Sorting />
      </div>
      <div className={styles.allSales_items}>
        <div className={styles.allSales_item}>
          <img className={styles.allSales_image} src={SaleImage}></img>
          <span className={styles.allSales_discount}>-50%</span>
          <p className={styles.allSales_description}>
            Decorative forged bridge
          </p>
          <div className={styles.allSales_price}>
            <span className={styles.allSales_newPrice}>$500</span>
            <span className={styles.allSales_oldPrice}>$1000</span>
          </div>
        </div>
        <div className={styles.allSales_item}>
          <img className={styles.allSales_image} src={SaleImage}></img>
          <span className={styles.allSales_discount}>-50%</span>
          <p className={styles.allSales_description}>
            Decorative forged bridge
          </p>
          <div className={styles.allSales_price}>
            <span className={styles.allSales_newPrice}>$500</span>
            <span className={styles.allSales_oldPrice}>$1000</span>
          </div>
        </div>
        <div className={styles.allSales_item}>
          <img className={styles.allSales_image} src={SaleImage}></img>
          <span className={styles.allSales_discount}>-50%</span>
          <p className={styles.allSales_description}>
            Decorative forged bridge
          </p>
          <div className={styles.allSales_price}>
            <span className={styles.allSales_newPrice}>$500</span>
            <span className={styles.allSales_oldPrice}>$1000</span>
          </div>
        </div>
        <div className={styles.allSales_item}>
          <img className={styles.allSales_image} src={SaleImage}></img>
          <span className={styles.allSales_discount}>-50%</span>
          <p className={styles.allSales_description}>
            Decorative forged bridge
          </p>
          <div className={styles.allSales_price}>
            <span className={styles.allSales_newPrice}>$500</span>
            <span className={styles.allSales_oldPrice}>$1000</span>
          </div>
        </div>
      </div>
    </section>
  );
}
