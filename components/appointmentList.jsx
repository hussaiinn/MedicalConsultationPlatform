import React, { useEffect } from "react";
import styles from "@styles/appointment.module.css";
import { useState } from "react";

const AppointmentListt = ({ type, data, approvedUpdate, ut }) => {
  const originalData = data.date;
  const formateDate = originalData.split("T")[0];
  const [isdoctor, setisDoctor] = useState(null);
  const istype = type === 'new';
  const isut = ut === '2'; 

  const handleApproved = (action) => {
    console.log("in appointmentlistt");
    approvedUpdate(data._id, action);
  };
  console.log(ut, type, data);

  useEffect(() => {
    console.log('in se')
    if (istype && isut) {
      
      setisDoctor(true);
    }
  },[]);
  // console.log(typeof(ut))
  // console.log(istype, isut)
  // console.log(isdoctor)

  return (
    <tbody className={styles.tablebody}>
      <tr className={styles.tablerow}>
        <td>1</td>
        <td>{data.patientName}</td>
        <td>{formateDate}</td>
        <td>{data.time}</td>
        <td>{data.trnsId}</td>
        <td>{data.amtPaid}</td>
        <td>6265522765</td>
        {isdoctor && istype? (
          <>
            <td
              style={{ color: "green" }}
              className={styles.approved}
              onClick={() => handleApproved("approved")}
            >
              Approved
            </td>
            <td
              style={{ color: "red" }}
              className={styles.reject}
              onClick={() => handleApproved("reject")}
            >
              Reject
            </td>
          </>
        ) : (
          <>
            {data.approved === true? <td style={{color: 'darkgreen'}}>Approved</td>:null}
            {data.reject === true? <td style={{color: "darkred"}}>Rejected</td>: null}
            {type==='previous'? <td style={{color: 'darkblue'}}>Completed</td>: null}
          </>
        )}
      </tr>
    </tbody>
  );
};

export default AppointmentListt;
