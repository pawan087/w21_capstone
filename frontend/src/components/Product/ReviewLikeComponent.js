import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createLike,
  setAllReviewLikes,
  deleteLike,
  deleteTheOpposingAndCreateLike,
} from "../../store/reviewLikes";

export default function ReviewLikeComponent({ review }) {
  const dispatch = useDispatch();
  const reviewLikes = useSelector((state) => state.reviewLikes);
  const user = useSelector((state) => state.session.user);

  const handleLike = async () => {
    let alreadyLiked = false;
    let alreadyDisliked = false;
    let id;
    let id2;

    reviewLikes?.forEach((reviewLike) => {
      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        reviewLike.like
      ) {
        // console.log("Already liked");
        alreadyLiked = true;
        id = reviewLike.id;
      }

      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        !reviewLike.like
      ) {
        alreadyDisliked = true;
        id2 = reviewLike.id;
      }
    });

    if (alreadyLiked) {
      // console.log("Delete Like");

      await dispatch(deleteLike(id));

      await dispatch(setAllReviewLikes());
    } else {
      // console.log("Not liked");
      // console.log("Create Like");

      if (alreadyDisliked) {
        await dispatch(
          deleteTheOpposingAndCreateLike({
            userId: user.id,
            reviewId: review.id,
            like: true,
            idToDelete: id2,
          })
        );
      } else {
        await dispatch(
          createLike({ userId: user.id, reviewId: review.id, like: true })
        );
      }

      await dispatch(setAllReviewLikes());
    }
  };

  const handleDislike = async () => {
    let alreadyDisliked = false;
    let alreadyLiked = false;

    let id;
    let id2;

    reviewLikes?.forEach((reviewLike) => {
      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        !reviewLike.like
      ) {
        // console.log("Already disliked");
        alreadyDisliked = true;
        id = reviewLike.id;
      }

      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        reviewLike.like
      ) {
        alreadyLiked = true;
        id2 = reviewLike.id;
      }
    });

    if (alreadyDisliked) {
      // console.log("Delete Dislike");

      await dispatch(deleteLike(id));

      await dispatch(setAllReviewLikes());
    } else {
      // console.log("Not disliked");
      // console.log("Create Dislike");

      if (alreadyLiked) {
        await dispatch(
          deleteTheOpposingAndCreateLike({
            userId: user.id,
            reviewId: review.id,
            like: false,
            idToDelete: id2,
          })
        );
      } else {
        await dispatch(
          createLike({ userId: user.id, reviewId: review.id, like: false })
        );
      }

      await dispatch(setAllReviewLikes());
    }
  };

  return (
    <div>
      {review.likeCount === 0 && <button onClick={handleLike}>Like</button>}

      {"     "}

      {review.likeCount === 1 && (
        <button onClick={handleLike}>{review.likeCount} Like</button>
      )}

      {"     "}

      {review.likeCount > 1 && (
        <button onClick={handleLike}>{review.likeCount} Likes</button>
      )}

      {"     "}

      {review.dislikeCount === 0 && (
        <button onClick={handleDislike}>Dislike</button>
      )}

      {"     "}

      {review.dislikeCount === 1 && (
        <button onClick={handleDislike}>{review.dislikeCount} Dislike</button>
      )}

      {"     "}

      {review.dislikeCount > 1 && (
        <button onClick={handleDislike}>{review.dislikeCount} Dislikes</button>
      )}
    </div>
  );
}
