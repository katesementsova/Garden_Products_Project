import React from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import Line from "../../assets/images/line.svg";
import FilterByPrice from "../../components/filterByPrice";
import FilterByDiscount from "../../components/filterByDiscount";
import Sorting from "../../components/sorting";
import SaleImage from "../../assets/images/sale_image.svg";

export default function Tools() {
  return (
    <section className={styles.tools}>
      <div className={styles.navigate_menu}>
        <NavLink className={styles.navigate_link} to={"/"}>
          <button className={styles.previous_section}>Main page</button>
        </NavLink>
        <img className={styles.navigate_line} src={Line} />
        <NavLink className={styles.navigate_link} to={"Categories"}>
          <button className={styles.previous_section}>Categories</button>
        </NavLink>
        <img className={styles.navigate_line} src={Line} />
        <NavLink className={styles.navigate_link} to={"Tools"}>
          <button className={styles.current_section}>
            Tools and equipment
          </button>
        </NavLink>
      </div>
      <h1 className={styles.tools_title}>Tools and equipments</h1>
      <div className={styles.tools_sorting_container}>
        <FilterByPrice />
        <FilterByDiscount />
        <Sorting />
      </div>
      <div className={styles.products_of_category}>
        <div className={styles.sale_intems}>
          <div className={styles.sale_intem}>
            <img className={styles.sale_image} src={SaleImage}></img>
            <span className={styles.sale_discount}>-50%</span>
            <p className={styles.sale_description}>Decorative forged bridge</p>
            <div className={styles.sale_price}>
              <span className={styles.sale_newPrice}>$500</span>
              <span className={styles.sale_oldPrice}>$1000</span>
            </div>
          </div>
          <div className={styles.sale_intem}>
            <img className={styles.sale_image} src={SaleImage}></img>
            <span className={styles.sale_discount}>-50%</span>
            <p className={styles.sale_description}>Decorative forged bridge</p>
            <div className={styles.sale_price}>
              <span className={styles.sale_newPrice}>$500</span>
              <span className={styles.sale_oldPrice}>$1000</span>
            </div>
          </div>
          <div className={styles.sale_intem}>
            <img className={styles.sale_image} src={SaleImage}></img>
            <span className={styles.sale_discount}>-50%</span>
            <p className={styles.sale_description}>Decorative forged bridge</p>
            <div className={styles.sale_price}>
              <span className={styles.sale_newPrice}>$500</span>
              <span className={styles.sale_oldPrice}>$1000</span>
            </div>
          </div>
          <div className={styles.sale_intem}>
            <img className={styles.sale_image} src={SaleImage}></img>
            <span className={styles.sale_discount}>-50%</span>
            <p className={styles.sale_description}>Decorative forged bridge</p>
            <div className={styles.sale_price}>
              <span className={styles.sale_newPrice}>$500</span>
              <span className={styles.sale_oldPrice}>$1000</span>
            </div>
          </div>
        </div>
        <div className={styles.sale_intems}>
          <div className={styles.sale_intem}>
            <img className={styles.sale_image} src={SaleImage}></img>
            <span className={styles.sale_discount}>-50%</span>
            <p className={styles.sale_description}>Decorative forged bridge</p>
            <div className={styles.sale_price}>
              <span className={styles.sale_newPrice}>$500</span>
              <span className={styles.sale_oldPrice}>$1000</span>
            </div>
          </div>
          <div className={styles.sale_intem}>
            <img className={styles.sale_image} src={SaleImage}></img>
            <span className={styles.sale_discount}>-50%</span>
            <p className={styles.sale_description}>Decorative forged bridge</p>
            <div className={styles.sale_price}>
              <span className={styles.sale_newPrice}>$500</span>
              <span className={styles.sale_oldPrice}>$1000</span>
            </div>
          </div>
          <div className={styles.sale_intem}>
            <img className={styles.sale_image} src={SaleImage}></img>
            <span className={styles.sale_discount}>-50%</span>
            <p className={styles.sale_description}>Decorative forged bridge</p>
            <div className={styles.sale_price}>
              <span className={styles.sale_newPrice}>$500</span>
              <span className={styles.sale_oldPrice}>$1000</span>
            </div>
          </div>
          <div className={styles.sale_intem}>
            <img className={styles.sale_image} src={SaleImage}></img>
            <span className={styles.sale_discount}>-50%</span>
            <p className={styles.sale_description}>Decorative forged bridge</p>
            <div className={styles.sale_price}>
              <span className={styles.sale_newPrice}>$500</span>
              <span className={styles.sale_oldPrice}>$1000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
