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
    if (review?.rating !== '0') {

      obj[Math.round(review?.rating)] += 1;
    }
  });

  let arr = Object.entries(obj);

  let sum = reviews?.length;

  arr?.forEach((x) => {
    sum += x[1];
  });

  // let colors = {
  //   1: "danger",
  //   2: "warning",
  //   3: "info",
  //   4: "success",
  // };

  return (
    <div className={styles.bars}>
      {arr?.map((x, i) => {
        return (
          <div key={i} className={styles.labelWithBars}>
            <div className={styles.starsLabel}>{i + 1} {i + 1 > 1 ? 'Stars' : 'Star'}</div>

            <Progress max={100} className={styles.stars} color={'black'} value={(x[1]/sum * 100)} />
          </div>
        );
      }).reverse()}
    </div>
  );
}
