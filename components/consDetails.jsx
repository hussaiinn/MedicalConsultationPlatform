import React from "react";
import styles from "@styles/checkout.module.css";

const ConsultationDetails = ({ data, ptname, ptmobile, ptpaid }) => {
  console.log(data);
  return (
    <div className={styles.details}>
      <div className={styles.detailsHeading}>Consultation Details</div>
      <div className={`${styles.detailsName} ${styles.greyBtmBorder}`}>
        <h4 className={styles.DrName}>
          Dr. {data.firstName} {data.lastName}
        </h4>
        <span className={styles.DrSpecialty}>{data.qualification}</span>
      </div>
      <div
        className={`${styles.detailsName} ${styles.greyBtmBorder} ${styles.pntcnct}`}
      >
        <h4 className={styles.DrName}>{ptname ? ptname : "Patient name"}</h4>
        <span className={`${styles.DrSpecialty} ${styles.clrGrey}`}>
          {ptname ? "Patient name" : null}
        </span>
        <h4 className={styles.DrName} style={{ marginTop: "1rem" }}>
          {ptmobile ? ptmobile : "Contact Number"}
        </h4>
        <span className={`${styles.DrSpecialty} ${styles.clrGrey}`}>
          {ptmobile ? "Contact Number" : null}
        </span>
      </div>
      <div className={`${styles.detailsName} ${styles.marginTp0}`}>
        <h4 className={styles.DrName}>Consultation Fees</h4>
        <span className={styles.DrSpecialty}>{data.fees}</span>
      </div>
      <div
        className={`${styles.detailsName} ${styles.greyBtmBorder} ${styles.flexBtwn}`}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h4 className={`${styles.DrName} ${styles.clrGrey}`}>Price</h4>
          <span
            className={`${styles.DrSpecialty} ${styles.clrGrey} ${styles.marginRight15}`}
          >
            {data.fees}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h4 className={`${styles.DrName} ${styles.clrGrey}`}>Amount Paid</h4>
          <span
            className={`${styles.DrSpecialty} ${styles.clrGrey} ${styles.marginRight15}`}
          >
            {ptpaid}
          </span>
        </div>
      </div>
      <div
        className={`${styles.detailsName} ${styles.flexBtwn} ${styles.marginTp0}`}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h4 className={`${styles.DrName} ${styles.clrCyan}`}>
          Remaining Amount
        </h4>
        <span className={`${styles.DrSpecialty} ${styles.clrCyan}`}>
          {data.fees - ptpaid}
        </span>
      </div>
    </div>
  );
};

export default ConsultationDetails;
