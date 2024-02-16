import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
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

  console.log(products[0]);
  return (
    <section className={styles.item}>
      <NavMenu
        current="Categories"
        categoryName="Products of category"
        itemName="Item"
      />
      <ItemCard oneProduct={products[0]} />
    </section>
  );
}
