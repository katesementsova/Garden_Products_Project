import React from "react";
import styles from "./index.module.css";
import SaleImage from "../../assets/images/sale_image.svg";
import Line from "../../assets/images/line.svg";

export default function Sale() {
  return (
    <section className={styles.sale_container}>
      <div className={styles.sale_head}>
        <h1 className={styles.sale_title}>Sale</h1>
        <div className={styles.line_btn}>
          <img className={styles.line} src={Line}></img>
          <button className={styles.sale_link}>All sales</button>
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
    </section>
  );
}
