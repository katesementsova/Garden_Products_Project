import React from "react";
import styles from "./index.module.css";
import Line from "../../assets/images/line.svg";
import Secateurs from "../../assets/images/secator.svg";
import Minus from "../../assets/images/minus.svg";
import Plus from "../../assets/images/plus.svg";
import CloseImage from "../../assets/images/ic-x.svg";

function Cart() {
  return (
    <section className={styles.cart}>
      <div className={styles.cart_title}>
        <h1 className={styles.title}>Shopping cart</h1>
        <img className={styles.line} src={Line} />
        <button className={styles.button}>Back to the store </button>
      </div>
      <div className={styles.cart_forms}>
        <div className={styles.cart_products}>
          <div className={styles.cart_product}>
            <img className={styles.cart_image} src={Secateurs} />

            <div className={styles.product_info}>
              <div className={styles.product_item}>
                <h2 className={styles.cart_product_description}>Secateurs</h2>
                <button className={styles.close}>
                  <img className={styles.closeImage} src={CloseImage} />
                </button>
              </div>
              <div className={styles.counter_form}>
                <div className={styles.counter}>
                  <button className={styles.cart_product_button}>
                    <img className={styles.minus} src={Minus}></img>
                  </button>
                  <button className={styles.count}>1</button>
                  <button className={styles.cart_product_button}>
                    <img className={styles.plus} src={Plus}></img>
                  </button>
                </div>
                <span className={styles.price}>$155</span>
                <span className={styles.oldPrice}>$240</span>
              </div>
            </div>
          </div>
          <div className={styles.cart_product}>
            <img className={styles.cart_image} src={Secateurs}></img>
            <div className={styles.product_info}>
              <div className={styles.product_item}>
                <h2 className={styles.cart_product_description}>Secateurs</h2>
                <button className={styles.close}>
                  <img className={styles.closeImage} src={CloseImage}></img>
                </button>
              </div>
              <div className={styles.counter_form}>
                <div className={styles.counter}>
                  <button className={styles.cart_product_button}>
                    <img className={styles.minus} src={Minus}></img>
                  </button>
                  <button className={styles.count}>1</button>
                  <button className={styles.cart_product_button}>
                    <img className={styles.plus} src={Plus}></img>
                  </button>
                </div>
                <span className={styles.price}>$155</span>
                <span className={styles.oldPrice}>$240</span>
              </div>
            </div>
          </div>
          <div className={styles.cart_product}>
            <img className={styles.cart_image} src={Secateurs}></img>
            <div className={styles.product_info}>
              <div className={styles.product_item}>
                <h2 className={styles.cart_product_description}>Secateurs</h2>
                <button className={styles.close}>
                  <img className={styles.closeImage} src={CloseImage}></img>
                </button>
              </div>
              <div className={styles.counter_form}>
                <div className={styles.counter}>
                  <button className={styles.cart_product_button}>
                    <img className={styles.minus} src={Minus}></img>
                  </button>
                  <button className={styles.count}>1</button>
                  <button className={styles.cart_product_button}>
                    <img className={styles.plus} src={Plus}></img>
                  </button>
                </div>
                <span className={styles.price}>$155</span>
                <span className={styles.oldPrice}>$240</span>
              </div>
            </div>
          </div>
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
              <button className={styles.form_button}>Order</button>
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
