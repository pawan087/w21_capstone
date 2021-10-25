import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createAnswer, setAllAnswers } from "../../store/answers";
// import styles from "./ProductPage.module.css";

export default function LeaveAnswerCard({ questionId }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const clear = () => {
    setContent("");
  };

  const handleSubmit = async () => {
    if (content === "") {
      return;
    }

    setLoading(true);

    await dispatch(
      createAnswer({ userId: user.id, questionId: questionId, content })
    );

    await dispatch(setAllAnswers());

    setContent("");

    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder={"Leave an Answer"}
          type="text"
          value={content}
        ></textarea>
      </div>

      <br />

      <button onClick={handleSubmit}>Reply</button>

      {"     "}

      <button onClick={clear}>Clear</button>

      {loading && <p>Thank you for your submission.</p>}
    </div>
  );
}
