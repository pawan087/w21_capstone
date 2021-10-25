import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import IndividualQuestion from "./IndividualQuestion.js";
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
      <h2 className={styles.title}>Questions</h2>

      {questionsWithAnswers?.reverse().map((question, i) => {
        return (
          <div key={i}>
            <IndividualQuestion
              question={question}
              i={i}
              productQuestionsLength={productQuestions?.length}
            />

            <br />

            <h4 className={styles.title}>
              Question {productQuestions?.length - i}'s Answer(s):
            </h4>

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
