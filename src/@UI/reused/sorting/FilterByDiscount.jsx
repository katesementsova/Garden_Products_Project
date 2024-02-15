import React from "react";
import styles from "./index.module.css";

export default function FilterByDiscount({ ...props }) {
  return (
    <label>
      <input {...props} type="checkbox" className={styles.checkbox} />
      Discounted items
    </label>
  );
}
