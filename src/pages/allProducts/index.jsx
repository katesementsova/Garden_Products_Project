import React from "react";
import styles from "./index.module.css";
import { useGetAllProductsQuery } from "../../api/productApi";
import NavMenu from "../../components/navMenu";
import ProductCard from "../../@UI/productsCard/productCard/ProductCard";
import FilterByPrice from "../../@UI/reused/sorting/FilterByPrice";
import FilterByDiscount from "../../@UI/reused/sorting/FilterByDiscount";
import Sorting from "../../@UI/reused/sorting/Sorting";
import { useFilterByDiscount } from "../../hooks/useFilterByDiscount";
import { useFilterByPrice } from "../../hooks/useFilterByPrice";
import { useFilterBySorted } from "../../hooks/useFilterBySorted";

let allProducts = [];

export default function AllProducts() {
  const { data, isLoading } = useGetAllProductsQuery();

  const {
    filterValue,
    filteredList: filteredListByDiscount,
    onFilter,
  } = useFilterByDiscount(allProducts, "discont_price");
  const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } =
    useFilterByPrice(filteredListByDiscount);
  const { onSort, sortedList, sortMode } = useFilterBySorted(
    filteredList,
    "price"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    allProducts = data;
  }

  return (
    <div className={styles.allProducts}>
      <NavMenu previous="Main Page" current="All products" />
      <h1 className={styles.allProducts_title}>All products</h1>
      <div className={styles.allProducts_sorting_container}>
        <FilterByPrice
          priceFrom={priceFrom}
          priceTo={priceTo}
          filterByMin={filterByMin}
          filterByMax={filterByMax}
        />
        <FilterByDiscount
          type="checkbox"
          checked={filterValue}
          onChange={onFilter}
        />
        <Sorting sortProducts={onSort} sortMode={sortMode} />
      </div>
      <ProductCard array={sortedList} />
    </div>
  );
}
