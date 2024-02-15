import React from "react";
import styles from "./ProductCard.module.css";
import { API_URL } from "../../../api/apiUrl";
import { addProduct } from "../../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductCard({ array }) {
  const dispatch = useDispatch();
  const addProductInBasket = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className={styles.allProducts_items}>
      {array
        ? array.map((product) => (
            <div className={styles.container}>
              <button
                className={styles.btnAdd}
                onClick={() => addProductInBasket(product)}
              >
                Add to cart
              </button>
              <Link
                className={styles.allProducts_item}
                to={`Item/${product.id}`}
              >
                <div className={styles.img_container}>
                  <img
                    className={styles.allProducts_image}
                    src={API_URL + product.image}
                    alt="image"
                  />

                  {product.discont_price ? (
                    <p className={styles.allProducts_discount}>
                      {`- ${Math.ceil(
                        100 - product.discont_price / (product.price / 100)
                      )} %`}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className={styles.allProducts_info}>
                  <p className={styles.allProducts_description}>
                    {product.title}
                  </p>

                  <div className={styles.allProducts_price}>
                    {product.discont_price ? (
                      <>
                        <p className={styles.allProducts_oldPrice}>
                          {product.discont_price + "$"}
                        </p>
                        <p className={styles.allProducts_newPrice}>
                          {product.price + "$"}
                        </p>
                      </>
                    ) : (
                      <p className={styles.allProducts_oldPrice}>
                        {product.price + "$"}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))
        : ""}
    </div>
  );
}
