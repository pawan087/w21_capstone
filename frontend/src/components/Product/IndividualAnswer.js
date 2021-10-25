import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AnswerLikeComponent from "./AnswerLikeComponent";
import { setAllAnswers, editAnswer, deleteAnswer } from "../../store/answers";
import styles from "./ProductPage.module.css";

export default function IndividualAnswer({ answer, i, len }) {
  const dispatch = useDispatch();

  const answerLikes = useSelector((state) => state.answerLikes);
  const user = useSelector((state) => state.session.user);

  const [bool, setBool] = useState(false);
  const [content, setContent] = useState("answer.content");

  let curTime = new Date();

  const handleSubmit = async () => {
    await dispatch(editAnswer({ id: answer.id, content }));

    await dispatch(setAllAnswers());

    setBool(false);
  };

  const handleSubmit2 = async () => {
    let arr = [];

    answerLikes?.forEach((answerLike) => {
      if (answerLike.answerId === answer.id) {
        arr.push(answerLike.id);
      }
    });

    await dispatch(deleteAnswer({ id: answer.id, arr }));

    await dispatch(setAllAnswers());

    setBool(false);
  };

  return (
    <div>
      <h5 className={styles.orderTitle}>Answer {len - i}</h5>

      <h4>By: {answer.User.username}</h4>

      <h5>
        Posted:{" "}
        {Math.abs(
          Math.round(
            (curTime - new Date(answer.createdAt)) / (1000 * 60 * 60 * 24)
          )
        ) > 1 &&
          `${Math.abs(
            Math.round(
              (curTime - new Date(answer.createdAt)) / (1000 * 60 * 60 * 24)
            )
          )} days ago`}{" "}
        {Math.abs(
          Math.round(
            (curTime - new Date(answer.createdAt)) / (1000 * 60 * 60 * 24)
          )
        ) === 1 &&
          `${Math.abs(
            Math.round(
              (curTime - new Date(answer.createdAt)) / (1000 * 60 * 60 * 24)
            )
          )} day ago`}
        {Math.abs(
          Math.round(
            (curTime - new Date(answer.createdAt)) / (1000 * 60 * 60 * 24)
          )
        ) === 0 && "Today"}{" "}
      </h5>

      {!bool && <h4>{answer.content}</h4>}

      {bool && (
        <textarea
          type="text"
          onChange={(e) => setContent(e.target.value)}
          defaultValue={answer.content}
        ></textarea>
      )}

      {!bool && <AnswerLikeComponent answer={answer} />}

      <br />
      <br />

      {!bool && answer.userId === user.id && (
        <button onClick={() => setBool(true)}>Edit</button>
      )}

      {bool && answer.userId === user.id && (
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
