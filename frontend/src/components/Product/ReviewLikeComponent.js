import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  createLike,
  setAllReviewLikes,
  deleteLike,
} from "../../store/reviewLikes";

export default function ReviewLikeComponent({ review }) {
  const dispatch = useDispatch();
  const params = useParams();
  const reviewLikes = useSelector((state) => state.reviewLikes);
  const user = useSelector((state) => state.session.user);

  const handleLike = async () => {
    let alreadyLiked = false;
    let id;

    reviewLikes?.forEach((reviewLike) => {
      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        reviewLike.like
      ) {
        console.log("Already liked");
        alreadyLiked = true;
        id = reviewLike.id;
      }
    });

    if (alreadyLiked) {
      console.log("Delete Like");

      await dispatch(deleteLike(id));

      await dispatch(setAllReviewLikes());
    } else {
      console.log("Not liked");
      console.log("Create Like");

      await dispatch(
        createLike({ userId: user.id, reviewId: review.id, like: true })
      );

      await dispatch(setAllReviewLikes());
    }
  };

  const handleDislike = () => {
    let alreadyDisliked = false;

    reviewLikes?.forEach((reviewLike) => {
      if (
        reviewLike.userId === user.id &&
        reviewLike.reviewId === review.id &&
        !reviewLike.like
      ) {
        console.log("Already disliked");
        alreadyDisliked = true;
      }
    });

    if (alreadyDisliked) {
      console.log("Delete Disike");
    } else {
      console.log("Not disliked");
      console.log("Create Dislike");
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
