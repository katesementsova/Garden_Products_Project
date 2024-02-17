import React, { createContext } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector } from "../../store/slices/cartSlice";
import ModalWindow from "../../components/modalWindow/index";
import SectionHead from "../../components/sectionHead";
import CartCard from "../../@UI/productsCard/cartCard/CartCard";
import CartCounter from "../../components/cartCounter/CartCounter";

export const ModalState = createContext();

function Cart() {
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
    <div className={styles.cart_container}>
      <SectionHead
        title="Shopping cart"
        button="Back to the store"
        page={"/"}
      />
      <div className={styles.cart_forms}>
        <CartCard array={basketProducts} />
        <CartCounter />
      </div>
    </div>
  );
}

export default Cart;
