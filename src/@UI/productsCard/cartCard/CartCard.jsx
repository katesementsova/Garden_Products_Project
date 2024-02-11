import React from "react";
import styles from "./CartCard.module.css";
import Minus from "../../../assets/images/minus.svg";
import Plus from "../../../assets/images/plus.svg";
import CloseImage from "../../../assets/images/ic-x.svg";
import { API_URL } from "../../../api/apiUrl";
import {
  decrementProduct,
  incrementProduct,
  removeProduct,
} from "../../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function CartCard({ array }) {
  const dispatch = useDispatch();
  const decrement = (item) => dispatch(decrementProduct(item));
  const increment = (item) => dispatch(incrementProduct(item));
  const removeItem = (item) => dispatch(removeProduct(item));

  return (
    <div className={styles.cart_products}>
      {array.map((product) => (
        <div key={product.id} className={styles.cart_product}>
          <img className={styles.cart_image} src={API_URL + product.image} />

          <div className={styles.product_info}>
            <div className={styles.product_item}>
              <h2 className={styles.cart_product_description}>
                {product.title}
              </h2>
              <button
                onClick={() => removeItem(product)}
                className={styles.close}
              >
                <img className={styles.closeImage} src={CloseImage} />
              </button>
            </div>
            <div className={styles.counter_form}>
              <div className={styles.counter}>
                <button
                  onClick={() => decrement(product)}
                  className={styles.cart_product_button}
                >
                  <img className={styles.minus} src={Minus}></img>
                </button>
                <div className={styles.count1}>{product.count}</div>
                <button
                  onClick={() => increment(product)}
                  className={styles.cart_product_button}
                >
                  <img className={styles.plus} src={Plus}></img>
                </button>
              </div>
              {product.discont_price ? (
                <>
                  <p className={styles.price}>{product.discont_price + "$"}</p>
                  <p className={styles.oldPrice}>{product.price + "$"}</p>
                </>
              ) : (
                <p className={styles.price}>{product.price + "$"}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
