import React from "react";
import NotFoundImg from "../../assets/images/notfound.svg";
import styles from "./index.module.css";
import Four from "../../assets/images/four.svg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles.notFound_container}>
      <div className={styles.notFound_title}>
        <img className={styles.notFound_four} src={Four}></img>
        <img className={styles.notFound_title_img} src={NotFoundImg} />
        <img className={styles.notFound_four} src={Four}></img>
      </div>
      <h2 className={styles.notFound_subtitle}>Page Not Found</h2>
      <p className={styles.notFound_description}>
        We’re sorry, the page you requested could not be found. <br /> Please go
        back to the homepage.
      </p>
      <Link className={styles.notFound_goHome} to={"/"}>
        <p>Go Home</p>
      </Link>
    </div>
  );
}

export default NotFound;
