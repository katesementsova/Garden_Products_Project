import styles from "./index.module.css";
import Instagram from "../../assets/images/ic-instagram.svg";
import WhatsApp from "../../assets/images/ic-whatsapp.svg";
import Map from "../../assets/images/map.svg";

export default function Footer() {
  // const contacts = [
  //   {
  //     style: styles.conatact_link_top,
  //     name: "Phone",
  //     title: "+49 999 999 99 99",
  //   },
  //   {
  //     style: styles.conatact_link_top,
  //     name: "Socials",
  //     title: <img src={Instagram} />,
  //     title2: <img src={WhatsApp} />,
  //   },
  //   {
  //     style: styles.conatact_link_bottom,
  //     name: "Address",
  //     title: "Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland",
  //   },
  //   {
  //     style: styles.conatact_link_bottom,
  //     name: "Working Hours",
  //     title: "24 hours a day",
  //   },
  // ];
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
      {/* <ul className={styles.contact_list}>
        {contacts.map((el) => (
          <li className={el.style} key={el.name}>
            <p> {el.name} </p>
            <div className={styles.cotact_content}>
              {el.title} {el.title2}
            </div>
          </li>
        ))}
      </ul> */}

      <img className={styles.map} src={Map}></img>
    </footer>
  );
}
