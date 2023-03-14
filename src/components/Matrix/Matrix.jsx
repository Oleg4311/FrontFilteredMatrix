import React, { useState } from "react";
import styles from "./Matrix.module.css";

const count = 169;
const startArr = [];

for (let i = 0; i <= count; i++) {
  let index = Math.floor((Math.random() - 0.5) * startArr.length);
  startArr.push(index);
}

const returnStyles = (num, idx, divState) => {
  if (num > 0)
    return (
      <div
        style={{ backgroundColor: `rgb(65, 188, 156, ${num*10}%)` }}
        key={idx}
        className={`${styles.bDiv1} ${divState === 2 ? styles.divNone : ""}`}
      >
        {num}
      </div>
    );
  if (num < 0)
    return (
      <div
        style={{
          backgroundColor: `rgb(191, 11, 27, ${Math.abs(num*10)}%)`,
        }}
        key={idx}
        className={`${styles.bDiv3} ${divState === 1 ? styles.divNone : ""}`}
      >
        {num}
      </div>
    );
  return (
    <div
      style={{ backgroundColor: `rgb(21, 24, 32)` }}
      key={idx}
      className={`${styles.bDiv2} ${
        divState === 1 || divState === 2 ? styles.divNone : ""
      }`}
    >
      {num}
    </div>
  );
};

const btn1 = "Filter > 0";
const btn2 = "All";
const btn3 = "Filter < 0";

export default function Matrix() {
  const array = Array(count).fill(count);

  const [divState, setDivState] = useState(0);

  return (
    <div className={styles.mBox}>
      <div className={styles.mDiv}>
        {array.map((item, idx) => {
          let num = startArr[idx];
          return returnStyles(num, idx, divState);
        })}
      </div>
      <div className={styles.bDiv}>
        <button className={styles.btn1} onClick={() => setDivState(1)}>
          {btn1}
        </button>
        <button className={styles.btn2} onClick={() => setDivState(0)}>
          {btn2}
        </button>
        <button className={styles.btn3} onClick={() => setDivState(2)}>
          {btn3}
        </button>
      </div>
    </div>
  );
}
