import React from "react";
import styles from "./index.module.css";
import DiscountImg from "../../assets/images/discount_img.svg";

export default function Discount() {
  return (
    <section className={styles.discount_container}>
      <h1 className={styles.discount_title}>5% off on the first order</h1>
      <div className={styles.discount_form}>
        <img className={styles.discount_image} src={DiscountImg}></img>
        <div className={styles.discount_list}>
          <input className={styles.discount_input} placeholder="Name"></input>
          <input
            className={styles.discount_input}
            placeholder="Phone number"
          ></input>
          <input className={styles.discount_input} placeholder="Email"></input>
          <button className={styles.discount_btn}>Get a discount</button>
        </div>
      </div>
    </section>
  );
}
