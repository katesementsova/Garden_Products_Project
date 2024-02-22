import React, { useState } from "react";
import styles from "./index.module.css";

export default function NavBar({ open, setOpen }) {
  const openNavbar = () => setOpen(!open);

  return (
    <div className={styles.navbar_container}>
      <div
        onClick={() => openNavbar()}
        className={
          open ? `${styles.navbar} ${styles.active}` : `${styles.navbar} `
        }
      >
        <span></span>
      </div>
    </div>
  );
}
