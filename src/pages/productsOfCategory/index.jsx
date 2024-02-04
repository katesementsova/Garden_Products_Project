import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useLocation, useParams } from "react-router-dom";
import FilterByPrice from "../../components/filterByPrice";
import FilterByDiscount from "../../components/filterByDiscount";
import Sorting from "../../components/sorting";
import { useGetProductsInCategoriesQuery } from "../../api/productApi";
import SectionHead from "../../components/sectionHead";
import ProductCard from "../../@UI/productsCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/slices/ProductOfCategorySlice";

// const initAllproducts = [];

export default function ProductsOfCategory() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategory(id));
  }, [id, dispatch]);

  const { categoryProducts } = useSelector(
    ({ productsOfCategory }) => productsOfCategory
  );

  // const location = useLocation();
  // const { state } = location;

  // const { data: allproducts = initAllproducts } =
  //   useGetProductsInCategoriesQuery(state.id);
  // const { category, data } = allproducts;

  return (
    <section className={styles.productsOfCategory_container}>
      {categoryProducts.data && (
        <div>
          <SectionHead />
          <h1 className={styles.title}>{categoryProducts.category.title}</h1>
          <div className={styles.sorting_container}>
            <FilterByPrice />
            <FilterByDiscount />
            <Sorting />
          </div>
          <div className={styles.container_cards}>
            <ProductCard array={categoryProducts.data} />
          </div>
        </div>
      )}
    </section>
  );
}
