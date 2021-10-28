import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createLike,
  setAllAnswerLikes,
  deleteLike,
  deleteTheOpposingAndCreateLike,
} from "../../store/answerLikes";

export default function AnswerLikeComponent({ answer }) {
  const dispatch = useDispatch();
  const answerLikes = useSelector((state) => state.answerLikes);
  const user = useSelector((state) => state.session.user);

  const handleLike = async () => {
    let alreadyLiked = false;
    let alreadyDisliked = false;
    let id;
    let id2;

    answerLikes?.forEach((answerLike) => {
      if (
        answerLike.userId === user.id &&
        answerLike.answerId === answer.id &&
        answerLike.like
      ) {
        alreadyLiked = true;
        id = answerLike.id;
      }

      if (
        answerLike.userId === user.id &&
        answerLike.answerId === answer.id &&
        !answerLike.like
      ) {
        alreadyDisliked = true;
        id2 = answerLike.id;
      }
    });

    if (alreadyLiked) {
      await dispatch(deleteLike(id));

      await dispatch(setAllAnswerLikes());
    } else {
      if (alreadyDisliked) {
        await dispatch(
          deleteTheOpposingAndCreateLike({
            userId: user.id,
            answerId: answer.id,
            like: true,
            idToDelete: id2,
          })
        );
      } else {
        await dispatch(
          createLike({ userId: user.id, answerId: answer.id, like: true })
        );
      }

      await dispatch(setAllAnswerLikes());
    }
  };

  const handleDislike = async () => {
    let alreadyDisliked = false;
    let alreadyLiked = false;

    let id;
    let id2;

    answerLikes?.forEach((answerLike) => {
      if (
        answerLike.userId === user.id &&
        answerLike.answerId === answer.id &&
        !answerLike.like
      ) {
        alreadyDisliked = true;
        id = answerLike.id;
      }

      if (
        answerLike.userId === user.id &&
        answerLike.answerId === answer.id &&
        answerLike.like
      ) {
        alreadyLiked = true;
        id2 = answerLike.id;
      }
    });

    if (alreadyDisliked) {
      await dispatch(deleteLike(id));
      await dispatch(setAllAnswerLikes());
    } else {
      if (alreadyLiked) {
        await dispatch(
          deleteTheOpposingAndCreateLike({
            userId: user.id,
            answerId: answer.id,
            like: false,
            idToDelete: id2,
          })
        );
      } else {
        await dispatch(
          createLike({ userId: user.id, answerId: answer.id, like: false })
        );
      }

      await dispatch(setAllAnswerLikes());
    }
  };

  return (
    <div>
      {answer.likeCount === 0 && <button onClick={handleLike}>Like</button>}

      {"     "}

      {answer.likeCount === 1 && (
        <button onClick={handleLike}>{answer.likeCount} Like</button>
      )}

      {"     "}

      {answer.likeCount > 1 && (
        <button onClick={handleLike}>{answer.likeCount} Likes</button>
      )}

      {"     "}

      {answer.dislikeCount === 0 && (
        <button onClick={handleDislike}>Dislike</button>
      )}

      {"     "}

      {answer.dislikeCount === 1 && (
        <button onClick={handleDislike}>{answer.dislikeCount} Dislike</button>
      )}

      {"     "}

      {answer.dislikeCount > 1 && (
        <button onClick={handleDislike}>{answer.dislikeCount} Dislikes</button>
      )}
    </div>
  );
}
