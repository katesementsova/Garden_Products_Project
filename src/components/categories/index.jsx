import { UseSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../storage/slices/categoriesSlice";
import { useEffect } from "react";

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return <section></section>;
}

export default Categories;
