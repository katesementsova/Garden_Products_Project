import React from "react";
import styles from "./index.module.css";
import FilterByDiscount from "../../components/filterByDiscount";
import FilterByPrice from "../../components/filterByPrice";
import Sorting from "../../components/sorting";
import { useGetAllProductsQuery } from "../../api/productApi";
import NavMenu from "../../components/navMenu";
import ProductCard from "../../@UI/productsCard/productCard/ProductCard";

let allProducts = [];

export default function AllProducts() {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    allProducts = data;
  }

  return (
    <section className={styles.allProducts}>
      <NavMenu previous="Main Page" current="All products" />
      <h1 className={styles.allProducts_title}>All products</h1>
      <div className={styles.allProducts_sorting_container}>
        <FilterByPrice />
        <FilterByDiscount />
        <Sorting />
      </div>
      <ProductCard array={allProducts} />
    </section>
  );
}
