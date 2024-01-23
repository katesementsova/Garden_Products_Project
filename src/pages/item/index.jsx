import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import ItemImage from "../../assets/images/item_image.svg";
import Line from "../../assets/images/line.svg";
import Minus from "../../assets/images/minus.svg";
import Plus from "../../assets/images/plus.svg";

export default function Item() {
  return (
    <section className={styles.item}>
      <div className={styles.navigate_menu}>
        <NavLink className={styles.navigate_link} to={"/"}>
          <button className={styles.previous_section}>Main page</button>
        </NavLink>
        <img className={styles.navigate_line} src={Line} />
        <NavLink className={styles.navigate_link} to={"Categories"}>
          <button className={styles.previous_section}>Categories</button>
        </NavLink>
        <img className={styles.navigate_line} src={Line} />
        <NavLink className={styles.navigate_link} to={"Tools"}>
          <button className={styles.previous_section}>
            Tools and equipment
          </button>
        </NavLink>
        <img className={styles.navigate_line} src={Line} />
        <NavLink className={styles.navigate_link} to={"Item"}>
          <button className={styles.current_section}>Secateurs</button>
        </NavLink>
      </div>
      <div className={styles.item_container}>
        <img className={styles.item_image} src={ItemImage} />
        <div className={styles.item_info}>
          <h2 className={styles.item_title}>Secateurs</h2>
          <div className={styles.price_info}>
            <div className={styles.item_price}>
              <p className={styles.price}>$199</p>
              <p className={styles.oldPrice}>$240</p>
            </div>
            <span className={styles.discount}>-17%</span>
          </div>
          <div className={styles.count_form}>
            <div className={styles.item_counter}>
              <button className={styles.item_product_button}>
                <img className={styles.minus} src={Minus}></img>
              </button>
              <button className={styles.count}>1</button>
              <button className={styles.item_product_button}>
                <img className={styles.plus} src={Plus}></img>
              </button>
            </div>
            <button className={styles.add_btn}>Add to cart</button>
          </div>
          <div className={styles.description_container}>
            <h3 className={styles.item_subtitle}>Description</h3>
            <p className={styles.description}>
              This high quality everyday secateur features a fully hardened and
              tempered, high-carbon steel blade for lasting sharpness. For
              comfort, the robust but lightweight alloy handles are covered
              in a soft grip, in a bright terracotta colour for maximum
              visibility in the garden. It won’t be easy to leave this pruner
              behind at the end of the day! Rubber cushion stops prevent jarring
              over repeated use, reducing hand strain for the user.
              <br />
              <br />
              This secateur cuts up to 2.5 cm diameter. Carrying RHS
              endorsement, possibly the highest accolade in gardening, for peace
              of mind this pruner comes with a ten-year guarantee against
              manufacturing defects. Supplied with replacement blade and spare
              spring. You may also be interested in our pack of two replacement
              springs.
            </p>
            <br />

            <button className={styles.readMore_btn}>Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
