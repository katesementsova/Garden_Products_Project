import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import ProductCard from "../../@UI/productsCard/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/slices/ProductOfCategorySlice";
import NavMenu from "../../components/navMenu";

export default function ProductsOfCategory() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategory(id));
  }, [id, dispatch]);

  const { categoryProducts } = useSelector(
    ({ productsOfCategory }) => productsOfCategory
  );

  return (
    <div>
      {categoryProducts.data && (
        <div className={styles.productsOfCategory_container}>
          <NavMenu
            categoryName={categoryProducts.category.title}
            current="Categories"
          />
          <h1 className={styles.title}>{categoryProducts.category.title}</h1>
          <ProductCard array={categoryProducts.data} />
        </div>
      )}
    </div>
  );
}
