"use client";
import React, { useState } from "react";
import styles from "@styles/appointment.module.css";
import AppointmentListt from "./appointmentList";
import { useEffect } from "react";

const Appointment = ({ type, data, updateapprove, ut }) => {
  const [finalData, setfinaldata] = useState([]);
  

  useEffect(() => {
    if (type === "today") {
      console.log("in today");
      console.log(data);
      const today = new Date();
      const todayDate = today.toISOString().split("T")[0]; // Get today's date in "YYYY-MM-DD" format
      console.log(todayDate);

      const filteredData = data.filter((item) => {
        // Assuming your data has a field named "date"
        console.log(item.date)
        const itemDate = new Date(item.date).toISOString().split("T")[0];
        console.log(itemDate);

        return itemDate === todayDate;
      });
      console.log(filteredData);
      setfinaldata(filteredData);
    }

    if (type === "new") {
      setfinaldata(data);
    }

    if (type === "upcoming") {
      const today1 = new Date();
      const todayDate1 = today1.toISOString().split("T")[0]
      const futureDates = data.filter((item) => {
        const itemDate1 = new Date(item.date).toISOString().split("T")[0];
        return itemDate1 > todayDate1;
      });
      setfinaldata(futureDates)
    }

    if(type === 'Rejected'){
      setfinaldata(data)
    }

    if(type === 'previous'){
      const today2 = new Date();
      const todayDate2 = today2.toISOString().split("T")[0]
      const futureDates = data.filter((item) => {
        const itemDate2 = new Date(item.date).toISOString().split("T")[0];
        return itemDate2 < todayDate2;
      });
      setfinaldata(futureDates)
    }
  }, [type, data]);
  return (
    <>
      <div className={styles.mainBody}>
        {/* <div className={styles.mainBtn}>
          <button className={`${styles.docBtn} ${styles["button-4"]}`}>
            Add Posts
          </button>
          <button className={`${styles.docBtn} ${styles["button-4"]}`}>
            Manage Posts
          </button>
        </div> */}
        <h1 className={styles.mainHead}>{type.toUpperCase()} APPOINTMENTS</h1>
        <table className={styles.mainTable}>
          <thead className={styles.tableHead}>
            <tr className={styles.tablerow}>
              <th>SN</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Transaction ID</th>
              <th>Amount Paid</th>
              <th>Contact No.</th>
            </tr>
          </thead>
          {finalData.map((d) => (
            <AppointmentListt
              type={type}
              data={d}
              approvedUpdate={updateapprove}
              ut={ut}
            />
          ))}
        </table>
      </div>
      {/* </div> */}
    </>
  );
};

export default Appointment;
