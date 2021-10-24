import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import StarPicker from "react-star-picker";
import { useDispatch, useSelector } from "react-redux";

import { setAllQuestions, editQuestion } from "../../store/questions";
import styles from "./ProductPage.module.css";

export default function IndividualQuestion({
  question,
  i,
  productQuestionsLength,
}) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [bool, setBool] = useState(false);
  const [content, setContent] = useState(question.content);

  let curTime = new Date();

  const handleSubmit = async () => {
    await dispatch(editQuestion({ id: question.id, content }));

    await dispatch(setAllQuestions());

    setBool(false);
  };

  const handleSubmit2 = async () => {
    // await dispatch(deleteReview({ id: review.id }));

    // await dispatch(setAllReviews());

    setBool(false);
  };

  return (
    <div>
      <h4 className={styles.orderTitle}>
        Question {productQuestionsLength - i}
      </h4>

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

      <br />
      <br />

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
