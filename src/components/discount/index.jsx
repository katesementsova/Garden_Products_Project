import React from "react";
import styles from "./index.module.css";
import DiscountImg from "../../assets/images/discount_img.svg";
import UIForm from "../../@UI/forms/UIForm";
import { useSendDiscountMutation } from "../../api/productApi";

export default function Discount() {
  const [sendDiscount] = useSendDiscountMutation();

  return (
    <div className={styles.discount_container}>
      <h1 className={styles.discount_title}>5% off on the first order</h1>
      <div className={styles.discount_form}>
        <img className={styles.discount_image} src={DiscountImg} />

        <UIForm sendDiscount={sendDiscount} />
      </div>
    </div>
  );
}
