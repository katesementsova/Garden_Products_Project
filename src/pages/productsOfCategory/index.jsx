import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import ProductCard from "../../@UI/productsCard/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/slices/ProductOfCategorySlice";
import NavMenu from "../../components/navMenu";
import FilterByPrice from "../../@UI/reused/sorting/FilterByPrice";
import FilterByDiscount from "../../@UI/reused/sorting/FilterByDiscount";
import Sorting from "../../@UI/reused/sorting/Sorting";
import { useFilterByDiscount } from "../../hooks/useFilterByDiscount";
import { useFilterByPrice } from "../../hooks/useFilterByPrice";
import { useFilterBySorted } from "../../hooks/useFilterBySorted";

export default function ProductsOfCategory() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategory(id));
  }, [id, dispatch]);

  const { categoryProducts } = useSelector(
    ({ productsOfCategory }) => productsOfCategory
  );
  console.log(categoryProducts);

  // const {
  //   filterValue,
  //   filteredList: filteredListByDiscount,
  //   onFilter,
  // } = useFilterByDiscount(allProducts && allProducts.data, "discont_price");
  // const { filterByMax, filterByMin, filteredList, priceFrom, priceTo } =
  //   useFilterByPrice(filteredListByDiscount);
  // const { onSort, sortedList, sortMode } = useFilterBySorted(
  //   filteredList,
  //   "price"
  // );

  return (
    <section className={styles.productsOfCategory_container}>
      {categoryProducts.data && (
        <div>
          <NavMenu
            categoryName={categoryProducts.category.title}
            current="Categories"
          />
          <h1 className={styles.title}>{categoryProducts.category.title}</h1>
          <div className={styles.sorting_container}>
            {/* <FilterByPrice
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
            <Sorting sortProducts={onSort} sortMode={sortMode} /> */}
          </div>
          <div className={styles.container_cards}>
            <ProductCard array={categoryProducts.data} />
          </div>
        </div>
      )}
    </section>
  );
}
