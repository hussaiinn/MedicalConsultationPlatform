import React from "react";
import styles from "@styles/writeloader.module.css";

const WriteLoader = ({msg}) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.loader}>
          <div className={styles.wrapper}>
            <div className={styles.circle}></div>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
          </div>
        </div>
        {/* <p className={styles.signoutmsg}>{msg}</p> */}
      </div>
      
    </>
  );
};

export default WriteLoader;
