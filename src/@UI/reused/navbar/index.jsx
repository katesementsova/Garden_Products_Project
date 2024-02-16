import React, { useState } from "react";
import styles from "./index.module.css";
import Header from "../../../components/header";

export default function NavBar() {
  const { open, setOpen } = useState(false);
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
      {open && (
        <div className={styles.main_container}>
          <Header isOpen={open} navClassName={styles.links_navbar} />
        </div>
      )}
    </div>
  );
}
