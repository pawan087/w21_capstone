import React from "react";
import styles from "./ProductPage.module.css";

export default function AnswersCard({ answers }) {
  return (
    <div>
      {answers?.map((answer) => {
        return (
          <div key={answer.id}>
            <li>{answer.User.username}</li>

            <li>{answer.content}</li>

            <br />
          </div>
        );
      })}
    </div>
  );
}
