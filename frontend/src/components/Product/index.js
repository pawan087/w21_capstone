import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router";
import styles from "./ProductPage.module.css";
import { setAllProducts } from "../../store/products.js";
import { setAllReviews } from "../../store/reviews.js";
import { setAllReviewLikes } from "../../store/reviewLikes";

function ProductPage() {
  const dispatch = useDispatch();
  const params = useParams();

  const sessionUser = useSelector((state) => state.session.user);
  const products = useSelector((state) => state.products);
  const reviews = useSelector((state) => state.reviews);
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

  useEffect(() => {
    dispatch(setAllProducts());
    dispatch(setAllReviews());
    dispatch(setAllReviewLikes());
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <>
      <h2 className={styles.title}>Product Page</h2>

      <li>{product[0]?.name}</li>

      <li>{product[0]?.description}</li>

      <li>${product[0]?.price}</li>

      <img
        className={styles.image}
        alt="productImage"
        src={product[0]?.images[0]}
      ></img>

      <h4 className={styles.title}>Reviews</h4>

      {productReviews?.map((review) => {
        return (
          <div key={review.id}>
            <li>{review.User.username}</li>

            <li>{review.content}</li>

            <li>{review.rating} Stars</li>

            {review.likeCount === 1 ? (
              <li>{review.likeCount} Like</li>
            ) : (
              <li>{review.likeCount} Likes</li>
            )}

            {review.dislikeCount === 1 ? (
              <li>{review.dislikeCount} Dislike</li>
            ) : (
              <li>{review.dislikeCount} Dislikes</li>
            )}

            <br />
          </div>
        );
      })}
    </>
  );
}

export default ProductPage;
