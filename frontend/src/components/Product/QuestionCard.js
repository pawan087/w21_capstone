import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AnswerCard from "./AnswersCard.js";
import { setAllAnswers } from "../../store/answers.js";
import styles from "./ProductPage.module.css";

export default function QuestionCard({ productQuestions }) {
  const dispatch = useDispatch();

  const answers = useSelector((state) => state.answers);

  let questionsWithAnswers = [];

  productQuestions?.forEach((question) => {
    let id1 = question.id;
    let arr = [];

    answers?.forEach((answer) => {
      let id2 = answer.questionId;

      if (id1 === id2) {
        arr.push(answer);
      }
    });

    questionsWithAnswers.push({ ...question, answers: arr });
  });

  useEffect(() => {
    dispatch(setAllAnswers());
  }, [dispatch]);

  return (
    <>
      <h4 className={styles.title}>Q&A</h4>

      {questionsWithAnswers?.map((question, i) => {
        return (
          <div key={i}>
            <h5 className={styles.questionTitle}>Question</h5>

            <li>{question.User.username}</li>

            <li>{question.content}</li>

            <br />

            <h5 className={styles.answersTitle}>Answer(s):</h5>

            <AnswerCard questionId={question.id} answers={question.answers} />
          </div>
        );
      })}

      {productQuestions?.length === 0 && (
        <p>Sorry, no questions have been asked yet.</p>
      )}
    </>
  );
}
