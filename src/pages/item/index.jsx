import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import ItemCard from "../../@UI/productsCard/itemCard/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productsSlice";
import NavMenu from "../../components/navMenu/index";

export default function Item() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProducts(id));
  }, [id, dispatch]);

  const { products } = useSelector(({ productItem }) => productItem);
  console.log(products);

  return (
    <div className={styles.item}>
      {products[0] && (
        <div className={styles.item_container}>
          <NavMenu
            current="Categories"
            categoryName="Products of category"
            itemName="Item"
          />
          <ItemCard oneProduct={products[0]} />
        </div>
      )}
    </div>
  );
}
