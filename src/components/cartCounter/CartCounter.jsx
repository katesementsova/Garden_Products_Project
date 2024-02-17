import React, { useContext } from "react";
import styles from "./CartCounter.module.css";
import UIForm from "../../@UI/forms/UIForm";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector, clearCart } from "../../store/slices/cartSlice";
import { useSendProductMutation } from "../../api/productApi";
import { ModalState } from "../../pages/cart/index";

export default function CartCounter() {
  const dispatch = useDispatch();
  const emptyCart = () => dispatch(clearCart());

  const { setIsModal } = useContext(ModalState);

  const [sendProduct] = useSendProductMutation();
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
      <UIForm
        emptyCart={emptyCart}
        sendProduct={sendProduct}
        setIsModal={setIsModal}
        basketProducts={basketProducts}
      />
    </div>
  );
}
