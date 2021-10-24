import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { createQuestion, setAllQuestions } from "../../store/questions";
import styles from "./ProductPage.module.css";

export default function AskQuestionCard() {
  const dispatch = useDispatch();
  const params = useParams();

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
      createQuestion({ userId: user.id, productId: params.id, content })
    );

    await dispatch(setAllQuestions());

    setContent("");

    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div>
      <div className={styles.title}>Post a Question</div>

      <br></br>

      <div>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder={"Any questions?"}
          type="text"
          value={content}
        ></textarea>
      </div>

      <br />

      <button onClick={handleSubmit}>Ask</button>

      {"     "}

      <button onClick={clear}>Clear</button>

      {loading && <p>Thank you for your submission.</p>}
    </div>
  );
}
