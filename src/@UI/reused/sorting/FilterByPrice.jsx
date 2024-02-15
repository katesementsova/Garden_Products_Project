import React from "react";
import styles from "./index.module.css";

export default function FilterByPrice({
  filterByMin,
  filterByMax,
  priceFrom,
  priceTo,
}) {
  return (
    <div className={styles.price_container}>
      <span className={styles.title}>Price</span>
      <input
        onChange={filterByMin}
        value={priceFrom}
        type="number"
        placeholder="from"
        className={styles.price_input}
      />
      <input
        onChange={filterByMax}
        value={priceTo}
        type="number"
        placeholder="to"
        className={styles.price_input}
      />
    </div>
  );
}
