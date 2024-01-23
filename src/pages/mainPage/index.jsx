import React from "react";
import styles from "./index.module.css";
import Welcome from "../../components/welcome";
import Categories from "../../components/categories/index";
import Discount from "../../components/discount";
import Sale from "../../components/sale/index";

function Mainpage() {
  return (
    <div>
      <Welcome />
      <Categories />
      <Discount />

      <Sale />
    </div>
  );
}

export default Mainpage;
