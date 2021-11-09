import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import {
  motion,
  // Frame,
  // useTransform,
  // useMotionValue,
} from "framer-motion/dist/framer-motion";

import Recent from "./Recent.js";
import styles from "./ProductsPage.module.css";
import { setAllProducts } from "../../store/products.js";
import { setAllRecentlyViewed } from "../../store/recentlyViewed";

function ProductsPage() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setAllProducts());

    dispatch(setAllRecentlyViewed(user?.id));
  }, [user?.id, dispatch]);

  // if (!user) return <Redirect to="/" />;

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <h2 className={styles.title}>Products Page</h2>

      {products?.map((product, i) => (
        <div key={i}>
          <a href={`/products/${product.id}`}>{product?.name}</a>

          <br />
        </div>
      ))}

      <br />

      {user && <Recent user={user} products={products} />}
    </motion.div>
  );
}

export default ProductsPage;
