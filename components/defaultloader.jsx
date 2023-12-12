import React from "react";
import styles from "@styles/defaultloader.module.css";

const DefaultLoad = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrap}>
        <div className={styles.loading}>
          <div className={styles.bounceball}></div>
          <div className={styles.text}>LOADING...</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLoad;
