import React from "react";
import styles from "./index.module.css";
import NavMenu from "../../components/navMenu";
import CategoryCard from "../../@UI/productsCard/CategoryCard";
import { useGetCategoriesQuery } from "../../api/productApi";

let categories = [];

export default function CategoriesPage() {
  const { data, isLoading } = useGetCategoriesQuery();
  if (isLoading) {
    <div>isLoading...</div>;
  } else {
    categories = data;
  }

  return (
    <section className={styles.categories_container}>
      <NavMenu previous="Main Page" current="Categories" />
      <h1 className={styles.categories_title}>Categories</h1>
      <CategoryCard array={categories} />
    </section>
  );
}
