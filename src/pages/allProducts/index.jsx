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
