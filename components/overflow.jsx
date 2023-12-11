import React from "react";
import styles from "@styles/checkout.module.css";

const Overflow1 = () => {
  return (
    <div className={styles.expandInfo}>
      <div className={styles.expandInput}>
        <input
          type="date"
          name="date"
          id="date"
          className={styles.inputASDate}
        />
        <select
          placeholder="Consultation Time"
          name=""
          id=""
          className={styles.selectfor}
        >
          <option value="">Consultation Time</option>
          <option value="1:30 P.M. to 2:30 P.M.">1:30 P.M. to 2:30 P.M.</option>
          <option value="1:30 P.M. to 2:30 P.M.">1:30 P.M. to 2:30 P.M.</option>
          <option value="1:30 P.M. to 2:30 P.M.">1:30 P.M. to 2:30 P.M.</option>
        </select>
      </div>
      <div className={styles.expandMesBtn}>
        <span className={styles.message}>*Consultation Timings</span>
        <button className={`${styles["button-4"]} ${styles.consultBtn}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Overflow1;
