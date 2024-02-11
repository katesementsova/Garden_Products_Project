import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function SectionHead({ title, button, page }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.line_btn}>
        <div className={styles.line}></div>
        <Link className={styles.btn} to={page}>
          {button}
        </Link>
      </div>
    </div>
  );
}
