import React from "react";
import styles from "../allProducts/index.module.css";
import NavMenu from "../../components/navMenu";
import { useGetAllProductsQuery } from "../../api/productApi";
import FilterByPrice from "../../components/filterByPrice/index";
import Sorting from "../../components/sorting";
import ProductCard from "../../@UI/productsCard/ProductCard";

let allSales = [];

export default function AllSales() {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    allSales = data.filter((product) => product.discont_price);
  }

  return (
    <section className={styles.allProducts}>
      <NavMenu previous="Main Page" current="All products" />
      <h1 className={styles.allProducts_title}>Discounted items</h1>
      <div className={styles.allProducts_sorting_container}>
        <FilterByPrice />
        <Sorting />
      </div>
      <ProductCard array={allSales} />
    </section>
  );
}
