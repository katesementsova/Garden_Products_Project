import React, { useState, Link } from "react";
import styles from "./index.module.css";
import Minus from "../../assets/images/minus.svg";
import Plus from "../../assets/images/plus.svg";
import CloseImage from "../../assets/images/ic-x.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  basketSelector,
  incrementProduct,
  removeProduct,
} from "../../store/slices/cartSlice";
import { API_URL } from "../../api/apiUrl";
import ModalWindow from "../../components/modalWindow/index";
import SectionHead from "../../components/sectionHead";
import { decrementProduct } from "../../store/slices/cartSlice";

function Cart() {
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  const { basket: basketProducts } = useSelector(basketSelector);

  const decrement = (item) => dispatch(decrementProduct(item));
  const increment = (item) => dispatch(incrementProduct(item));
  const removeItem = (item) => dispatch(removeProduct(item));

  return (
    <section
      className={
        modalActive ? `${styles.cart} + ${styles.cart_active}` : styles.cart
      }
    >
      {modalActive ? <ModalWindow active={modalActive} /> : ""}

      <SectionHead title="Shopping cart" button="Back to the store" />
      <div className={styles.cart_forms}>
        <div className={styles.cart_products}>
          {basketProducts.map((product) => (
            <div className={styles.cart_product}>
              <img
                className={styles.cart_image}
                src={API_URL + product.image}
              />

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
                  <span className={styles.price}>$155</span>
                  <span className={styles.oldPrice}>$240</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cart_container}>
          <div className={styles.form_container}>
            <h2 className={styles.form_title}>Order detalis</h2>
            <div className={styles.order_counter}>
              <p className={styles.form_items}>items</p>
              <div className={styles.total_string}>
                <p className={styles.form_total}>Total</p>
                <p className={styles.total_price}>$465,00</p>
              </div>
            </div>
            <div className={styles.container_form}>
              <input className={styles.input_order_form} placeholder="Name" />
              <input
                className={styles.input_order_form}
                placeholder="Phone number"
              />
              <input className={styles.input_order_form} placeholder="Email" />
              <button
                className={styles.form_button}
                onClick={() => setModalActive(true)}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;

{
  /* <div className={styles.cart_container}>
<div className={styles.cart_title}>
<h1 className={styles.title}>Shopping cart</h1>
<img className={styles.line} src={Line} />
<button className={styles.button}>Back to the store </button> 
</div>
<p>Looks like you have no items in your basket currently.</p>
<button className={styles.cart_button}>Continue Shopping</button>
</div>
</div> */
}

// Lesson 23/01/2024

// import { useEffect } from "react";
// import { UseSelector, useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../store/slices/productsSlice/index";

// function Cart_test() {
//   const dispatch = useDispatch();
//   const {productsList, basket} = useSelector((state) => state.products.products);

//   useEffect(() => {
//   dispatch(getAllProducts());
//   }, [])

//   return <>

//   <div>
//     {productsList.map((product) =>
//     <div onClick(() => dispatch.addToBasket({product.id})>
//       <img src="" + product.image />
//       </div>
//     <span>{product.price}</span>
//     <h3>{product.title}</h3>
//     )}
//   </div>
//   </>
// }
