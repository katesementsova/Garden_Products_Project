import React from "react";
import styles from "./index.module.css";
import { useGetCategoriesQuery } from "../../api/productApi";
import SectionHead from "../sectionHead/index";
import CategoryCard from "../../@UI/productsCard/CategoryCard";

let categories = [];

export default function Categories() {
  const { data, isLoading } = useGetCategoriesQuery();
  if (isLoading) {
    <div>Loading...</div>;
  } else {
    categories = data;
  }

  return (
    <section className={styles.categories_container}>
      <SectionHead title={"Categories"} button={"All categories"} />
      <CategoryCard array={categories.slice(0, 4)} />
    </section>
  );
}
