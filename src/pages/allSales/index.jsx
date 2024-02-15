import React, { useMemo } from "react";
import styles from "../allProducts/index.module.css";
import NavMenu from "../../components/navMenu";
import { useGetAllProductsQuery } from "../../api/productApi";
import ProductCard from "../../@UI/productsCard/productCard/ProductCard";
import FilterByPrice from "../../@UI/reused/sorting/FilterByPrice";
import Sorting from "../../@UI/reused/sorting/Sorting";
import { useFilterByPrice } from "../../hooks/useFilterByPrice";
import { useFilterBySorted } from "../../hooks/useFilterBySorted";

let allSales = [];

export default function AllSales() {
  const { data } = useGetAllProductsQuery();

  useMemo(() => {
    allSales = data && data.filter((product) => product.discont_price);
  }, []);

  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } =
    useFilterByPrice(allSales);
  const { onSort, sortedList, sortMode } = useFilterBySorted(
    filteredList,
    "price"
  );

  return (
    <section className={styles.allProducts}>
      <NavMenu previous="Main Page" current="All sales" />
      <h1 className={styles.allProducts_title}>Discounted items</h1>
      <div className={styles.allProducts_sorting_container}>
        <FilterByPrice
          priceFrom={priceFrom}
          priceTo={priceTo}
          filterByMin={filterByMin}
          filterByMax={filterByMax}
        />
        <Sorting sortProducts={onSort} sortMode={sortMode} />
      </div>
      <ProductCard array={sortedList} />
    </section>
  );
}
