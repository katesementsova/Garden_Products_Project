import React from "react";
import styles from "./index.module.css";

export default function Sorting({ sortProducts, sortMode }) {
  return (
    <div className={styles.sorting_container}>
      <span className={styles.title}></span>
      <select
        onChange={sortProducts}
        value={sortMode}
        className={styles.sorting_select}
      >
        <option className={styles.sorting_option} value="default">
          By default
        </option>
        <option className={styles.sorting_option} value="higher">
          By higher price{" "}
        </option>
        <option className={styles.sorting_option} value="lower">
          By lower price
        </option>
      </select>
    </div>
  );
}
