import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  motion,
  // Frame,
  // useTransform,
  // useMotionValue,
} from "framer-motion/dist/framer-motion";
import ReactLoading from "react-loading";

// import NewCartItem from "./NewCartItem.js";
// import QuestionCard from "./QuestionCard";
// import ReviewCard from "./ReviewCard";
// import AskQuestionCard from "./AskQuestionCard";
// import { setAllQuestions } from "../../store/questions.js";
import Footer from "../Footer";
import ProductDetail from "./ProductDetail";

import { setAllProducts } from "../../store/products.js";
import { setAllReviews } from "../../store/reviews.js";
import { setAllReviewLikes } from "../../store/reviewLikes";
import { addToRecent } from "../../store/recentlyViewed";
import styles from "./ProductPage.module.css";

function ProductPage() {
  const dispatch = useDispatch();
  const params = useParams();

  const user = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);
  const reviews = useSelector((state) => state.reviews);
  // const questions = useSelector((state) => state.questions);
  const reviewLikes = useSelector((state) => state.reviewLikes);

  const product = products?.filter((product) => +product.id === +params.id);
  let productReviews = [];

  reviews?.forEach((review) => {
    if (review.productId === +params.id) {
      let id1 = review.id;
      let likeCount = 0;
      let dislikeCount = 0;

      reviewLikes?.forEach((reviewLike) => {
        let id2 = reviewLike.reviewId;

        if (id1 === id2) {
          if (reviewLike.like === true) {
            likeCount++;
          } else {
            dislikeCount++;
          }
        }
      });

      productReviews.push({
        ...review,
        likeCount: likeCount,
        dislikeCount: dislikeCount,
      });
    }
  });

  let sum = 0;

  productReviews?.forEach((review) => {
    sum += +review.rating;
  });

  const avgRating = sum / productReviews?.length;

  // const productQuestions = questions?.filter((question) => {
  //   return question.productId === +params.id;
  // });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // dispatch(setAllQuestions());
    (async () => {
      if (user) {
        await dispatch(
          addToRecent({ productId: +params.id, userId: user?.id })
        );
      }

      await dispatch(setAllProducts());
      await dispatch(setAllReviews());
      await dispatch(setAllReviewLikes());

      setLoad(true);
    })();
  }, [params.id, user?.id, dispatch]);

  if (!load) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.loaderCotnainer}
      >
        <ReactLoading
          type={"spin"}
          color={"rgba(0,0,0,.75)"}
          height={"0px"}
          width={"57.5px"}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProductDetail
        num={productReviews?.length}
        avgRating={avgRating}
        product={product}
        reviews={productReviews}
      />

      {user && (
        <div className={styles.footerWithUserContainer}>
          <Footer />
        </div>
      )}

      {!user && (
        <div className={styles.footerWithoutUserContainer}>
          <Footer />
        </div>
      )}
    </motion.div>
  );
}

export default ProductPage;
