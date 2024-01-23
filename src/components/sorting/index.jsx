import React from "react";
import styles from "./index.module.css";
import Icon from "../../assets/images/ic-sort.svg";

export default function Sorting() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sorted</h2>
      <button className={styles.btn}>
        <span className={styles.subtitle}>by default</span>
        <img className={styles.icon} src={Icon} />
      </button>
    </div>
  );
}
