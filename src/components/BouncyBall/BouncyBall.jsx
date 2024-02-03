import React from "react";
import styles from "./styles.module.css";

const BouncyBall = () => {
  const [clickCount, setClickCount] = React.useState(0);
  const [ballClasses, setBallClasses] = React.useState(`${styles.ball}`);
  const ballClick = () => {
    setBallClasses(`${ballClasses} ${styles.userClicked}`);
    setClickCount(clickCount + 1);
  };

  return (
    <div className={styles.container}>
      <div>click count: {clickCount} </div>
      <div onClick={() => ballClick()} className={ballClasses} />
    </div>
  );
};

export default BouncyBall;
