import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductPage.module.css";
import { setAllAnswers } from "../../store/answers.js";
import AnswerCard from "./AnswersCard.js";

export default function QuestionCard({ productQuestions }) {
  const dispatch = useDispatch();

  const answers = useSelector((state) => state.answers);

  let questionsWithAnswers = [];

  productQuestions?.forEach((question) => {
    let id1 = question.id;
    let arr = [];

    answers?.forEach((answer) => {
      let id2 = answer.questionId;

      if (id1 == id2) {
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

      {questionsWithAnswers?.map((question) => {
        return (
          <div key={question.id}>
            <h5>Question</h5>

            <li>{question.User.username}</li>

            <li>{question.content}</li>

            <br />

            <h5>Answers:</h5>

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
