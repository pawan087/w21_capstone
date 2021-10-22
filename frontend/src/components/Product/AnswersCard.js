import React, { useEffect } from "react";
// import styles from "./ProductPage.module.css";
import { setAllAnswerLikes } from "../../store/answerLikes";
import { useDispatch, useSelector } from "react-redux";

export default function AnswersCard({ questionId, answers }) {
  const dispatch = useDispatch();

  const answerLikes = useSelector((state) => state.answerLikes);

  let answersAndLikes = [];

  answers?.forEach((answer) => {
    if (answer.questionId === +questionId) {
      let id1 = answer.id;
      let likeCount = 0;
      let dislikeCount = 0;

      answerLikes?.forEach((answerLike) => {
        let id2 = answerLike.answerId;

        if (id1 === id2) {
          if (answerLike.like === true) {
            likeCount++;
          } else {
            dislikeCount++;
          }
        }
      });

      answersAndLikes.push({
        ...answer,
        likeCount: likeCount,
        dislikeCount: dislikeCount,
      });
    }
  });

  useEffect(() => {
    dispatch(setAllAnswerLikes());
  }, [dispatch]);

  return (
    <div>
      {answersAndLikes?.map((answer, i) => {
        return (
          <div key={i}>
            <li>{answer.User.username}</li>

            <li>{answer.content}</li>

            {answer.likeCount === 1 ? (
              <li>{answer.likeCount} Like</li>
            ) : (
              <li>{answer.likeCount} Likes</li>
            )}

            {answer.dislikeCount === 1 ? (
              <li>{answer.dislikeCount} Dislike</li>
            ) : (
              <li>{answer.dislikeCount} Dislikes</li>
            )}

            <br />
          </div>
        );
      })}
    </div>
  );
}
