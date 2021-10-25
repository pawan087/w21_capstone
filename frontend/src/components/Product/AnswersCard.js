import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import IndividualAnswer from "./IndividualAnswer";
import LeaveAnswerCard from "./LeaveAnswerCard";
import { setAllAnswerLikes } from "../../store/answerLikes";
// import styles from "./ProductPage.module.css";

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
            <IndividualAnswer
              answer={answer}
              key={i}
              i={i}
              len={answersAndLikes?.length}
            />
          </div>
        );
      })}

      {answersAndLikes?.length === 0 && (
        <p>No one has answered this question, yet. Be the first!</p>
      )}

      <br />
      <br />

      <LeaveAnswerCard questionId={questionId} />
    </div>
  );
}
