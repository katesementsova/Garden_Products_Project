import React from "react";
import styles from "./index.module.css";
import SectionHead from "../../components/sectionHead";
import { Link } from "react-router-dom";

export default function CartIsEmpty() {
  return (
    <div className={styles.container}>
      <SectionHead
        title="Shopping cart"
        button="Back to the store"
        page={"/"}
      />
      <div className={styles.info}>
        <p className={styles.title}>
          Looks like you have no items in your basket currently.
        </p>
        <Link className={styles.link_btn} to={"/"}>
          <button className={styles.btn}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}
