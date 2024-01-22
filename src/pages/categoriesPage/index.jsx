// import styles from "./index.module.css";
// import React, { useEffect, useState } from "react";
// // import { useGetCategoriesQuery } from "../../api/productApi";

// let initCategories = [];

// function Categories() {
//   const [categories, setCategories] = useState([]);
//   let url = "http://localhost:3333/categories/all";
//   useEffect(() => {
//     fetch(url)
//       .then((resp) => {
//         return resp.json();
//       })
//       .then((data) => setCategories(data));
//   }, []);
//   console.log(categories);

//   // console.log(commits);
//   // const { data: allCategories = initCategories } = useGetCategoriesQuery();
//   // allCategories.forEach((element) => {

//   // });

//   return (
//     <div className={styles.categories_container}>
//       <h1 className={styles.categories_title}>Categories</h1>

//       {categories.map((category) => (
//         <div className={styles.categories_list_container} key={category.id}>
//           <img className={styles.categories_img} src={category.image} />
//           <p className={styles.categories_name}>{category.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Categories;

//////////////

// import React from "react";
// import styles from "./index.module.css";
// import Line from "../../assets/images/line.svg";
// import { NavLink, useLocation } from "react-router-dom";
// import { API_URL } from "../../api/apiUrl";
// import { useSelector } from "react-redux";

// const initCategories = [];

// export default function Category() {
//   const { category } = useSelector(({ category }) => category);

//   return (
//     <div className={styles.container}>
//       <div className={styles.buttons}>
//         <button className={styles.first_button}>Main page</button>
//         <img className={styles.Line} src={Line} />

//         <button className={styles.second_button}>Categories</button>
//       </div>
//       <h1 className={styles.title}>Categories</h1>

//       <div className={styles.container_cards}>
//         {category.map((category) => (
//           <NavLink to="/Tools" className={styles.card} key={category.id}>
//             <img className={styles.picture} src={API_URL + category.image} />
//             <h2>{category.title}</h2>
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import styles from "./index.module.css";
import Categories from "../../components/categories";

export default function CategoriesPage() {
  return (
    <section className={styles.categories_page}>
      <Categories />
    </section>
  );
}
