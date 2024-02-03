import React from "react";
import styles from "./index.module.css";
import Line from "../../assets/images/line.svg";

export default function SectionHead({ title, button }) {
  return (
    <div className={styles.categories_head}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.line_btn}>
        <img className={styles.line} src={Line}></img>
        <button className={styles.categories_btn}>{button}</button>
      </div>
    </div>
  );
}
