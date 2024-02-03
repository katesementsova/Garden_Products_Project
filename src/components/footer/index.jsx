import styles from "./index.module.css";
import Instagram from "../../assets/images/ic-instagram.svg";
import WhatsApp from "../../assets/images/ic-whatsapp.svg";

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <h1 className={styles.contact}>Contact</h1>
      <div className={styles.contact_list}>
        <div className={styles.contact_link}>
          <p>Phone</p>
          <a className={styles.cotact_content}>+49 999 999 99 99</a>
        </div>
        <div className={styles.contact_link}>
          <p>Socials</p>
          <img className={styles.cotact_content} src={Instagram} />
          <img className={styles.cotact_content} src={WhatsApp} />
        </div>
        <div className={styles.contact_link}>
          <p>Address</p>
          <p className={styles.cotact_content}>
            Linkstraße 2, 8 OG, 10 785, Berlin, <br /> Deutschland
          </p>
        </div>
        <div className={styles.contact_link}>
          <p className={styles.cotact_content}>Working Hours</p>
          <p>24 hours a day</p>
        </div>
      </div>

      <div className={styles.map}></div>
    </footer>
  );
}
