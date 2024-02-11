import React from "react";
import styles from "./index.module.css";
import { useGetAllProductsQuery } from "../../api/productApi";
import SectionHead from "../sectionHead";
import ProductCard from "../../@UI/productsCard/productCard/ProductCard";

let sale = [];

export default function Sale() {
  const { data, isLoading } = useGetAllProductsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    sale = data.filter((product) => product.discont_price);
  }

  return (
    <section className={styles.sale_container}>
      <SectionHead title="Sale" button="All sales" page={"/AllSales"} />
      <ProductCard array={sale.slice(0, 4)} />
    </section>
  );
}
