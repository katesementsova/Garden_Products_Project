import React from "react";
import styles from "./index.module.css";

export default function FilterByPrice() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Price</h2>
      <input className={styles.input_form} placeholder="from"></input>
      <input className={styles.input_form} placeholder="to"></input>
    </div>
  );
}
