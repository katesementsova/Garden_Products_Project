import React, { useRef } from "react";
import styles from "./index.module.css";

export default function Welcome() {
  // const getDiscountRef = useRef(null);
  // const handleCheckOutClick = () => {
  //   getDiscountRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <section className={styles.welcome}>
      <h1 className={styles.title}>
        Amazing discounts <br /> on Garden Products!
      </h1>
      <button
        className={styles.checkBtn}
        // onClick={handleCheckOutClick}
      >
        Check out
      </button>
    </section>
  );
}
