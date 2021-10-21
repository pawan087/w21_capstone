import React, { useEffect } from "react";
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

  const productReviewLikes = reviewLikes?.filter((reviewLike) => {
    return reviewLike.Review.productId === +params.id;
  });

  const product = products?.filter((product) => +product.id === +params.id);
  const productReviews = reviews?.filter(
    (review) => +review.productId === +params.id
  );

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
        {
          var likeCount = 0;
          var dislikeCount = 0;
        }
        return (
          <div key={review.id}>
            <li>{review.User.username}</li>

            <li>{review.content}</li>

            <li>{review.rating} Stars</li>

            {productReviewLikes?.forEach((reviewLike) => {
              if (reviewLike.reviewId === review.id) {
                if (reviewLike.like === true) {
                  likeCount++;
                } else {
                  dislikeCount++;
                }
              }
            })}

            {likeCount === 1 ? (
              <li>{likeCount} Like</li>
            ) : (
              <li>{likeCount} Likes</li>
            )}

            {dislikeCount === 1 ? (
              <li>{dislikeCount} Dislike</li>
            ) : (
              <li>{dislikeCount} Dislikes</li>
            )}

            <br />
          </div>
        );
      })}
    </>
  );
}

export default ProductPage;
