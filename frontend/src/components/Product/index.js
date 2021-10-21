import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router";
import styles from "./ProductPage.module.css";
import { setAllProducts } from "../../store/products.js";

function ProductPage() {
  const dispatch = useDispatch();
  const params = useParams();

  const sessionUser = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);
  const product = products?.filter((product) => product.id === +params.id);

  useEffect(() => {
    dispatch(setAllProducts());
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <>
      <h2 className={styles.title}>Product Page</h2>


        <li>{product[0]?.name}</li>

    </>
  );
}

export default ProductPage;
