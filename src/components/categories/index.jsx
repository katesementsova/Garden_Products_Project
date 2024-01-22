// import { UseSelector, useDispatch } from "react-redux";
// import { getAllCategories } from "../../storage/slices/categoriesSlice";
// import { useEffect } from "react";

// function Categories() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllCategories());
//   }, []);
//   return <section></section>;
// }

// export default Categories;

////////

import styles from "./index.module.css";
import Line from "../../assets/images/line.svg";
// import { NavLink } from "react-router-dom";
import CategoriesImg from "../../assets/images/categories.svg";

export default function Categories() {
  return (
    <section className={styles.categories_container}>
      <div className={styles.categories_title}>
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.line_btn}>
          <img className={styles.line} src={Line}></img>
          <button className={styles.categories_link}>All categories</button>
        </div>
      </div>
      <div className={styles.categories_items}>
        <div className={styles.categories_item}>
          <img src={CategoriesImg}></img>
          <p>Fertilizer</p>
        </div>
        <div className={styles.categories_item}>
          <img src={CategoriesImg}></img>
          <p>Protective products and septic tanks</p>
        </div>
        <div className={styles.categories_item}>
          <img src={CategoriesImg}></img>
          <p>Planting material </p>
        </div>
        <div className={styles.categories_item}>
          <img src={CategoriesImg}></img>
          <p>Tools and equipment</p>
        </div>
      </div>
    </section>
  );
}

// import React, { useEffect } from "react";
// import styles from "./index.module.css";
// import Line from "../../assets/images/line.svg";
// import { NavLink } from "react-router-dom";
// import { API_URL } from "../../api/apiUrl";
// import { useDispatch, useSelector } from "react-redux";
// import { getCategory } from "../../store/slices/categorySlice";

// const initCategories = [];

// export default function Categories() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getCategory());
//   }, [dispatch]);
//   const { category } = useSelector(({ category }) => category);
//   console.log(category);
//   return (
//     <div className={styles.container}>
//       <div className={styles.container_title}>
//         <h1 className={styles.title}>Categories</h1>
//         <img className={styles.Line} src={Line} />
//         <button className={styles.button}>All categories </button>
//       </div>

//       <div className={styles.container_cards}>
//         {category.slice(0, 4).map((category) => (
//           <NavLink className={styles.card} key={category.id}>
//             <img className={styles.picture} src={API_URL + category.image} />
//             <h2>{category.title}</h2>
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// }
