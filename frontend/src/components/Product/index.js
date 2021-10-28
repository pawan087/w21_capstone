import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router";

import NewCartItem from "./NewCartItem.js";
import ProductDetail from "./ProductDetail";
import QuestionCard from "./QuestionCard";
import ReviewCard from "./ReviewCard";
import WriteReviewCard from "./WriteReviewCard";
import AskQuestionCard from "./AskQuestionCard";
import { setAllProducts } from "../../store/products.js";
import { setAllReviews } from "../../store/reviews.js";
import { setAllReviewLikes } from "../../store/reviewLikes";
import { setAllQuestions } from "../../store/questions.js";
import { addToRecent } from "../../store/recentlyViewed";

function ProductPage() {
  const dispatch = useDispatch();
  const params = useParams();

  const user = useSelector((state) => state.session.user);
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
    dispatch(addToRecent({ productId: +params.id, userId: user.id }));
    dispatch(setAllProducts());
    dispatch(setAllReviews());
    dispatch(setAllReviewLikes());
    dispatch(setAllQuestions());
  }, [params.id, user.id, dispatch]);

  if (!user) return <Redirect to="/" />;

  return (
    <>
      <ProductDetail
        num={productReviews?.length}
        avgRating={avgRating}
        product={product}
        reviews={productReviews}
      />

      <NewCartItem productId={params.id} />

      <br></br>
      <br></br>

      <ReviewCard productReviews={productReviews} />

      <br></br>
      <br></br>

      <WriteReviewCard />

      <br></br>
      <br></br>

      <QuestionCard productQuestions={productQuestions} />

      <br></br>
      <br></br>

      <AskQuestionCard />
    </>
  );
}

export default ProductPage;
