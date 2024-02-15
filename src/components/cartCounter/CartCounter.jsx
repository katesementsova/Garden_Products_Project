import React from "react";
import styles from "./CartCounter.module.css";
import UIForm from "../../@UI/forms/UIForm";
import { useSelector } from "react-redux";
import { basketSelector } from "../../store/slices/cartSlice";

export default function CartCounter() {
  const { basket: basketProducts } = useSelector(basketSelector);
  const allPrice = basketProducts.map((item) => {
    if (item.discount_total_price) {
      return item.discount_total_price;
    }
    return item.total_price;
  });

  let totalAmount = allPrice
    .reduce((total, value) => total + value, 0)
    .toFixed(2);
  console.log(totalAmount);

  return (
    <div className={styles.form_container}>
      <h2 className={styles.form_title}>Order detalis</h2>
      <div className={styles.order_counter}>
        <p className={styles.form_items}>{`${basketProducts.length} items`}</p>
        <div className={styles.total_string}>
          <p className={styles.form_total}>Total</p>
          <p className={styles.total_price}>{`$${totalAmount}`}</p>
        </div>
      </div>
      <UIForm />
    </div>
  );
}
