import React, { useContext } from "react";
import styles from "./index.module.css";
import { ModalState } from "../../pages/cart";
import Close from "../../assets/images/ic_white_x.svg";
import { Link } from "react-router-dom";

const ModalWindow = () => {
  const { setIsModal } = useContext(ModalState);

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modal_container}>
        <div className={styles.modal_title}>
          <h2>Congratulations!</h2>
          <div onClick={() => setIsModal(false)}>
            <Link className={styles.order_btn} to={"/CartIsEmpty"}>
              <img className={styles.close_image} src={Close} />
            </Link>
          </div>
        </div>
        <p className={styles.modal_info}>
          Your order has been successfully placed on
          <br />
           the website.
          <br />
          <br />
          A manager will contact you shortly <br />
          to confirm your order.
        </p>
      </div>
    </div>
  );
};

export default ModalWindow;
