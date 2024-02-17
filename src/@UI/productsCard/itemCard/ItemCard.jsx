import React, { useState } from "react";
import styles from "./ItemCard.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/slices/cartSlice";
import { API_URL } from "../../../api/apiUrl";
import Minus from "../../../assets/images/minus.svg";
import Plus from "../../../assets/images/plus.svg";

export default function ItemCard({ oneProduct }) {
  const dispatch = useDispatch();
  const addProductInBasket = (oneProduct) => {
    dispatch(addProduct(oneProduct));
  };

  const [count, setCount] = useState(1);

  return (
    <>
      <div className={styles.item_container}>
        <img
          className={styles.item_image}
          src={API_URL + oneProduct.image}
          alt="image"
        />
        <div className={styles.item_info}>
          <h2 className={styles.item_title}>{oneProduct.title}</h2>
          <div className={styles.price_info}>
            {oneProduct.discont_price ? (
              <div className={styles.item_price}>
                <p className={styles.price}>{oneProduct.discont_price + "$"}</p>

                <p className={styles.oldPrice}>{oneProduct.price + "$"}</p>
              </div>
            ) : (
              <p className={styles.price}>{oneProduct.price + "$"}</p>
            )}
            {oneProduct.discont_price ? (
              <p className={styles.discount}>
                {`- ${Math.ceil(
                  100 - oneProduct.discont_price / (oneProduct.price / 100)
                )} %`}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.count_form}>
            <div className={styles.item_counter}>
              <button
                className={styles.item_product_button}
                onClick={() => setCount(count - 1)}
              >
                <img className={styles.minus} src={Minus}></img>
              </button>
              <input
                onChange={(event) => setCount(event.target.value)}
                value={count}
                className={styles.count}
              ></input>
              <button
                className={styles.item_product_button}
                onClick={() => setCount(count + 1)}
              >
                <img className={styles.plus} src={Plus}></img>
              </button>
            </div>
            <button
              className={styles.add_btn}
              onClick={() => addProductInBasket(oneProduct)}
            >
              Add to cart
            </button>
          </div>
          <div className={styles.description_container}>
            <h3 className={styles.item_subtitle}>Description</h3>
            <p className={styles.description}>{oneProduct.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
