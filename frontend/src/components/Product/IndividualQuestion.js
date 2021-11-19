import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setAllQuestions,
  editQuestion,
  deleteQuestion,
} from "../../store/questions";
import styles from "./ProductPage.module.css";

export default function IndividualQuestion({
  question,
  i,
  productQuestionsLength,
}) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const answerLikes = useSelector((state) => state.answerLikes);

  const [bool, setBool] = useState(false);
  const [content, setContent] = useState(question.content);

  // I was having a React console.warning when deleting a question
  // and adding the following helped rid of it
  const [didMount, setDidMount] = useState(false);
  
  useEffect(() => {
    setDidMount(true);

    return () => setDidMount(false);
  }, []);

  if (!didMount) return null;
  // From: https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp

  let curTime = new Date();

  const handleSubmit = async () => {
    await dispatch(editQuestion({ id: question.id, content }));

    await dispatch(setAllQuestions());

    setBool(false);
  };

  const handleSubmit2 = async () => {
    let answersIdsArr = [];
    let answerLikeIdsArr = [];

    question?.answers?.forEach((answer) => {
      answersIdsArr.push(answer.id);

      answerLikes?.forEach((answerLike) => {
        if (answerLike.answerId === answer.id) {
          answerLikeIdsArr.push(answerLike.id);
        }
      });
    });

    await dispatch(
      deleteQuestion({ id: question.id, answersIdsArr, answerLikeIdsArr })
    );

    await dispatch(setAllQuestions());

    setBool(false);
  };

  return (
    <div>
      <h3 className={styles.title}>
        Question {productQuestionsLength - i}
      </h3>

      <h4>By: {question.User.username}</h4>

      <h5>
        Posted:{" "}
        {Math.abs(
          Math.round(
            (curTime - new Date(question.createdAt)) / (1000 * 60 * 60 * 24)
          )
        ) > 1 &&
          `${Math.abs(
            Math.round(
              (curTime - new Date(question.createdAt)) / (1000 * 60 * 60 * 24)
            )
          )} days ago`}{" "}
        {Math.abs(
          Math.round(
            (curTime - new Date(question.createdAt)) / (1000 * 60 * 60 * 24)
          )
        ) === 1 &&
          `${Math.abs(
            Math.round(
              (curTime - new Date(question.createdAt)) / (1000 * 60 * 60 * 24)
            )
          )} day ago`}
        {Math.abs(
          Math.round(
            (curTime - new Date(question.createdAt)) / (1000 * 60 * 60 * 24)
          )
        ) === 0 && "Today"}{" "}
      </h5>

      {!bool && <h4>{question.content}</h4>}

      {bool && (
        <textarea
          type="text"
          onChange={(e) => setContent(e.target.value)}
          defaultValue={question.content}
        ></textarea>
      )}


      {!bool && question.userId === user.id && (
        <button onClick={() => setBool(true)}>Edit</button>
      )}

      {bool && question.userId === user.id && (
        <div>
          <button onClick={handleSubmit}>Submit</button>

          {"     "}

          <button onClick={handleSubmit2}>Remove</button>

          {"     "}

          <button onClick={() => setBool(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
