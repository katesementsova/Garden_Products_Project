import React from "react";
import styles from "./index.module.css";

export default function FilterByDiscount() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Discounted items</h2>
      <input className={styles.input}></input>
    </div>
  );
}
