import React, { useState } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector } from "../../store/slices/cartSlice";
import ModalWindow from "../../components/modalWindow/index";
import SectionHead from "../../components/sectionHead";
import UIForm from "../../@UI/forms/UIForm";
import CartCard from "../../@UI/productsCard/cartCard/CartCard";

function Cart() {
  const [modalActive, setModalActive] = useState(false);

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
    <section
      className={
        modalActive ? `${styles.cart} + ${styles.cart_active}` : styles.cart
      }
    >
      {modalActive ? <ModalWindow active={modalActive} /> : ""}

      <SectionHead title="Shopping cart" button="Back to the store" />
      <div className={styles.cart_forms}>
        <CartCard array={basketProducts} />

        <div className={styles.cart_container}>
          <div className={styles.form_container}>
            <h2 className={styles.form_title}>Order detalis</h2>
            <div className={styles.order_counter}>
              <p
                className={styles.form_items}
              >{`${basketProducts.length} items`}</p>
              <div className={styles.total_string}>
                <p className={styles.form_total}>Total</p>
                <p className={styles.total_price}>{`$${totalAmount}`}</p>
              </div>
            </div>
            <UIForm setModalActive={setModalActive} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
