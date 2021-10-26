import React from "react";
import { Progress } from "reactstrap";
import styles from "./ProductPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Testing({ reviews }) {
  let obj = {};

  for (let i = 1; i < 6; i++) {
    obj[i] = 0;
  }

  reviews?.forEach((review) => {
    obj[Math.floor(review.rating)] += 1;
  });

  let arr = Object.entries(obj);

  let sum = reviews?.length;

  arr?.forEach((x) => {
    sum += x[1];
  });

  let colors = {
    1: "danger",
    2: "warning",
    3: "info",
    4: "success",
  };

  return (
    <div className={styles.bars}>
      {arr?.map((x, i) => {
        return (
          <div>
            <div>{i + 1} Star Reviews</div>

            <Progress color={colors[x[0]]} value={(x[1] / sum) * 100} />
          </div>
        );
      })}
    </div>
  );
}
