import React from "react";
import styles from '@styles/loader1.module.css'

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles.duo} ${styles.duo1}`}>
        <div className={styles.dot + ' ' + styles.dota}></div>
        <div className={styles.dot + ' ' + styles.dotb}></div>
      </div>
      <div className={`${styles.duo} ${styles.duo2}`}>
        <div className={styles.dot + ' ' + styles.dota}></div>
        <div className={styles.dot + ' ' + styles.dotb}></div>
      </div>
    </div>
  );
};

export default Loading;
