"use client";
import React from "react";
import Appointment from "@components/appointment";
import styles from "@styles/appointment.module.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const AppointmentPage = ({ params }) => {
  const [approvedData, setApprovedData] = useState([]);
  const [unapprovedData, setUnapprovedData] = useState([]);
  const [rejectedDAta, setrejectedDAta] = useState([]);
  const [passingdata, setpassedData] = useState([]);
  const searchParams = useSearchParams();
  const ut = searchParams.get("ut");

  const router = useRouter();
  const [flag, setflag] = useState(false);
  const [type, setType] = useState(ut === 2 ? "new" : "today");

  useEffect(() => {
    const getData = async () => {
      try {
        const email = searchParams.get("id");
        const response = await fetch(`/api/appointment/appdata/${email}/data`); // Replace with your actual API route
        const data = await response.json();

        // Separate data based on the "approved" field
        const approved = data.filter((item) => item.approved === true);
        const unapproved = data.filter(
          (item) => item.approved === false && item.reject === false
        );
        const rejected = data.filter((item) => item.reject === true);

        setApprovedData(approved);
        setUnapprovedData(unapproved);
        console.log(approvedData);
        console.log(rejected);
        setrejectedDAta(rejected);
        console.log(rejectedDAta);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const updateApproved = async (dataId, action) => {
    console.log("In page.jsx");
    console.log(dataId);

    try {
      const response = await fetch(`/api/appointment/approved/${dataId}`, {
        method: "PATCH",
        body: JSON.stringify({
          approved: true,
          action: action,
        }),
      });
      if (response.ok) {
        setflag(!flag);
      }
    } catch (error) {
      console.log("Error creating new prompt");
      console.log(error);
    }
  };

  console.log(unapprovedData);

  const handlenew = () => {
    setType("new");
  };

  const handleprevious = () => {
    setType("previous");
  };
  const handletodays = () => {
    setType("today");
  };

  const handleupcoming = () => {
    setType("upcoming");
  };

  const handlerejected = () => {
    setType("Rejected");
  };

  // if(type === 'new'){
  //   setpassedData(unapprovedData)
  // }

  // if(type === 'upcoming'){
  //   setpassedData(approvedData)
  // }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.sidePanel}>
          {ut == 1 ? (
            <>
              <p className={styles.sidetext} onClick={handleprevious}>
                Previous appointments
              </p>
              <p className={styles.sidetext} onClick={handletodays}>
                Today's appointments
              </p>
              <p className={styles.sidetext} onClick={handleupcoming}>
                Upcoming appointments
              </p>
              <p className={styles.sidetext} onClick={handlerejected}>
                Rejected appointments
              </p>
            </>
          ) : (
            <>
              <p className={styles.sidetext} onClick={handlenew}>
                New appointments{" "}
              </p>
              <p className={styles.sidetext} onClick={handletodays}>
                Today's appointments
              </p>
              <p className={styles.sidetext} onClick={handleupcoming}>
                Upcoming appointments
              </p>
            </>
          )}
        </div>

        <Appointment
          type={type}
          data={
            type === "new"
              ? unapprovedData
              : type === "upcoming"
              ? approvedData
              : type === "today"
              ? approvedData
              : type === "Rejected"
              ? rejectedDAta
              : type === "previous"
              ? approvedData
              : null
          }
          updateapprove={updateApproved}
          ut={ut}
        />
      </div>
    </>
  );
};

export default AppointmentPage;
