import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router";
import styles from "./ProductPage.module.css";
import { setAllProducts, updateProduct } from "../../store/products.js";
import { setAllReviews } from "../../store/reviews.js";
import { setAllReviewLikes } from "../../store/reviewLikes";
import ProductDetail from "./ProductDetail";
import QuestionCard from "./QuestionCard";
import ReviewCard from "./ReviewCard";
import { setAllQuestions } from "../../store/questions.js";

function ProductPage() {
  const dispatch = useDispatch();
  const params = useParams();

  const sessionUser = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);
  const reviews = useSelector((state) => state.reviews);
  const questions = useSelector((state) => state.questions);
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

  const productQuestions = questions?.filter((question) => {
    return question.productId === +params.id;
  });

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(setAllReviews());
    dispatch(setAllReviewLikes());
    dispatch(setAllQuestions());
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <>
      <ProductDetail
        num={productReviews?.length}
        avgRating={avgRating}
        product={product}
      />

      <ReviewCard productReviews={productReviews} />

      <QuestionCard productQuestions={productQuestions} />
    </>
  );
}

export default ProductPage;
