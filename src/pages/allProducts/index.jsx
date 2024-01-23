// import Price_filter from "../../components/FiltrationModules/Price_filter";
// import Discounted_filter from "../../components/FiltrationModules/Discounted_filter";
// import Sorted_filter from "../../components/FiltrationModules/Sorted_filter";
// import { NavLink } from "react-router-dom";
// import { API_URL } from "../../API/api";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../storage/Slice/productsSlice";

// const initAllproducts = [];

// export default function Allproducts() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   const { products } = useSelector(({ products }) => products);

//   return (
//     <div className={styles.container}>
//       <div className={styles.button}>
//         <button className={styles.first_button}>Main page</button>
//         <img className={styles.Line} src={Line} />

//         <button className={styles.second_button}>All products</button>
//       </div>
//       <h1 className={styles.title}>All products</h1>

//       <div className={styles.form_container}>
//         <Price_filter />
//         <Discounted_filter />
//         <Sorted_filter />
//       </div>

//       <div className={styles.container_cards}>
//         {products.slice(0, 11).map((products) => (
//           <NavLink to="/" className={styles.card} key={products.id}>
//             <img className={styles.picture} src={API_URL + products.image} />
//             <h2 className={styles.product_name}>{products.title}</h2>
//             <p className={styles.price}>{products.price + "$"}</p>
//             <p className={styles.sale_price}>{products.discont_price + "$"}</p>
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// }

////////////////////

import React from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import Line from "../../assets/images/line.svg";
import FilterByDiscount from "../../components/filterByDiscount";
import FilterByPrice from "../../components/filterByPrice";
import Sorting from "../../components/sorting";
import SaleImage from "../../assets/images/sale_image.svg";

export default function AllProducts() {
  return (
    <section className={styles.allProducts}>
      <div className={styles.navigate_menu}>
        <NavLink className={styles.navigate_link} to={"/"}>
          <button className={styles.previous_section}>Main page</button>
        </NavLink>
        <img className={styles.navigate_line} src={Line} />
        <NavLink className={styles.navigate_link} to={"AllProducts"}>
          <button className={styles.current_section}>All products</button>
        </NavLink>
      </div>
      <h1 className={styles.allProducts_title}>All products</h1>
      <div className={styles.allProducts_sorting_container}>
        <FilterByPrice />
        <FilterByDiscount />
        <Sorting />
      </div>
      <div className={styles.allProducts_items}>
        <div className={styles.allProducts_item}>
          <img className={styles.allProducts_image} src={SaleImage}></img>
          <span className={styles.allProducts_discount}>-50%</span>
          <p className={styles.allProducts_description}>
            Decorative forged bridge
          </p>
          <div className={styles.allProducts_price}>
            <span className={styles.allProducts_newPrice}>$500</span>
            <span className={styles.allProducts_oldPrice}>$1000</span>
          </div>
        </div>
        <div className={styles.allProducts_item}>
          <img className={styles.allProducts_image} src={SaleImage}></img>
          <span className={styles.allProducts_discount}>-50%</span>
          <p className={styles.allProducts_description}>
            Decorative forged bridge
          </p>
          <div className={styles.allProducts_price}>
            <span className={styles.allProducts_newPrice}>$500</span>
            <span className={styles.allProducts_oldPrice}>$1000</span>
          </div>
        </div>
        <div className={styles.allProducts_item}>
          <img className={styles.allProducts_image} src={SaleImage}></img>
          <span className={styles.allProducts_discount}>-50%</span>
          <p className={styles.allProducts_description}>
            Decorative forged bridge
          </p>
          <div className={styles.allProducts_price}>
            <span className={styles.allProducts_newPrice}>$500</span>
            <span className={styles.allProducts_oldPrice}>$1000</span>
          </div>
        </div>
        <div className={styles.allProducts_item}>
          <img className={styles.allProducts_image} src={SaleImage}></img>
          <span className={styles.allProducts_discount}>-50%</span>
          <p className={styles.allProducts_description}>
            Decorative forged bridge
          </p>
          <div className={styles.allProducts_price}>
            <span className={styles.allProducts_newPrice}>$500</span>
            <span className={styles.allProducts_oldPrice}>$1000</span>
          </div>
        </div>
      </div>
    </section>
  );
}
