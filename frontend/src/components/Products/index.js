import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import { setAllProducts } from "../../store/products.js";

function ProductsPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setAllProducts());
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <>
      <h2 className={styles.title}>Products Page</h2>

      {products?.map((product) => (
        <>
          <a href={`/products/${product.id}`} key={product?.id}>
            {product?.name}
          </a>
          <br />
        </>
      ))}
    </>
  );
}

export default ProductsPage;
