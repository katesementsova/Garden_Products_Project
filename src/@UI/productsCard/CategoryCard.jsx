import React from "react";
import styles from "../../components/categories/index.module.css";
import { API_URL } from "../../api/apiUrl";

export default function CategoryCard({ array }) {
  return (
    <div className={styles.categories_items}>
      {array
        ? array.map((category) => (
            <div className={styles.categories_item} key={category.id}>
              <img
                className={styles.categories_image}
                src={API_URL + category.image}
                alt="image"
              />
              <p className={styles.categories_title}>{category.title}</p>
            </div>
          ))
        : ""}
    </div>
  );
}
