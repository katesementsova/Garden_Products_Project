import React from "react";
import styles from "./CategoryCard.module.css";
import { API_URL } from "../../../api/apiUrl";
import { Link } from "react-router-dom";

export default function CategoryCard({ array }) {
  return (
    <div className={styles.categories_items}>
      {array
        ? array.map((category) => (
            <Link key={category.id} to={`/ProductsOfCategory/${category.id}`}>
              <div className={styles.categories_item} key={category.id}>
                <img
                  className={styles.categories_image}
                  src={API_URL + category.image}
                  alt="image"
                />
                <Link to={`/ProductsOfCategory/${category.id}`}>
                  <button className={styles.category_title}>
                    {category.title}
                  </button>
                </Link>
              </div>
            </Link>
          ))
        : ""}
    </div>
  );
}
